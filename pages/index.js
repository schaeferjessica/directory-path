import Layout from '../components/layout'
import Head from 'next/head'
import Container from '../components/container'
import BasicTree from '../components/tree'
import Path from '../components/path'

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Directory Path</title>
      </Head>
      <Container>
        <div className="mt-14 grid grid-cols-2 gap-6">
          <div>
            <small className="uppercase">Directory:</small>
            <div className="mt-4 box font-mono"><BasicTree /></div>
          </div>
          <div>
            <small className="uppercase">Relative Path:</small>
            <div className="mt-4 box font-mono"><Path /></div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}