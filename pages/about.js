import Layout from '../components/layout'
import Container from '../components/container'
import Link from 'next/link'

export default function About() {
  return (
    <Layout>
      <Container>
        <div className="mt-14">
          <p>In this page we are going to explain a litle about the project and how to find the path on our webapp.</p>
      
          <div className="uppercase underline-text mt-4">
            <Link href="/">Back to home</Link>
          </div>
        </div>
      </Container>
    </Layout>
  )
}