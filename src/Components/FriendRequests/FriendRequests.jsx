import React, { useContext,useState } from "react";
import Image from "next/image";
import { ChatAppContext } from "../../Context/ChatAppContext";
import Style from "./FriendRequest.module.css"; // Import the CSS file
import images from "../../assets";

const FriendRequests = () => {
  const { receivedRequests, acceptFriendRequest, ignoreFriendRequest } = useContext(ChatAppContext);

  const handleAccept = (senderAddress) => {
    acceptFriendRequest(senderAddress);
  };

  const handleIgnore = (senderAddress) => {
    ignoreFriendRequest(senderAddress);
  };
  console.log("Friend Requests:", receivedRequests);

  // Filter out empty requests
  const filteredRequests = receivedRequests.filter(request => request.sender !== '0x0000000000000000000000000000000000000000');
  const [hovered, setHovered] = useState(false);
  return (
<div className={Style.friend_requests}> {/* Apply the CSS class */}
  <h1>Friend Requests</h1>
  {receivedRequests && receivedRequests.length === 0 ? (
    <p className={Style.no_friend_requests}>No friend requests</p>
  ) : (
    <ul className={Style.friend_request_list}> {/* Apply the CSS class */}
      {filteredRequests.map((request) => (
        <li key={request.sender} className={Style.friend_request_item}> {/* Apply the CSS class */}
          <div className={Style.friend_request_info}> {/* Apply the CSS class */}
            <p className={Style.friend_request_message}>{request.senderName} wants to be your friend!</p><p>  Address: {request.sender}</p> {/* Apply the CSS class */}
            <div className={Style.friend_request_actions}> {/* Apply the CSS class */}
              <Image src={images.tick} alt="Accept" width={50} height={50}  onClick={() => handleAccept(request.sender)} className={Style.accept_image} />
              <Image src= {images.ignore} alt="Ignore" width={50} height={50} onClick={()=> ignoreFriendRequest(request.sender)} className={Style.ignore_image}/>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )}
</div>
  );
};
export default FriendRequests;
