import '../styles/globals.css'
import Head from 'next/head'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
          <title>Directory Path</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta property="og:title" content="My page title" key="title" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"></link>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"></link>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"></link>
          <link rel="manifest" href="/site.webmanifest"></link>
      </Head>

      <div className="max-w-5lx mx-auto pl-2 sm:pl-9 pr-2 sm:pr-9">
        <nav className="sm:flex sm:justify-between sm:items-center mt-4 sm:mt-9">
          <header>
            <h1><Link href="/">Directory Path</Link></h1>
          </header>
          <ul className="flex mt-2 sm:mt-0">
            <li className="mr-3 sm:ml-4 underline-text uppercase"><Link href="/tree">Tree</Link></li>
            <li className="mr-3 sm:ml-4 underline-text uppercase"><Link href="/about">About</Link></li>
            <li className="mr-3 sm:ml-4"><button className="underline-text uppercase">Dark Mode</button></li>
            <li className="mr-3 sm:ml-4"><a className="underline-text uppercase block" href="https://github.com/schaeferjessica/directory-path" target="_blank" rel="noreferrer">Github</a></li>
          </ul>
        </nav>
        
        <Component {...pageProps} />

        <footer className="mt-20 text-right">
          <small>© 2022 UNIX PATH - build with ♥ and <a className="underline-text uppercase" href="https://nextjs.org/">Next.js</a></small>
        </footer>
      </div>
    </div>
  )
}

export default MyApp