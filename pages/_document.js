import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="BlackSky-MD - A sophisticated WhatsApp Multi-Device RPG bot" />
        <meta property="og:title" content="BlackSky-MD Bot" />
        <meta property="og:description" content="A sophisticated WhatsApp Multi-Device RPG bot with advanced plugin management" />
        <meta property="og:image" content="/preview.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}