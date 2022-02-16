import Head from 'next/head'

export default function Meta() {
  return (
    <Head lang="en">
    <meta charSet="utf-8"/>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta property="og:title" content="Directory Path Generator" key="title" />
    <meta name="description" content="A Directory Path Generator for Begginer Coders. Get the path required to access a certain file or module in a fast and clever way."/ >
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/ >

    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>

    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"></link>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"></link>
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"></link>
    <link rel="manifest" href="/site.webmanifest"></link>

    <meta name="theme-color" content="#223956" />
    <meta
        name="description"
        content={`statically generated using Next.js`}
      />
    </Head>
  )
}