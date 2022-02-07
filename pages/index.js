import { UncontrolledTreeEnvironment, Tree, StaticTreeDataProvider } from 'react-complex-tree';
import 'react-complex-tree/lib/style.css';



const Homepage = () => {
    const items = {
      root: {
        index: 'root',
        hasChildren: true,
        children: ['child1', 'child2', 'child6', 'child7', 'child9'],
        data: 'Root item',
      },
      child1: {
        index: 'child1',
        children: [],
        data: 'Your Project',
      },
      child2: {
        index: 'child2',
        hasChildren: true,
        children: ['child3', 'child4'],
        data: 'Pages',
      },
      child3: {
        index: 'child3',
        hasChildren: true,
        children: ['child5'],
        data: 'api',
      },
      child4: {
        index: 'child4',
        children: [],
        data: 'Index.js',
      },
      child5: {
        index: 'child5',
        children: [],
        data: 'hello.js',
      },
      child6: {
        index: 'child6',
        children: [],
        data: 'Public',
      },
      child7: {
        index: 'child7',
        hasChildren: true,
        children: ['child8'],
        data: 'Styles',
      },
      child8: {
        index: 'child8',
        children: [],
        data: 'globals.css',
      },
      child9: {
        index: 'child9',
        children: [],
        data: 'package.json',
      },
    };
    
  return (
    <div className="mt-20 grid grid-cols-2 gap-4">
      <div>
        <small className="uppercase">Directory:</small>
   
    <UncontrolledTreeEnvironment
      dataProvider={new StaticTreeDataProvider(items, (item, data) => ({ ...item, data }))}
      getItemTitle={item => item.data}
      viewState={{}}
    >
  <Tree treeId="tree-1" rootItem="root" treeLabel="Tree Example" />
</UncontrolledTreeEnvironment>
</div>
      <div>
        <small className="uppercase">Relative Path:</small>
      </div>
    </div>
  );
}

export default Homepage;