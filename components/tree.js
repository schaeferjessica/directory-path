import { testData } from '../pages/api/data';
import dynamic from 'next/dynamic';

const DynamicFileTreeImport = dynamic(() => import('react-folder-tree'), {
  ssr: false,
});

const BasicTree = () => {
  const onTreeStateChange = (state, event) => {
    if (state.checked == '1') {  
      //  state.children.forEach((child, i) => {
      //  console.log(state.children[i])
      //  })
      console.log(state.children)
    }
      console.log(state, event);
      console.log(testData); 
}
  return (
    <DynamicFileTreeImport data={testData} onChange={onTreeStateChange} />
  );
};

export default BasicTree;