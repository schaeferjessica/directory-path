import Link from 'next/link'

const About = () =>  {
    return (
      <>
       <div className="uppercase">
          <p>In this page we are going to explain a litle about the project and how to find the path on our webapp.</p>
        </div>
        <div className="uppercase underline-text">
          <Link href="/">Back to home</Link>
        </div>
      </>
    )
  } 

  export default About;