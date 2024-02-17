import data from "../objects.json";
import Card from "./Card";

const CareerPage = () => {
  return (
    <div className="container">
      {" "}
      {data[3].map((e) => (
        <Card key={e.id} {...e} />
      ))}
    </div>
  );
};

export default CareerPage;
