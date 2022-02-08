import Meta from '../components/meta'
import Navigation from "../components/navigation";
import Footer from '../components/footer';

export default function Layout({  children }) {
  return (
    <>
      <Meta />
      <Navigation />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}