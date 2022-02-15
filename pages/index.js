import Layout from '../components/layout'
import Head from 'next/head'
import Container from '../components/container'
import BasicTree from '../components/tree'
import Path from '../components/path'
import {useState} from "react"

export default function Index() {


  const [pathObj, setPathObj] = useState([]) 
  //where pathObjs is an abject with from, to and path
  //where setPathObj is the function to set the elements

  return (
    <Layout>
      <Head>
        <title>Directory Path</title>

      </Head>
      <Container>
        <div className="mt-12 grid grid-rows-2 md:grid-cols-2 gap-6 items-start md:grid-flow-col">
          <div className="row-start-2 md:row-start-1">
            <small className="uppercase">Directory:</small>
            <div className="mt-4 box font-mono relative">
              <BasicTree setPathObj={setPathObj} />
              <div className='absolute top-3 right-3'>
                <button className='text-sm ml-2'>random</button>
                <button className='text-sm ml-2'>rest</button>
              </div>
            </div> 

          </div>
          <div className="row-start-1">
            <small className="uppercase">Relative Path:</small>
            <div className="mt-4 box font-mono relative">
              <Path pathObj={pathObj}/>
              <div className='absolute top-3 right-3'>
                <button className='text-sm'>copy</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
// In tree.js we get the elements 
// In paths.js we show the elements 
// Defining atribute setPathObj and pathObj in the prop