import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

// Internal Import
import Style from "./Chat.module.css";
import images from "../../../assets";
import { converTime } from "../../../Utils/apiFeature";
import { Loader } from "../../index";

const Chat = ({
  functionName,
  clearMsg,
  readMessage,
  friendMsg,
  account,
  userName,
  loading,
  currentUserName,
  currentUserAddress,
  readUser,
}) => {
  // useState
  const [message, setMessage] = useState("");
  const [chatData, setChatData] = useState({
    name: "",
    address: "",
  });
  const router = useRouter();

  // useEffect to set chatData when router query changes
  useEffect(() => {
    if (router.isReady) {
      const { name, address } = router.query;
      setChatData({ name, address });
    }
  }, [router.isReady, router.query]);

  // useEffect to read messages and user info when chatData changes
  useEffect(() => {
    if (chatData.address) {
      readMessage(chatData.address);
      readUser(chatData.address);
    }
  }, [chatData]);

  // Function to handle speech recognition
  const handleSpeechRecognition = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      console.log("Speech recognized:",transcript);
      setMessage(transcript);
      
    };

    recognition.start();
  };
  

  return (
    <div className={Style.Chat}>
      {/* User info */}
      {currentUserName && currentUserAddress && (
        <div className={Style.Chat_user_info}>
          <Image src={images.accountName} alt="image" width={70} height={70} />
          <div className={Style.Chat_user_info_box}>
            <h4>{currentUserName}</h4>
            <p className={Style.show}>{currentUserAddress}</p>
          </div>
        </div>
      )}

      {/* Chat messages */}
      <div className={Style.Chat_box_box}>
        <div className={Style.Chat_box}>
          <div className={Style.Chat_box_left}>
            {friendMsg.map((el) => (
              <div key={el.timestamp}>
                <div className={Style.Chat_box_left_title}>
                  <Image src={images.accountName} alt="image" width={50} height={50} />
                  <span>
                    {el.sender === chatData.address ? chatData.name : userName}
                    <small> Time: {converTime(el.timestamp)}</small>
                  </span>
                </div>
                <p>{el.msg}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Chat input */}
        {currentUserName && currentUserAddress && (
          <div className={Style.Chat_box_send}>
            <div className={Style.Chat_box_send_img}>
            <Image src={images.mic} alt="speech-to-text" width={30} height={40} onClick={handleSpeechRecognition} />
              <input
                type="text"
                placeholder="Type your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Image src={images.clear} alt="file" width={50} height={50} onClick={() => clearMsg(chatData.address)} />
              {loading ? (
                <Loader />
              ) : (
                <Image src={images.send} alt="file" width={50} height={50} onClick={() => functionName({ msg: message, address: chatData.address })} />
              )}
              {/* Speech to text button */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
