import { dataDefault, dataOne, dataTwo, dataThree } from '../pages/api/data-default';
import dynamic from 'next/dynamic';
import {useState, useEffect} from "react"

const DynamicFileTreeImport = dynamic(() => import('react-folder-tree'), {
  ssr: false,
});

const BasicTree = (props) => {

  const [dataTree, setDataTree] = useState(dataDefault);

  const setupTree = () => {
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
  }

  const onTreeStateChange = (state, event) => {

    if (state.setupDone == undefined){
      setupTree()
      state.setupDone = true
    }

    const getChecked = (branch, path) => {
      let checkedElements = []

      let branchPath = path + '/' + branch.name

      if(branch.hasOwnProperty('isOpen')) {
        /* console.log(branch) */
        branch.children.forEach((child,i) => {
          checkedElements = checkedElements.concat(getChecked(child, branchPath))
        })
      } else if(branch.checked == 1) {
          checkedElements.push({
            path: branchPath,
            el: branch
          })
      }
      return checkedElements
    }

    /* console.log(getChecked(state, '')) */
    /* console.log(state, event) */

    let checkedEl = getChecked(state, '')
    //console.log(checkedEl)
    //console.log(state.firstEl, state.secondEl)

    if (checkedEl.length == 0){
      state.firstEl = undefined
    } else if(checkedEl.length == 1) {
      state.firstEl = checkedEl[0]
      state.secondEl = undefined
    } else if (checkedEl.length == 2) {
      if (state.firstEl.path == checkedEl[0].path) {
        state.secondEl = checkedEl[1]
      } else {
        state.secondEl = checkedEl[0]
      }
    } else if (checkedEl.length > 2){
      state.firstEl.el.checked = 0
      state.secondEl.el.checked = 0
      if (state.firstEl.path == checkedEl[0].path && state.secondEl.path == checkedEl[1].path ){
        state.firstEl = checkedEl[2]
      } else if (state.firstEl.path == checkedEl[1].path && state.secondEl.path == checkedEl[0].path ){
        state.firstEl = checkedEl[2]
      } else if (state.firstEl.path == checkedEl[0].path && state.secondEl.path == checkedEl[2].path ){
        state.firstEl = checkedEl[1]
      } else if (state.firstEl.path == checkedEl[2].path && state.secondEl.path == checkedEl[0].path ){
        state.firstEl = checkedEl[1]
      } else if (state.firstEl.path == checkedEl[1].path && state.secondEl.path == checkedEl[2].path ){
        state.firstEl = checkedEl[0]
      } else if (state.firstEl.path == checkedEl[2].path && state.secondEl.path == checkedEl[1].path ){
        state.firstEl = checkedEl[0]
      }
      state.secondEl = undefined
    }

    // console.log(state.firstEl, state.secondEl)

    // if (state.firstEl.path == undefined) {
    //   console.log('select where you are and where you need to go')
    // } else if (state.firstEl.path == checkedEl[0].path && state.secondEl == undefined) {
    //   console.log('you are here')
    //   console.log('now choose where to go')
    // }

    let from = state.firstEl
    if (from == null) {
      from = ''
    } else {
      from = state.firstEl.path
    }
    let to = state.secondEl
    if (to == null) {
      to = ''
    } else {
      to = state.secondEl.path
    }

    function computePath(from, to) {

      let fromParts = from.split('/');
      fromParts.shift();

      let toParts = to.split('/');
      toParts.shift();
      //console.log(toParts);

      let extract = [];
      let remaining = [];

      let nReturn = 0;

      for (let i = 0; i < fromParts.length; i++) {
        let e = fromParts[i];
        let x = toParts[i];
        if (e == x) {
          extract.push(e);
        } else {
          nReturn = fromParts.length - i - 1;
          remaining = toParts.slice(i);
          break;
        }
      }

      let path = '';

      if (nReturn > 0) {
        for (let i = 0; i < nReturn; i++) {
          path += '../';
        }
      } else {
        path += './';
      }

      return path += remaining.join('/');
    }

    //Defining the values of 'from, to and path' according the a function that gets all the checked elements of an object
    //Adding those values to the function setPathObj

    props.setPathObj({
      from: from,
      to: to,
      path: computePath(from, to)
    })
  }

  useEffect( () => { 
    const dataTreeOptions = [dataDefault, dataOne, dataTwo, dataThree]

    const getNextDataTree = () => {
      let nextDataTree = dataTreeOptions.shift()
      dataTreeOptions.push(nextDataTree)
      console.log(nextDataTree)
      return nextDataTree
    }
    
    document.querySelector('.random-tree-data').addEventListener('click', () => {
      const dataTree = getNextDataTree()
      setDataTree(dataTree)
    }
  )}, [])
  
  return (
    <DynamicFileTreeImport data={dataTree} onChange={onTreeStateChange}/>
  );
};

export default BasicTree;
