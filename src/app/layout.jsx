import React from 'react';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <html lang="en"> 
      <Head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5648536853192084"
     crossorigin="anonymous"></script>
      </Head>
      <body> 
        {children}
      </body>
    </html>
  );
};

export default Layout;
