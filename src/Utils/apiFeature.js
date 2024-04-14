import { ethers } from "ethers";


import { ChatAppAddress, ChatAppABI } from "../Context/constants"


export const CheckIfWalletConnected = async () => {
    try {
        if(!window.ethereum) return console.log("Install Metamask");
        const accounts = await window.ethereum.request({
            method: "eth_accounts",
        });

        const firstAccount = accounts[0];
        console.log("Wallet connected:", firstAccount);
        return firstAccount;
    } catch(error) {
        console.log("Install Metamask");
    }
};

export const connectWallet = async() =>{
    try {
        if(!window.ethereum) return console.log("Install Metamask");
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });

        const firstAccount = accounts[0];
        console.log("Wallet connected:", firstAccount);
        return firstAccount;
    } catch(error) {
        console.log("Install Metamask");
    }
};

const fetchContract = (signerOrProvider) => new ethers.Contract(ChatAppAddress, ChatAppABI, signerOrProvider);

export const connectingWithContract = async () => {
    try {
        // Check if Ethereum provider is available
        if (!window.ethereum) {
            throw new Error("Install Metamask or connect to an Ethereum wallet");
        }

        // Request access to user's accounts
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });

        // Get the first account from the array of accounts
        const firstAccount = accounts[0];
        //console.log("Wallet connected:", firstAccount);

        // Create a Web3Provider using the Ethereum provider
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        // Get the signer from the provider
        const signer = provider.getSigner();

        // Fetch the contract instance using the signer
        const contract = fetchContract(signer);
        //console.log("Contract instance fetched:", contract);

        return contract;
    } catch (error) {
        console.error(error);
    }
};


export const converTime = (time)=>{
    const today = new Date();
    const realTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + "   Date:  " + today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
    return realTime;
}
