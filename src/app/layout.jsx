import React from 'react';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5648536853192084"
          crossorigin="anonymous"
        ></script>
        <meta name="google-adsense-account" content="ca-pub-5648536853192084" />
  
      </Head>
 
      {children}
    </div>
  );
};

export default Layout;
