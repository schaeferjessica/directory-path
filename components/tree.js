import { testData } from '../pages/api/data';
import dynamic from 'next/dynamic';

const DynamicFileTreeImport = dynamic(() => import('react-folder-tree'), {
  ssr: false,
});

const BasicTree = () => {
  const onTreeStateChange = (state, event) => {
  
    // state = root
    // get all descendats from root that are checked

    // const getChecked = (branch) => {
      
    //   let checked = []

    //   if(branch.hasOwnProperty('isOpen')) {
    //     // for each children
    //     // getChecked(child) and concatenate to array
    //   } else {
    //     if(state.checked == 1) {
    //       return [state.name]
    //     }
    //     else return []
    //   }      
    //     getChecked(state)
    //   }
    // }
    console.log(state, event);
    console.log(testData)

}
  return (
    <DynamicFileTreeImport data={testData} onChange={onTreeStateChange} />
  );
};

export default BasicTree;