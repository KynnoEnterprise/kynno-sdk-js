import * as types from '../types';
import EventEmitter from 'events';
import Websocket from 'isomorphic-ws';
import { SdkError, CODES } from '../errors';

/**
 * kynno Websocket Client
 * @since v0.1
 */
export class WsClient {
  /** @hidden */
  private url: string;
  /** @hidden */
  private ws?: Websocket;
  /** Event emitter */
  eventEmitter: EventEmitter;

  constructor(url: string) {
    this.url = url;
    this.eventEmitter = new EventEmitter();
  }

  /**
   * Initialize ws client
   * @since v0.1
   */
  connect(): void {
    this.ws = new Websocket(this.url);
    if (!this.ws) {
      throw new SdkError('Websocket client not initialized',CODES.Internal); // Should not happen
    }

    this.ws.onopen = () => {
      console.log('Websocket connected');
      this.eventEmitter.emit('open');
    };

    this.ws.onclose = () => {
      console.log('Websocket disconnected');
      this.eventEmitter.emit('close');
    };

    this.ws.onmessage = (resp: Websocket.MessageEvent) => {
      const data = JSON.parse(resp.data.toString());
      if (!data.id) {
        this.eventEmitter.emit(
          'error',
          'Unexpected response: ' //+ JSON.stringify(data)
        );
      }
      // Route the data to the specified subscriber based on the request ID
      this.eventEmitter.emit(data.id, data.error, data.result);
    };

    this.ws.onerror = (err: Websocket.ErrorEvent) => {
      console.log('Websocket error');
      this.eventEmitter.emit('error', err);
    };
  }

  /**
   * Disconnect from server
   * @since v0.1
   */
  async disconnect(): Promise<void> {
    return new Promise(reslove => {
      // Unsubscribe all from server
      const id = 'unsubscribe_all';
      this.send(types.RpcMethods.UnsubscribeAll, id);
      this.eventEmitter.on(id, error => {
        if (error) {
          throw new SdkError(error.message,CODES.Internal);
        }

        if (!this.ws) {
          throw new SdkError('Websocket client not initialized',CODES.Internal); // Should not happen
        }

        // Remove all listeners
        this.eventEmitter.removeAllListeners();
        // Destroy ws instance
        this.ws.terminate();

        reslove();
      });
    });
  }

  /**
   * Check if the ws client is connected or not
   * @since v0.1
   */
  isReady(): boolean {
    return this.ws?.readyState === 1;
  }

  /**
   * Send subscription to tendermint
   * @param method The tendermint rpc method
   * @param id The request id which is the same as the incoming response
   * @param query The tendermint query string
   * @since v0.1
   */
  send(method: string, id: string | number, query?: string): void {
    if (!this.ws) {
      throw new SdkError('Websocket client not initialized',CODES.Internal); // Should not happen
    }
    this.ws.send(
      JSON.stringify({
        jsonrpc: '2.0',
        method,
        id,
        params: {
          query,
        },
      })
    );
  }
}
