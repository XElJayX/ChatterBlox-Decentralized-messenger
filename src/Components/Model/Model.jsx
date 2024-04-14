import React, { useContext, useState } from 'react';
import { ChatAppContext } from '../../Context/ChatAppContext';
import { Loader } from '../../Components';
import images from '../../assets';
import Style from './Model.module.css';
import Image from 'next/image'; // Import Next.js Image component

const Model = ({
  openBox,
  address,
  title,
  head,
  info,
  smallInfo,
  functionName
}) => {

  const [name, setName] = useState("");
  const [accountAddress, setAccountAddress] = useState("");
  const { loading } = useContext(ChatAppContext);

  return (
    <div className={Style.Model}>
      <div className={Style.Model_box}>
        {/* Background Image */}
        <div className={Style.background}>
        <div className={Style.content}>
          <h1>{title}<span>{head}</span></h1>
          <h2>{info}</h2>
  
          {/* Loader */}
          {
            loading ?
              (<Loader />) :
              (
                <div className={Style.form}>
                  <div className={Style.inputContainer}>
                    <input
                      type='text'
                      placeholder='Enter your name'
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className={Style.inputContainer}>
                    <input
                      type='text'
                      placeholder={address || "Enter Address.."}
                      onChange={(e) => setAccountAddress(e.target.value)}
                    />
                  </div>
                  <div className={Style.buttonContainer}>
                    <button className={Style.buttonone} onClick={() => functionName({ name, accountAddress })}>
                      <Image src={images.send} alt='send' width={40} height={40} />
                      <p>SUBMIT</p>
                    </button>
                    <button className={Style.buttontwo} onClick={() => openBox(false)}>
                      <Image src={images.closewhite} alt='close' width={40} height={40} />
                      <p>CANCEL</p>
                    </button>
                  </div>
                </div>
              )
          }
        </div>
      </div>
    </div>
    </div>
  )
}

export default Model;
