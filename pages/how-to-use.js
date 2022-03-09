import Layout from '../components/layout'
import Head from 'next/head'
import Container from '../components/container'
import Link from 'next/link'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>relative path - how to use</title>
      </Head>
      <Container>
        <div className="mt-12">

          <div>
            <h2 className='uppercase mb-3'>get startet</h2>
            <p className='mb-2'>how to find your path via relative path generator:</p>

            <span>click the box</span>
            <div className="CheckBox ml-2 mr-2">
              <input className="checkboxDOM" type="checkbox"></input>
              <span className="checkbox-span"></span>
            </div>

            <span className=''>to select the 
              <strong className='uppercase font-normal'> file</strong> you would like the path going 
              <strong className='uppercase font-normal'> from</strong>
            </span>

            <br />

            <span>click the second box</span>
            <div className="CheckBox ml-2 mr-2">
              <input className="checkboxDOM" type="checkbox"></input>
              <span className="checkbox-span"></span>
            </div>

            <span>to select the 
              <strong className='uppercase font-normal'> file</strong> you would like the path going 
              <strong className='uppercase font-normal'> to</strong>
            </span>

            <p className='mt-3'>the relative path will be generated for you :)</p>
          </div>

          <div className='mt-8'>
            <h2 className='uppercase mb-3'>nice to have</h2>
            <span>click the box</span>

            <div className="CheckBox ml-2 mr-2 inline">
              <input className="checkboxDOM" type="checkbox"></input>
              <span className="checkbox-span"></span>
            </div>
            
            <span>in the bottom left corner to see the path color highlighted</span>
          </div>
         

          <div className='mt-8'>
            <h2 className='uppercase mb-3'>the tool</h2>
            <p>relative path is a developer tool to help you to get the path to reach from one file to another.</p> 
          </div>

          <div className='mt-8'>
            <h2 className='uppercase mb-3'>reach out</h2>
            <p>relative-path@gmail.com</p>
            <p>We are happy to hear from you!</p> 
          </div>

          <div className="uppercase underline-text mt-8">
            <Link href="/">generate a relative path</Link>
          </div>
        </div>
      </Container>
    </Layout>
  )
}