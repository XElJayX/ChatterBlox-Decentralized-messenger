require('babel-register');
require('babel-polyfill');

module.exports = {
    networks:{
        development: {
            host: '0.0.0.0',
            port: '9010',
            network_id: '5777' // connect to any network
 

        },
    },
    contracts_directory: './src/contracts',
    contracts_build_directory: './src/truffle_abis',
    compilers: {
        solc: {
            version: "0.8.4",
            optimizer: {
                enabled: true,
                runs: 200
            },
        }
    }
}