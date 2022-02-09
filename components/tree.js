import { testData } from '../pages/api/data';
import dynamic from 'next/dynamic';

const DynamicFileTreeImport = dynamic(() => import('react-folder-tree'), {
  ssr: false,
});

const BasicTree = (props) => {
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

    let checkEls = getChecked(state)

    let from = checkEls[0]
    let to = checkEls[1]
    let path = `../${from}/${to}`
    
    //Defining the values of 'from, to and path' according the a function that gets all the checked elements of an object
    //Adding those values to the function setPathObj 

    props.setPathObj({
      from: from,
      to: to,
      path: path
    })

   

  }
  return (
    <DynamicFileTreeImport data={testData} onChange={onTreeStateChange} />
  );
};

export default BasicTree;