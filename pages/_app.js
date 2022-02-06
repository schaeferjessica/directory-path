import '../styles/globals.css'
import Link from 'next/link'


function MyApp({ Component, pageProps }) {
  return (
    <div className="max-w-5lx mx-auto p-4">
      <nav className="flex justify-between">
        <header>
          <h1>Directory Path</h1>
        </header>
        <ul className="flex">
          <Link href="/about"><li><a>About</a></li></Link>
          <li><button>Dark Mode</button></li>
          <li><a href="https://github.com/schaeferjessica/directory-path">Github</a></li>
        </ul>
      </nav>    
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
