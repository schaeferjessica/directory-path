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
        <div className="mt-14 grid grid-cols-2 gap-6">
          <div>
            <small className="uppercase">Directory:</small>
            <div className="mt-4 box font-mono"><BasicTree setPathObj={setPathObj} /></div> 
          </div>
          <div>
            <small className="uppercase">Relative Path:</small>
            <div className="mt-4 box font-mono"><Path pathObj={pathObj}/></div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
// In tree.js we get the elements 
// In paths.js we show the elements 
// Defining atribute setPathObj and pathObj in the prop