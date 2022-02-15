import Layout from '../components/layout'
import Head from 'next/head'
import Container from '../components/container'
import BasicTree from '../components/tree'
import Path from '../components/path'
import {useState, useEffect} from "react"

export default function Index() {

  const [pathObj, setPathObj] = useState([]) 
  //where pathObjs is an abject with from, to and path
  //where setPathObj is the function to set the elements

  
  useEffect( () => { document.querySelector('.copy-to-clipboard')
    .addEventListener('click', () => {
      navigator.clipboard.writeText(pathObj.path)
      //console.log(`copied to clipboard ${pathObj.path}`)
    }
  )}, [pathObj])

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
              <div className='absolute top-3.5 right-3'>
                <button className='sm:text-sm text-xs ml-3'>random</button>
                <button className='sm:text-sm text-xs ml-3'>rest</button>
              </div>
            </div> 

          </div>
          <div className="row-start-1">
            <small className="uppercase">Relative Path:</small>
            <div className="mt-4 box font-mono relative">
              <Path pathObj={pathObj}/>
              <div className='absolute top-3.5 right-3'>
                <button className='copy-to-clipboard sm:text-sm text-xs'>copy</button>
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