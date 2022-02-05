import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="max-w-5lx mx-auto pl-2 sm:pl-9 pr-2 sm:pr-9">
      <nav className="sm:flex sm:justify-between sm:items-center mt-4 sm:mt-9">
        <header>
          <h1>Directory Path</h1>
        </header>
        <ul className="flex mt-2 sm:mt-0">
          <li className="mr-3 sm:ml-4"><button className="linked">Dark Mode</button></li>
          <li className="mr-3 sm:ml-4"><a className="linked block" href="https://github.com/schaeferjessica/directory-path" target="_blank" rel="noreferrer">Github</a></li>
        </ul>
      </nav>
      
      <Component {...pageProps} />

      <footer className="mt-20 text-right">
        <small>© 2022 UNIX PATH - build with ♥ and <a className="linked" href="https://nextjs.org/">Next.js</a></small>
      </footer>
    </div>
  )
}

export default MyApp
