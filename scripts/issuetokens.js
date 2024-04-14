const DecentralBank = artifacts.require('DecentralBank')

module.exports = async function issueRewards(callback) {
    let decentralBank = await DecentralBank.deployed();
    await decentralBank.issueReward()
    console.log('Tokens have been rewared successfully')
    callback()
}