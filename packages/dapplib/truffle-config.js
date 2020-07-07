require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner argue tackle skull guard render remember smile include clock bone gift'; 
let testAccounts = [
"0x38579e8b19867619598e3c6ddc9478ecdd085ff72f33267817e21d014cf5b5b7",
"0xa73b17fd9e6a1e6802bac99cd5beba3f0f03231791f67c58e29f4d79d6d20400",
"0x9b7a12c451976930692b209afd16b4e0327740325e93bbba184f736255bdc580",
"0x771fbed33d5369f6a15686576578bd96e137dc2b25991d058d634de953d6d6ac",
"0x2257f847991c57a7feea81c2da4a7101df2b8a5a8f2655b29b6ee09ed98c7575",
"0x50abebe05dd4b988678a18b3228f7926e5dc416a220c8009b827871e4559c517",
"0xe8c9e38b23e1062d3e3ba9543f462f59cd28384c6c28d9a4955d2a716cc1b4fa",
"0xeade374006490028902498f487ceb10c138d7a4dfa7819e44b40c318b042a0cd",
"0xa5ecaf8e73d6b2adf57f9ab85dbcb846aa6cef56d2b20ab3a13e44193ced95f5",
"0x1b96a9b1f843382b6e1a1a39aee0f24aef7e01a070dafe405b9748cb14c42949"
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
