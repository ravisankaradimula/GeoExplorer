import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="en"
      className="bg-gradient-to-br from-blue-50 to-blue-200 min-h-full"
    >
      <Head>
        {/* Tailwind CSS is already imported globally in _app.js */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#2563eb" />
      </Head>
      <body className="font-inter text-gray-800 min-h-screen bg-gradient-to-br from-blue-50 to-blue-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
