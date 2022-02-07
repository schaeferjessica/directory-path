import Link from 'next/link'

const About = () =>  {
    return (
      <div className="mt-20">
        <p>In this page we are going to explain a litle about the project and how to find the path on our webapp.</p>
    
        <div className="uppercase underline-text mt-4">
          <Link href="/">Back to home</Link>
        </div>
      </div>
    )
  } 

  export default About;