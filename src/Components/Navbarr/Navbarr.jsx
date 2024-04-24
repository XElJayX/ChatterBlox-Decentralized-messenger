import React, { useContext, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Style from './Navbarr.module.css';
import { ChatAppContext } from '../../Context/ChatAppContext';
import { Model, Error } from '../../Components/index';
import images from '../../assets';

const NavBar = () => {
  const menuItems = [
    {
      menu: 'All USERS',
      link: 'alluser',
    },
    {
      menu: 'CHAT',
      link: '/',
    },
    {
      menu: 'FRIEND REQUESTS',
      link: 'FriendRequestsPage',
    },
    {
      menu: 'SETTINGS',
      link: 'settings',
    },
    {
      menu: 'FAQS',
      link: '/',
    },
    {
      menu: 'TERMS OF USE',
      link: '/',
    },
  ];
  // Context
  const { account, userName, connectWallet, createAccount, error } = useContext(ChatAppContext);

  // State
  const [active, setActive] = useState(2);
  const [openModel, setOpenModel] = useState(false);

  return (
    <div className={Style.NavBar}>
      <div className={Style.NavBar_box}>
        <div className={Style.NavBar_box_left}>
          <Image src={images.chatterBlox} alt="logo" width={400} height={150} />
        </div>
        <div className={Style.NavBar_box_right}>
          <div className={Style.NavBar_box_right_menu}>
            {menuItems.map((el, i) => (
              <div
                onClick={() => setActive(i + 1)}
                key={i + 1}
                className={`${Style.NavBar_box_right_menu_items} ${
                  active == i + 1 ? Style.active_btn : ''
                }`}
              >
                <Link href={el.link}>
                  <a className={Style.NavBar_box_right_menu_items_link}>{el.menu}</a>
                </Link>
              </div>
            ))}
          </div>
          {/* CONNECT WALLET */}
          <div className={Style.NavBar_box_right_connect}>
            {account === '' ? (
              <button onClick={() => connectWallet()}>
                <span>Connect Wallet</span>
              </button>
            ) : (
              <button onClick={() => setOpenModel(true)}>
                <Image
                  src={userName ? images.accountName : images.create2}
                  alt="Account image"
                  width={20}
                  height={20}
                />
                <small>{userName || 'Create Account'}</small>
              </button>
            )}
          </div>
          <div className={Style.NavBar_box_right_open} onClick={() => setOpen(true)}>
            <Image src={images.open} alt="open" width={30} height={30} />
          </div>
        </div>
      </div>
      {/* MODEL */}
      {openModel && (
        <div className={Style.modelBox}>
          <Model
            openBox={setOpenModel}
            title="WELCOME TO"
            head="CHATTERBLOX"
            info="CREATE ACCOUNT"
            smallInfo="Kindly Enter your name"
            image={images.hero}
            functionName={createAccount}
            address={account}
          />
        </div>
      )}
      {error === '' ? '' : <Error error={error} />}
    </div>
  );
};

export default NavBar;
