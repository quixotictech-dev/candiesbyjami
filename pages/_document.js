// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.png" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
          <link rel="stylesheet" href="https://unpkg.com/swiper@6.6.2/swiper-bundle.min.css" />
          <link href="https://fonts.googleapis.com/css2?family=Emilys+Candy&family=Patua+One&family=Jost:wght@300;400;600;700&family=Pacifico&display=swap" rel="stylesheet" />
          <meta name="title" content="Headless Commerce example with Netlify" key="title" />
          <meta property="og:title" content="CaramelPerfected" />
          <meta property="og:image" content="https://cdn.chec.io/email/assets/marketing/demo-preview.png" />
          <meta property="og:description" content="The Best Homemade Caramel, a Few Other Things, and Lots of Homemade Caramel.  Did I Mention That We Have Caramel?" />
          <meta property="og:url" content="https://candiesbyjami.com" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
