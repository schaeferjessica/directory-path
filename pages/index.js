import BasicTree from "../components/tree";
import Path from "../components/path";

const rootElement = () => {
  return (
    <div className="mt-20 grid grid-cols-2 gap-4">
      <div>
        <small className="uppercase">Directory:</small>
        <div className="mt-4 box"><BasicTree /></div>
      </div>
      <div>
        <small className="uppercase">Relative Path:</small>
        <div className="mt-4 box"><Path /></div>
      </div>
    </div>
  );
}

export default rootElement;
