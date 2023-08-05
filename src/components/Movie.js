import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, year, summary, genres, rating }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>
          {title} ({year})
        </Link>
      </h2>
      <p style={{ maxHeight: "100px", overflow: "scroll" }}>{summary}</p>
      {genres.map((genre, index) => (
        <span key={index}> •{genre}</span>
      ))}
      <br></br>
      <span
        style={{
          fontSize: "20px",
          display: "block",
          marginTop: "10px",
        }}
      >
        Rating: {rating}/10
      </span>
      <hr></hr>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Movie;
