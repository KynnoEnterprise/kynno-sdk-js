import { Crypto } from '../src/utils';
import * as types from '../src/types';

test('Crypto', async () => {
  // Generates mnemonic
  const mnemonic = Crypto.generateMnemonic();
  expect(mnemonic.split(' ').length).toBe(24);

  // Gets a private key from mnemonic words.
  const privKey = Crypto.getPrivateKeyFromMnemonic(mnemonic);

  // Calculates the public key from a given private key.
  const pubKey = Crypto.getPublicKeyFromPrivateKey(privKey);

  // Gets an address from a public key hex.
  const address = Crypto.getAddressFromPublicKey(pubKey, 'kynno');
  expect(address.substring(0, 5)).toBe('kynno');

  // Generate keystore
  const keystore = Crypto.generateKeyStore(privKey, 'password', 'kynno');
  expect(JSON.parse(JSON.stringify(keystore)).address).toBe(address);

  // Get private key from keystore
  const privKey1 = Crypto.getPrivateKeyFromKeyStore(keystore, 'password');
  expect(privKey1).toBe(privKey);

  console.log(Crypto.encodeAddress('2F36E18CF00DA1568F72AAFD98D94C8D472022C7', 'fca'));

  console.log(Buffer.from('bXbzqbOidvLADyfR/cLVm2o6L9vcpPh+PF6O8m2sOQ4=', 'hex'));
  // TODO
});

test('Marshal PubKey', async ()=>{
  let pk =  Crypto.aminoMarshalPubKey({
    type:types.PubkeyType.ed25519,
    value:'FT782NmKqtZYi6UyNzprh44u7defkzD18IePql6Uj3c=='
  });
  let pk_bech32 = Crypto.encodeAddress(pk,'icp');
  console.log('pk_bech32:',pk_bech32);
});

test('get Address From PublicKey', async ()=>{
  let pk =  Crypto.getAddressFromPublicKey({
    type:types.PubkeyType.ed25519,
    value:Buffer.from('FT782NmKqtZYi6UyNzprh44u7defkzD18IePql6Uj3c==','base64').toString('hex')
  },'ica');
  console.log('pk_bech32:',pk);
});

