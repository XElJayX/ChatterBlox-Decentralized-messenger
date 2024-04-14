// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract ChatApp {
    //USER STRUCT

    struct FriendRequest {
        address sender;
        string senderName;
    }

    struct user {
        string name;
        friend[] friendList;
        FriendRequest[] receivedRequests;
    }

    struct friend {
        address pubkey;
        string name;
    }

    struct message {
        address sender;
        uint256 timestamp;
        string msg;
    }

    struct AllUsersStruck {
        string name;
        address accountAddress;
    }
    AllUsersStruck[] getAllUsers;

    mapping(address => user) userList;
    mapping(bytes32 => message[]) allMessages;

    //CHECK USER EXIST
    function checkUserExists(address pubkey) public view returns (bool) {
        return bytes(userList[pubkey].name).length > 0;
    }

    //CREATE ACCOUNT
    function createAccount(string calldata name) external {
        require(checkUserExists(msg.sender) == false, "User already Exists");
        require(bytes(name).length > 0, "Username cannot be empty");

        userList[msg.sender].name = name;
        getAllUsers.push(AllUsersStruck(name, msg.sender));
    }

    //GET USERNAME
    function getUsername(address pubkey) external view returns (string memory) {
        require(checkUserExists(pubkey), "User is not registered");
        return userList[pubkey].name;
    }

    //ADD FRIENDS
    function addFriend(address friend_key, string calldata name) external {
        require(checkUserExists(msg.sender), "Create an account first");
        require(checkUserExists(friend_key), "User is not registered");
        require(msg.sender != friend_key, "Cant friend yourself BOZO");
        require(
            checkAlreadyFriends(msg.sender, friend_key) == false,
            "Already friends"
        );

        _addFriend(msg.sender, friend_key, name);
        _addFriend(friend_key, msg.sender, userList[msg.sender].name);
    }
    //CHECK ALREADY FRIENDS
    function checkAlreadyFriends(
        address pubkey1,
        address pubkey2
    ) internal view returns (bool) {
        if (
            userList[pubkey1].friendList.length >
            userList[pubkey2].friendList.length
        ) {
            address tmp = pubkey1;
            pubkey1 = pubkey2;
            pubkey2 = tmp;
        }

        for (uint256 i = 0; i < userList[pubkey1].friendList.length; i++) {
            if (userList[pubkey1].friendList[i].pubkey == pubkey2) {
                return true;
            }
        }
        return false;
    }

    function _addFriend(
        address me,
        address friend_key,
        string memory name
    ) internal {
        friend memory newFriend = friend(friend_key, name);
        userList[me].friendList.push(newFriend);
    }

    //GETMY FRIENDS LIST
    function getMyFriendList() external view returns (friend[] memory) {
        return userList[msg.sender].friendList;
    }

    //get chat code
    function _getChatCode(
        address pubkey1,
        address pubkey2
    ) internal pure returns (bytes32) {
        if (pubkey1 < pubkey2) {
            return keccak256(abi.encodePacked(pubkey1, pubkey2));
        } else return keccak256(abi.encodePacked(pubkey2, pubkey1));
    }

    //SEND MESSAGE
    function sendMessage(address friend_key, string calldata _msg) external {
        require(checkUserExists(msg.sender), "Create an Account first");
        require(checkUserExists(friend_key), "User is not Registered");
        require(
            checkAlreadyFriends(msg.sender, friend_key),
            "Not friends with the user"
        );

        bytes32 chatCode = _getChatCode(msg.sender, friend_key);
        message memory newMsg = message(msg.sender, block.timestamp, _msg);
        allMessages[chatCode].push(newMsg);
    }

    //READ MESSAGE
    function readMessage(
        address friend_key
    ) external view returns (message[] memory) {
        bytes32 chatCode = _getChatCode(msg.sender, friend_key);
        return allMessages[chatCode];
    }
    //GET ALL USERS
    function getAllAppUser() public view returns (AllUsersStruck[] memory) {
        return getAllUsers;
    }
    //CLEAR MESSAGES
    function clearMessage(address friend_key) external {
        require(checkUserExists(msg.sender), "Create an Account first");
        require(checkUserExists(friend_key), "Friend is not Registered");
        require(
            checkAlreadyFriends(msg.sender, friend_key),
            "Not friends with the user"
        );

        bytes32 chatCode = _getChatCode(msg.sender, friend_key);
        delete allMessages[chatCode];
    }

    //SEND FRIEND REQUESTS
    function sendFriendRequest(address to, string memory senderName) external {
        // Check if sender and receiver exist
        require(checkUserExists(msg.sender), "Sender does not exist");
        require(checkUserExists(to), "Recipient does not exist");
        require(
            checkAlreadyFriends(msg.sender, to) == false,
            "Already friends"
        );

        // Add friend request to recipient's receivedRequests
        userList[to].receivedRequests.push(
            FriendRequest(msg.sender, senderName)
        );
    }
    //ACCEPT FRIEND REQUESTS
    function acceptFriendRequest(address requester) external {
        // Check if sender and receiver exist
        require(checkUserExists(msg.sender), "User does not exist");
        require(checkUserExists(requester), "Requester does not exist");

        // Add requester as a friend to the current user
        _addFriend(msg.sender, requester, userList[requester].name);

        // Add current user as a friend to the requester
        _addFriend(requester, msg.sender, userList[msg.sender].name);

        // Remove friend request from receivedRequests
        _removeFriendRequest(msg.sender, requester);
        _removeFriendRequest(requester, msg.sender);
    }
    //IGNORE FRIEND REQUESTS
    function ignoreFriendRequest(address requester) external {
        // Check if sender and receiver exist
        require(checkUserExists(msg.sender), "User does not exist");
        require(checkUserExists(requester), "Requester does not exist");

        // Remove friend request from receivedRequests
        _removeFriendRequest(msg.sender, requester);
    }

    function getReceivedFriendRequests()
        external
        view
        returns (FriendRequest[] memory)
    {
        return userList[msg.sender].receivedRequests;
    }
    //HELPER FUNCTION, TO REMOVE FRIEND REQUESTS
    function _removeFriendRequest(
        address receiver,
        address requester
    ) internal {
        for (
            uint256 i = 0;
            i < userList[receiver].receivedRequests.length;
            i++
        ) {
            if (userList[receiver].receivedRequests[i].sender == requester) {
                // Shift subsequent elements down by one position
                for (
                    uint256 j = i;
                    j < userList[receiver].receivedRequests.length - 1;
                    j++
                ) {
                    userList[receiver].receivedRequests[j] = userList[receiver]
                        .receivedRequests[j + 1];
                }
                // Reduce the length of the array by one
                userList[receiver].receivedRequests.pop();
                break;
            }
        }
    }
    // REMOVE FRIEND
    function removeFriend(address friendKey) external {
        require(checkUserExists(msg.sender), "User does not exist");
        require(checkUserExists(friendKey), "Friend does not exist");
        require(
            checkAlreadyFriends(msg.sender, friendKey) == true,
            "Not friends"
        );

        // Find friend in the friendList
        uint256 indexToRemove = findFriendIndex(msg.sender, friendKey);
        require(
            indexToRemove < userList[msg.sender].friendList.length,
            "Friend not found"
        );

        // Remove friend from friendList
        for (
            uint256 i = indexToRemove;
            i < userList[msg.sender].friendList.length - 1;
            i++
        ) {
            userList[msg.sender].friendList[i] = userList[msg.sender]
                .friendList[i + 1];
        }
        userList[msg.sender].friendList.pop();

        // Also remove sender from friend's friendList
        uint256 friendIndexToRemove = findFriendIndex(friendKey, msg.sender);
        if (friendIndexToRemove < userList[friendKey].friendList.length) {
            for (
                uint256 i = friendIndexToRemove;
                i < userList[friendKey].friendList.length - 1;
                i++
            ) {
                userList[friendKey].friendList[i] = userList[friendKey]
                    .friendList[i + 1];
            }
            userList[friendKey].friendList.pop();
        }
    }

    // Find index of friend in friendList
    function findFriendIndex(
        address userAddress,
        address friendKey
    ) internal view returns (uint256) {
        for (uint256 i = 0; i < userList[userAddress].friendList.length; i++) {
            if (userList[userAddress].friendList[i].pubkey == friendKey) {
                return i;
            }
        }
        return userList[userAddress].friendList.length;
    }
}
