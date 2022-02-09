import { testData } from '../pages/api/data';
import dynamic from 'next/dynamic';

const DynamicFileTreeImport = dynamic(() => import('react-folder-tree'), {
  ssr: false,
});

const BasicTree = () => {
  const onTreeStateChange = (state, event) => {
  
    const getChecked = (branch) => {
      let checkedElements = []
      if(branch.hasOwnProperty('isOpen')) {
        branch.children.forEach((child,i) => {
          checkedElements = checkedElements.concat(getChecked(child))
        })
      } else if(branch.checked == 1) {
          checkedElements.push(branch.name)     
      }
      return checkedElements 
    }

    console.log(getChecked(state))

  }
  return (
    <DynamicFileTreeImport data={testData} onChange={onTreeStateChange} />
  );
};

export default BasicTree;