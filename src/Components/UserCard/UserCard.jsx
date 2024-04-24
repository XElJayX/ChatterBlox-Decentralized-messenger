import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";

// INTERNAL IMPORT
import Style from './UserCard.module.css';
import images from '../../assets';
import { ChatAppContext } from "../../Context/ChatAppContext";

const UserCard = ({ el, i, sendFriendRequest }) => {
    const {
        friendLists: contextFriendLists,
        account: currentUserAccount,
        removeFriend,
    } = useContext(ChatAppContext);

    const [isFriend, setIsFriend] = useState(false);
    const [isCurrentUser, setIsCurrentUser] = useState(false);
    const [userIndex, setUserIndex] = useState(i + 1); // Initialize user index with i + 1
    const [isHovered, setIsHovered] = useState(false); // Initialize isHovered state to false
    const [requestSent, setRequestSent] = useState(false); // Track if friend request has been sent

    useEffect(() => {  
        // Check if the displayed user is already a friend
        const checkFriendship = () => {
            if (contextFriendLists) {
                const isAlreadyFriend = contextFriendLists.some(friend => friend.pubkey === el.accountAddress);
                setIsFriend(isAlreadyFriend);
            }
        };
        
    
        // Check if the displayed user is the current user
        const checkCurrentUser = () => {
            const currentUser = currentUserAccount.toLowerCase(); // Convert to lowercase
            const displayedUser = el.accountAddress.toLowerCase(); // Convert to lowercase
    
            if (currentUser === displayedUser) {
                return true;
            }
            return false;
        };

        // Update the user index
        setUserIndex(i + 1);
    
        checkFriendship();
        setIsCurrentUser(checkCurrentUser());
    }, [contextFriendLists, el.accountAddress, currentUserAccount, i]);
    
    const handleAddFriend = () => {
        // Check if the user is already friends with the person
        if (isFriend) {
            removeFriend(el.accountAddress);
        } else {
            // Otherwise, send the friend request
            sendFriendRequest({ accountAddress: el.accountAddress, name: el.name });
            // Update the UI to show that the request is sent
            setRequestSent(true);
        }
    };

    useEffect(() => {
        console.log("Current username in UserCard component:", el.name);
    }, [currentUserAccount]);

    return (
        <div className={Style.UserCard}>
            <div className={Style.UserCard_box}>
                <Image
                    className={Style.UserCard_box_img}
                    src={images[`image${userIndex}`]} 
                    alt="user"
                    width={100}
                    height={100}
                />

                <div className={Style.UserCard_box_info}>
                    <h3>{el.name}</h3>
                    <p>{el.accountAddress.slice(0, 25)}..</p>
                    {/* Render different button text based on whether the user is already friends */}
                    {isCurrentUser ? (
                        <div className={Style.you}>
                            <button>You</button>
                        </div>
                    ) : (
                        <div className={Style.Friend_Add}>
                            <button 
                                onClick={handleAddFriend} 
                                onMouseEnter={() => setIsHovered(true)} 
                                onMouseLeave={() => setIsHovered(false)}
                                className={`${Style.button} ${isFriend && isHovered ? Style.removeFriend : ""}`}
                            >
                                {isFriend ? (isHovered ? "Remove Friend" : "Friends") : (requestSent ? "Friend Request Sent" : "Add Friend")}
                            </button>
                        </div>
                    )}
                </div>
                <small className={Style.number}>{userIndex}</small> {/* Display userIndex */}
            </div>
        </div>
    );
};

export default UserCard;
