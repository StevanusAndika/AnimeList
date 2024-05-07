import React from 'react';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Anime List rating anime" />
        <meta name="keywords" content="Website Anime List buatan Anak Bangsa" />
        <meta name="author" content="Stevanus" />
        <meta name="google-adsense-account" content="ca-pub-5648536853192084" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7SL3LR4496"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7SL3LR4496');
            `,
          }}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5648536853192084"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default Layout;
