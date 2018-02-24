module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // for more about customizing your Truffle configuration!
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*" // Match any network id
        },
        rinkeby: {
            host: '127.0.0.1',
            port: 8545,
            from: "0x8f9555750c1AF0d064be9c97eb59c8a79F344b59",
            network_id: 4,
            gas: 4698712
        }
    }
};