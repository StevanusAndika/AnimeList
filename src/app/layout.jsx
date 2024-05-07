import React from 'react';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        {/* Tambahkan tag meta lainnya di sini jika perlu */}
      </Head>
      {/* Konten lainnya */}
      {children}
    </div>
  );
};

export default Layout;
