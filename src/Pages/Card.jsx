import PropTypes from "prop-types";

const Card = ({ title, description, date }) => {
  return (
    <>
      <div className="card">
        <div>
          <img src="https://fakeimg.pl/380x200" />
        </div>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          <hr />
          <p>{date}</p>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
};

export default Card;
