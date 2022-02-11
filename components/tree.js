import { defaultData } from '../pages/api/data';
import dynamic from 'next/dynamic';

const DynamicFileTreeImport = dynamic(() => import('react-folder-tree'), {
  ssr: false,
});

const BasicTree = (props) => {
  const onTreeStateChange = (state, event) => {

    document.querySelectorAll('.FolderOpenIcon, .FolderIcon').forEach(item => {
      const checkbox = item.parentElement.parentElement.querySelector('.checkboxDOM');
      checkbox.disabled = true;
      checkbox.setAttribute('hidden', 'true')
    });

    document.querySelectorAll('.TreeNode').forEach(item => {
      const checkbox = item.querySelector('.checkboxDOM')
      const checkboxDiv = item.querySelector('.CheckBox')
      const checkboxSpan = item.querySelector('.checkbox-span')

      if (!checkboxSpan) {
        const span = document.createElement('span');
        span.classList.add('checkbox-span');
        checkboxDiv.appendChild(span);
      }

      checkbox.addEventListener('change', () => {
        if(checkbox.checked) {
          item.classList.add('selected');
        } else {
          item.classList.remove('selected');
        }
      })
    })

    const getChecked = (branch, path) => {
      let checkedElements = []

      let branchPath = path + '/' + branch.name

      if(branch.hasOwnProperty('isOpen')) {
        /* console.log(branch) */
        branch.children.forEach((child,i) => {
          checkedElements = checkedElements.concat(getChecked(child, branchPath))
        })
      } else if(branch.checked == 1) {
          checkedElements.push(branchPath)
      }
      return checkedElements 
    }

    /* console.log(getChecked(state, '')) */
    /* console.log(state, event) */

    let checkedEl = getChecked(state, '')

    let from = checkedEl[0] 
    if (from == null) {
      from = ''
    } else {
      from = checkedEl[0]
    }
    let to = checkedEl[1]
    if (to == null) {
      to = ''
    } else {
      to = checkedEl[1]
    }
    
    const computePath = (from, to) => {

      let fromParts = from.split('/')
      fromParts.shift()
      //console.log(fromParts)

      let toParts = to.split('/')
      toParts.shift()
      console.log(toParts)

      let extract = []
      let remaining = []
      
      let nReturn = 0
      
      for (let i = 0; i < fromParts.length; i++){
        let e = fromParts[i]
        let x = toParts[i]
        if(e == x) {
            extract.push(e)
        } else {
          nReturn = fromParts.length - i - 1
          remaining = toParts.slice(i)
          break
        }
      }
      
      //console.log(nReturn)
      
      let path = ''
      
      if (nReturn > 0) {
        for (let i=0; i< nReturn; i++){
          path += '../'
        } 
      } else {
        path += './'
      }
      
      return path += remaining.join('/') 
      
      //console.log(path)
    }    
    
    //Defining the values of 'from, to and path' according the a function that gets all the checked elements of an object
    //Adding those values to the function setPathObj 

    props.setPathObj({
      from: from,
      to: to,
      path: computePath(from, to)
    })

  }
  return (
    <DynamicFileTreeImport data={defaultData} onChange={onTreeStateChange}/>
  );
};

export default BasicTree;