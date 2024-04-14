import React from 'react';
import "regenerator-runtime/runtime";

import "../styles/global.css";
// INTERNAL IMPORT
import { ChatAppProvider } from '../Context/ChatAppContext';
import { Navbarr } from "../Components/index";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <ChatAppProvider>
        <Navbarr />
        <Component {...pageProps} />
      </ChatAppProvider>
    </div>
  );
};

export default MyApp;
