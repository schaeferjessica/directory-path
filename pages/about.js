import Link from 'next/link'


export default function About() {
    return (
      <>
      <div className='font-mono'>
      <h1>In this page we are going to explain a litle about the project and how to find the path on our webapp.
      </h1>
      </div>
     <div className='font-mono'>
       <h2>
          <Link href="/">
            <a><button class='rounded-full px-2 border-2'>Back to home</button></a>
          </Link>
     </h2></div>
      
      </>

  )
  } 