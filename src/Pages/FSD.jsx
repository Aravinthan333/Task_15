import Card from "./Card";
import data from "../objects.json";

const FSDev = () => {
  return (
    <div className="container">
      {data[0].map((e) => (
        <Card key={e.id} {...e} />
      ))}
      {/* <Card {...data[0][0]} /> */}
    </div>
  );
};

export default FSDev;
