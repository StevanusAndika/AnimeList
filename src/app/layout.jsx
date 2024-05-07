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
        {/* Tambahkan script lainnya di sini jika perlu */}
      </Head>
      {/* Konten lainnya */}
      {children}
    </div>
  );
};

export default Layout;
