
const Path = (props) => { 
  //where props is the object with the elements we defined on index (setPathObj and pathObj)

  return (
    <div>
      <span className="block">{props.pathObj.path}</span>
      <br />
      <small className="block">
        <span>from:</span>
        <span className="selectedPath selectedPath--from ml-1">{props.pathObj.from}</span>
      </small>

      <small className="block mt-1.5">
        <span>to:&nbsp;&nbsp;</span>
        <span className="selectedPath selectedPath--to ml-1">{props.pathObj.to}</span>
      </small>
    </div>
  );
};

// populating with the objects of the pathObj that is going to be defined in the tree

export default Path;
