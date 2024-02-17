import data from "../objects.json";
import Card from "./Card";

const AllPages = () => {
  return (
    <div className="container">
      {data[0].map((e) => (
        <Card key={e.id} {...e} />
      ))}
      {data[1].map((e) => (
        <Card key={e.id} {...e} />
      ))}
      {data[2].map((e) => (
        <Card key={e.id} {...e} />
      ))}
      {data[3].map((e) => (
        <Card key={e.id} {...e} />
      ))}
    </div>
  );
};

export default AllPages;
