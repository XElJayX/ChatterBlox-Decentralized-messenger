import React, { useContext, useState } from "react";
import { ChatAppContext } from "../../Context/ChatAppContext";
import Style from "./Settings.module.css"; // Import the CSS file and use `Style` object

const Settings = () => {
    const { userName, changeUsername, deleteAccount } = useContext(ChatAppContext);
    const [newUsername, setNewUsername] = useState("");

    const handleChangeUsername = () => {
        changeUsername(newUsername);
    };

    const handleDeleteAccount = () => {
        deleteAccount();
    };

    return (
        <div className={Style.settingsContainer}>
            <h1 className={Style.heading}>Settings</h1>
            <div className={Style.inputContainer}>
                <div className={Style.label}>Change Username</div>
                <input
                    type="text"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                    className={Style.input}
                    placeholder="Enter new username"
                />
                <button onClick={handleChangeUsername} className={Style.button}>Change Username</button>
            </div>
            <div className={Style.inputContainer}>
                <div className={Style.label2}>Delete Account</div>
                <button onClick={handleDeleteAccount} className={Style.deleteButton}>Delete Account</button>
            </div>
        </div>
    );
};

export default Settings;
