import Meta from '../components/meta'
import Navigation from "../components/navigation";
import Footer from '../components/footer';

export default function Layout({  children }) {
  return (
    <>
      <Meta />
      <div className='grid grid-rows-layout min-h-full'>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}