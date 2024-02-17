import data from "../objects.json";
import Card from "./Card";

const DataScience = () => {
  return (
    <div className="container">
      {data[1].map((e) => (
        <Card key={e.id} {...e} />
      ))}
    </div>
  );
};

export default DataScience;
