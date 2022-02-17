import Head from 'next/head'

export default function Meta() {
  return (
    <Head lang="en">
    <meta charSet="utf-8"/>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta property="og:title" content="relative path generator" key="title" />
    <meta name="description" content="reach from one file to another via the relative path generator" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>

    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"></link>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"></link>
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"></link>
    <link rel="manifest" href="/site.webmanifest"></link>

    <meta name="theme-color" content="#181818" />
    <meta
        name="relative path generator"
        content={`find your path via relative path generator`}
      />
    </Head>
  )
}