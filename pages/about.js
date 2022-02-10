import Layout from '../components/layout'
import Head from 'next/head'
import Container from '../components/container'
import Link from 'next/link'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Directory Path - About</title>
      </Head>
      <Container>
        <div className="mt-14">
          <h3 className='uppercase'>The project</h3>
          <p className='mt-5'>Directory Path is a solution to help beginner coders to get the path to reach from one file to another. 
            <br />The goal is to make the navigation between documents easier and more efficient. </p>
          <h3 className='uppercase mt-5'>How to find your path via Directory Path Generator</h3>
          <p className='mt-5'>Go to DIRECTORY, choose the starting point (where you are) and the end point (where do you want to take the project from).
          <br />See your path on RELATIVE PATH, press copy to use it and learn!
          </p>
      
          <div className="uppercase underline-text mt-8">
            <Link href="/">generate a path</Link>
          </div>
        </div>
      </Container>
    </Layout>
  )
}