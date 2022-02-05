import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="max-w-5lx mx-auto pl-9 pr-9">
      <nav className="flex justify-between mt-9">
        <header>
          <h1>Directory Path</h1>
        </header>
        <ul className="flex">
          <li className="ml-4"><button className="border-button">Dark Mode</button></li>
          <li className="ml-4"><a className="border-button block" href="https://github.com/schaeferjessica/directory-path" target="_blank" rel="noreferrer">Github</a></li>
        </ul>
      </nav>
      
      <Component {...pageProps} />

      <footer className="mt-20 text-right">
        <small>© 2022 UNIX PATH - build with ♥ and <a className="border-button" href="https://nextjs.org/">Next.js</a></small>
      </footer>
    </div>
  )
}

export default MyApp
