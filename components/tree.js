import { testData } from '../pages/api/data';
import dynamic from 'next/dynamic';

const DynamicFileTreeImport = dynamic(() => import('react-folder-tree'), {
  ssr: false,
});

const BasicTree = (props) => {
  const onTreeStateChange = (state, event) => {
    

    const getChecked = (branch, path) => {
      let checkedElements = []

      let branchPath = path + '/' + branch.name

      if(branch.hasOwnProperty('isOpen')) {
        branch.children.forEach((child,i) => {
          checkedElements = checkedElements.concat(getChecked(child, branchPath))
        })
      } else if(branch.checked == 1) {
          checkedElements.push(branchPath)
      }
      return checkedElements 
    }

    console.log(getChecked(state, ''))
    console.log(state, event)

    let checkedEl = getChecked(state, '')

    let from = checkedEl[0]
    let to = checkedEl[1]
    let path =(`${from}, ${to}`)
    
    // const computePath = (from, to) => {
    //   if (from[0] == to[0]){
    //     console.log('.')
    //   } 
    //   if (from[0] == to[0] && from[1] == to[1]){
    //     console.log('/') 
    //   } 
    //   if (from[2] == to [2]){
    //     console.log('./')
    //   }

    // }

    
    
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