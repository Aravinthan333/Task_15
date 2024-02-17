import data from "../objects.json";
import Card from "./Card";

const CyberSecyrity = () => {
  return (
    <div className="container">
      {data[2].map((e) => (
        <Card key={e.id} {...e} />
      ))}
    </div>
  );
};

export default CyberSecyrity;
