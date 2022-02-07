import dynamic from 'next/dynamic'
import BasicTree from '../components/tree'

const DynamicTree = dynamic(() => import('../components/tree'), {
  ssr: false
})


const Homepage = () => {
  return (
    <div className="mt-20">
      <div>
        <small className="uppercase">Directory:</small>
        <DynamicTree />
      </div>
      <div>
        <small className="uppercase">Relative Path:</small>
      </div>
    </div>
  );
}

export default Homepage;
