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
      <meta charset="utf-8"/>
      <meta name="title" content="Directory Path Generator"/ >
      <meta name="description" content="A Directory Path Generator for Begginer Coders. Get the path required to access a certain file or module in a fast and clever way."/ >
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/ >
        <title>Directory Path</title>

      </Head>
      <Container>
        <div className="mt-12 grid grid-rows-2 md:grid-cols-2 gap-6 items-start md:grid-flow-col">
          <div className="row-start-2 md:row-start-1">
            <small className="uppercase">Directory:</small>
            <div className="mt-4 box font-mono"><BasicTree setPathObj={setPathObj} /></div> 
          </div>
          <div className="row-start-1">
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