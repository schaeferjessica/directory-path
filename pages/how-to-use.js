import Layout from '../components/layout'
import Head from 'next/head'
import Container from '../components/container'
import Link from 'next/link'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Directory Path - How to Use</title>
      </Head>
      <Container>
        <div className="mt-12">
          <div>
            
            <h2 className='uppercase mb-3'>get startet</h2>
            <p>how to find your path via Directory Path Generator:</p>
            <br />
            <span>click the box</span>

            <div className="CheckBox ml-2 mr-2">
              <input className="checkboxDOM" type="checkbox"></input>
              <span className="checkbox-span"></span>
            </div>

            <span>to select the <strong className='uppercase font-normal'>file</strong> you would like the path going <strong className='uppercase font-normal'>from</strong></span>
            <br />
            <span>then click the second box</span>

            <div className="CheckBox ml-2 mr-2">
              <input className="checkboxDOM" type="checkbox"></input>
              <span className="checkbox-span"></span>
            </div>

            <span>to select the <strong className='uppercase font-normal'>file</strong> you would like the path going <strong className='uppercase font-normal'>to</strong></span>
            <p className='mt-3'>the <strong className='uppercase font-normal'>relative path</strong> will be generated for you :)</p>
          </div>

          <div className='mt-8'>
            <h2 className='uppercase mb-3'>nice to have</h2>
            <span>click the box</span>

            <div className="CheckBox ml-2 mr-2 inline">
              <input className="checkboxDOM checkbox-color--from" type="checkbox"></input>
              <span className="checkbox-span"></span>
            </div>
            
            <span>in the bottom left corner to see the path color highlighted</span>
          </div>
         

          <div className='mt-8'>
            <h2 className='uppercase mb-3'>the tool</h2>
            <p>directory path is a developer tool to help developers to get the path to reach from one file to another.</p> 
          </div>

          <div className='mt-8'>
            <h2 className='uppercase mb-3'>reach out</h2>
            <p>email@email.com</p>
            <p>We are happy to hear from you!</p> 
          </div>

          <div className="uppercase underline-text mt-8">
            <Link href="/">generate a path</Link>
          </div>
        </div>
      </Container>
    </Layout>
  )
}