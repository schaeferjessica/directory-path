import Head from 'next/head'

export default function Meta() {
  return (
    <Head lang="en">
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta property="og:title" content="My page title" key="title" />

    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
    <link 
      href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300&family=IBM+Plex+Sans:wght@300&display=swap" 
      rel="stylesheet">
    </link>

    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"></link>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"></link>
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"></link>
    <link rel="manifest" href="/site.webmanifest"></link>

    <meta name="theme-color" content="#000" />
    <meta
        name="description"
        content={`statically generated using Next.js`}
      />
    </Head>
  )
}