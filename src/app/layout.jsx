  import React from 'react';
  import Head from 'next/head';

  const Layout = ({ children }) => {
    return (
      <html lang="en">
        <Head>
          
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Anime List rating anime" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Nunito:ital@0;1&family=Poppins&family=Shippori+Antique&display=swap" rel="stylesheet"/>
          <link rel="icon" type="image/png" href="/icon.png" /> 
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