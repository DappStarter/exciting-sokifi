require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip notice crime remind hospital hidden enroll olympic gasp'; 
let testAccounts = [
"0x685760e07692763238fe365b66845b2180124b921e6ded79b55c52320f83d8a4",
"0x6257dc70d4252fcc4bac3fc9ff9fb93739f55665106b10e6fd6be780a2f48e95",
"0x914337b1ddbdecb9dd4268deb61f7e8e348db6d9d01fd744292e640235df0bcb",
"0xb7488e647b2ddd5778c64f183fac653d6e228391d6cc7104be5f96560c325175",
"0x179a0db72a0e06f27b4605732d0963ad42bf7c5766b494278b49d9900904bfdb",
"0xfa6e417f4bc57984501bd6072840c62e4c682812dbccb1b34d0b5a7dee509cd3",
"0xe5dd905590b08e1cc53984bc71d47353587369b8438a9a93561b5d9325e32631",
"0xb5453986eabcf0a93f27291292172c0a6db91c1c9c1291c8b8994d034c7f5472",
"0xf4767fc91b982f6f6a8ae6d6f7db9e5618d1df04380ab205a9a5a23f75236cf5",
"0x243a3e74df95c31e74422a6f5d8b4376c93541977c7c0eaec81893e4885aad93"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
