import React, { useState, useContext} from 'react';
import Image from 'next/image';

//INTERNAL IMPORT

import Style from './Filter.module.css';
import images from '../../assets';
import { ChatAppContext } from '../../Context/ChatAppContext';
import { Model } from '../index';

const Filter = () => {
  const { account , addFriends , clearMessages } = useContext(ChatAppContext);
  //USE STATE
  const [addFriend, setAddFriend] = useState(false);
  
  return (
    <div className={Style.Filter}>
      <div className={Style.Filter_box_left}>
        <div className={Style.Filter_box_left_search}>
          <Image src={images.search} alt='search image' width={20} height={20}/>
          <input type='text' placeholder='search..' />
        </div>
      </div>
      <div className={Style.Filter_box_right}>
        
        
      </div>
      {/*Model Component*/}

      {addFriend &&(
        <div className={Style.Filter_model}>
          <Model openBox={setAddFriend}
          title="WELCOME TO"
          head="CHATTERBLOX"
          info="A Decentralized Block Chain messenger app created by 3 BOZOS"
          smallInfo="Kindly Select Your Friend Name and Address.."
          image={images.hero}
          functionName={addFriends}
          />
          </div>
      )}
    </div>
  )
}

export default Filter