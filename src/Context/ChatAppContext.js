import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";


//INTERNAL IMPORTS

import { CheckIfWalletConnected, connectWallet, connectingWithContract} from "../Utils/apiFeature";

export const ChatAppContext = React.createContext();

export const ChatAppProvider = ({children})=> {
    
//USE STATE
  const [account, setAccount] = useState("");
  const [userName, setuserName] = useState("");    
  const [friendLists, setFriendLists] = useState([]);  
  const [friendMsg, setFriendMsg] = useState([]);  
  const [loading, setLoading] = useState(false);
  const [userLists, setUserLists] = useState([]);
  const [error, setError] = useState("");
  const [receivedRequests, setReceivedRequests] = useState([]);

  //chat user data
  const [currentUserName, setcurrentUserName] = useState("");
  const [currentUserAddress, setcurrentAddress] = useState("");

  const router = useRouter();

    //Fetch Data time of page load
    const fetchData = async() => {
        try{
            //GET CONTRACT
            const contract = await connectingWithContract();
            console.log("CONTRACT FETCHED:",{contract});
            //GET ACCOUNT
            const connectAccount = await connectWallet();
            setAccount(connectAccount);
            //get username
            const userName = await contract.getUsername(connectAccount);
            setuserName(userName);
            //GET my friend list
            const friendLists = await contract.getMyFriendList();
            setFriendLists(friendLists);
            //GET ALL APP USER LIST
            const userList = await contract.getAllAppUser();
            setUserLists(userList);
            console.log("Userlist:",userList)
            
        }
        catch(error){
          //  setError("Please Install And Connect Your Wallet")
        }
    };
    useEffect(()=>{
        fetchData();
    }, []);
    
    useEffect(() => {
      console.log("Current user account in ChatAppContext:", account);
    }, [account]);
    
      
  


    //READ MESSAGE
    const readMessage = async(friendAddress)=>{
        try{
            const contract = await connectingWithContract();
            const read = await contract.readMessage(friendAddress);
            setFriendMsg(read);
        }catch(error){
            //setError("Currently you have no messages");
        }
    };

    //CREATE ACCOUNT
    const createAccount = async({name, accountAddress})=>{
        try{
            //if(name || accountAddress) 
               // return setError("Name and Account cannot be empty")

                const contract = await connectingWithContract();
                const getCreatedUser = await contract.createAccount(name);
                setLoading(true);
                await getCreatedUser.wait();
                setLoading(false);
                window.location.reload();

        }catch(error){
            setError("Error while createing your account! Please Reload your browser!")
        }
    };

    //ADD FRIEND
    const addFriends = async ({ name, accountAddress }) => {
        try {
            if (!name || !accountAddress) {
                throw new Error("Name or account address is missing");
            }
            const contract = await connectingWithContract();
            const addMyFriend = await contract.addFriend(accountAddress, name);
            setLoading(true);
            await addMyFriend.wait();
            setLoading(false);
            router.push('/');
            window.location.reload();
        } catch (error) {
            setError("Something went wrong while adding friends");
        }
    };
    // SEND MESSAGE TO YOUR FRIEND
    const sendMessage = async({ msg, address }) => {
        try{
            //if(msg || address) return setError("Please Type you Message");
            const contract = await connectingWithContract();
            const addMessage = await contract.sendMessage(address, msg);
            setLoading(true);
            await addMessage.wait();
            setLoading(false);
            window.location.reload();
        }catch(error){
            setError("Please reload and try again")
        }
    };

    //READ USER INFO
const readUser = async(userAddress)=>{
  try {
      const contract = await connectingWithContract();
      const userName = await contract.getUsername(userAddress);
      // Check if the username is empty or undefined
      if (!userName || userName === "") {
          // Fetch the username from the userLists array if available
          const user = userLists.find(user => user.accountAddress === userAddress);
          if (user) {
              setcurrentUserName(user.name);
          } else {
              // If the username is still not available, set it to "Unknown"
              setcurrentUserName("Unknown");
          }
      } else {
          // Set the username fetched from the contract
          setcurrentUserName(userName);
      }
      setcurrentAddress(userAddress);
  } catch (error) {
      console.error("Error reading user info:", error);
  }
}

     const clearMessages = async (friendAddress) => {
    try {
        const contract = await connectingWithContract();
        console.log("Contract fetched:", contract);
        console.log("Clearing messages for friend:", friendAddress);
        await contract.clearMessage(friendAddress);
        console.log("Messages cleared successfully");
        // Optionally, you can reload the page or update state to reflect the changes.
        window.location.reload();
        // Or you can fetch data again to update the state.
        //fetchData();
    } catch (error) {
      console.log(error);
    }
  }
  

  const fetchReceivedRequests = async () => {
    try {
      const contract = await connectingWithContract();
      // Fetch received friend requests from smart contract
      const requests = await contract.getReceivedFriendRequests();
      // Log the received requests to the console
      console.log("Received friend requests:", requests);
      // Update receivedRequests state
      setReceivedRequests(requests);
    } catch (error) {
      console.error("Error fetching received friend requests:", error);
    }
  }
  
  


   // useEffect to fetch received friend requests on component mount
   useEffect(() => {
    fetchReceivedRequests();
  }, []);

  // Function to accept friend request
  const acceptFriendRequest = async (senderAddress) => {
    try {
      // Call smart contract function to accept friend request
      const contract = await connectingWithContract();
      await contract.acceptFriendRequest(senderAddress);
      // Update receivedRequests state
      setReceivedRequests(prevRequests => prevRequests.filter(request => request.sender !== senderAddress));
    } catch (error) {
      console.error("Error accepting friend request:", error);
    }
  };

  // Function to ignore friend request
  const ignoreFriendRequest = async (senderAddress) => {
    try {
      // Call smart contract function to ignore friend request
      const contract = await connectingWithContract();
      await contract.ignoreFriendRequest(senderAddress);
      // Update receivedRequests state
      setReceivedRequests(prevRequests => prevRequests.filter(request => request.sender !== senderAddress));
    } catch (error) {
      console.error("Error ignoring friend request:", error);
    }
  }
  const sendFriendRequest = async ({ name, accountAddress }) => {
    try {
      // Call smart contract function to send friend request
      const contract = await connectingWithContract();
      await contract.sendFriendRequest(accountAddress, name);
      // Optionally, you can update state or trigger a fetch to reflect the change in UI
      console.log("Friend request sent successfully");
    } catch (error) {
      console.error("Error sending friend request:", error);
    }
  };


  const removeFriend = async (friendAddress) => {
    try {
        const contract = await connectingWithContract();
        // Remove friend from smart contract
        await contract.removeFriend(friendAddress);
        // Clear messages for the removed friend
        await contract.clearMessages(friendAddress);
        // Update friendLists state to reflect the removal of the friend
        setFriendLists(prevFriendLists => prevFriendLists.filter(friend => friend.accountAddress !== friendAddress));
        // Optionally, you can reload the page or trigger a fetch to update the state
        // window.location.reload();
        // Or you can fetch data again to update the state
        // fetchData();
    } catch (error) {
        console.error("Error removing friend:", error);
    }
};

const changeUsername = async (newName) => {
  try {
      const contract = await connectingWithContract();
      await contract.changeUsername(newName);
      setuserName(newName); // Update the local state with the new username
  } catch (error) {
      console.error("Error changing username:", error);
  }
};

const deleteAccount = async () => {
  try {
      const contract = await connectingWithContract();
      await contract.deleteAccount();
      setAccount(""); // Reset the account state
      setuserName(""); // Reset the username state
  } catch (error) {
      console.error("Error deleting account:", error);
  }
};


  
  

  




    return(   
        <ChatAppContext.Provider value={{ 
            readMessage, 
            createAccount,
            connectWallet,
            removeFriend,
            CheckIfWalletConnected, 
            addFriends, 
            sendMessage,
            changeUsername,
            deleteAccount,
            clearMessages, 
            readUser,
            fetchReceivedRequests,
            sendFriendRequest,
            acceptFriendRequest,
            ignoreFriendRequest,
            receivedRequests,
            currentUserAddress,
            currentUserName,
            account,
            userName,
            friendLists,
            friendMsg,
            loading,
            userLists,
            error }}>


            {children}
        </ChatAppContext.Provider>
    );
};
