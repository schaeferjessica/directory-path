import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="max-w-5lx mx-auto pl-9 pr-9">
      <nav className="flex justify-between mt-9">
        <header>
          <h1 className="text-4xl">Directory Path</h1>
        </header>
        <ul className="flex">
          <li className="ml-4"><button className="border-midnight border-b-2">Dark Mode</button></li>
          <li className="ml-4"><a className="border-midnight border-b-2 block" href="https://github.com/schaeferjessica/directory-path" target="_blank" rel="noreferrer">Github</a></li>
        </ul>
      </nav>
      
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
