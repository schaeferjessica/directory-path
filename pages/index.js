import BasicTree from "../components/tree";
import Path from "../components/path";

const rootElement = () => {
  return (
    <div className="mt-14 grid grid-cols-2 gap-6">
      <div>
        <small className="uppercase">Directory:</small>
        <div className="mt-4 box font-mono"><BasicTree /></div>
      </div>
      <div>
        <small className="uppercase">Relative Path:</small>
        <div className="mt-4 box font-mono"><Path /></div>
      </div>
    </div>
  );
}

export default rootElement;
