import BasicTree from "../components/tree";

const Homepage = () => {
  return (
    <div className="mt-20 grid grid-cols-2 gap-4">
      <div>
        <small className="uppercase">Directory:</small>
        <BasicTree />
      </div>
      <div>
        <small className="uppercase">Relative Path:</small>
      </div>
    </div>
  );
}

export default Homepage;
