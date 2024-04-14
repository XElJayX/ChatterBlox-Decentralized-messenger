const ChatApp = artifacts.require('ChatApp');

module.exports = async function (deployer, network, accounts) {
    await deployer.deploy(ChatApp);
    const chatApp = await ChatApp.deployed();
    
    console.log(`Contract address: ${await chatApp.address}`);
};
