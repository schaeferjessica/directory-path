import Link from 'next/link'

const About = () =>  {
    return (
      <>
        <div className='font-mono'>
          <h1>In this page we are going to explain a litle about the project and how to find the path on our webapp.</h1>
        </div>
        <div className='font-mono'>
          <Link href="/" className="uppercase underline-text">Back to home</Link>
        </div>
      </>
    )
  } 

  export default About;