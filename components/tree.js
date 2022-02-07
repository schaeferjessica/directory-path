
import { testData } from '../pages/api/data';
import dynamic from 'next/dynamic';

const DynamicFileTreeImport = dynamic(() => import('react-folder-tree'), {
  ssr: false, // needed to prevent warning about dynamic component
});

const BasicTree = () => {
  const onTreeStateChange = (state, event) => console.log(state, event);
  console.log(testData);

  return (
    <DynamicFileTreeImport data={testData} onChange={onTreeStateChange} />
  );
};

export default BasicTree;