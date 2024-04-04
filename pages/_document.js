import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        {/* Meta tags */}
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta
          name='description'
          content='Надежный сервис обмена валюты без лишних хлопот и скрытых комиссий. Быстро, выгодно, безопасно'
        />

        {/* Open Graph tags */}
        <meta
          property='og:title'
          content='FastMoney - Сервис по обмену валют'
        />
        <meta
          property='og:description'
          content='Надежный сервис обмена валюты без лишних хлопот и скрытых комиссий. Быстро, выгодно, безопасно'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https:// website URL' />
        <meta property='og:image' content='https:// /img/favicon.png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:site_name' content='FastMoney' />

        {/* Twitter Card */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='FastMoney - Сервис по обмену валют'
        />
        <meta
          name='twitter:description'
          content='Надежный сервис обмена валюты без лишних хлопот и скрытых комиссий. Быстро, выгодно, безопасно'
        />
        <meta name='twitter:image' content='Your website image URL' />

        {/* Favicon */}
        <link rel='icon' href='/img/favicon.png' />
        <link rel='shortcut icon' type='image/x-icon' href='/img/favicon.png' />
        <link rel='apple-touch-icon' href='/img/favicon.png' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
