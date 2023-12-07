import PropTypes from "prop-types";

const RecommendVideo = ({
  title,
  description,
  thumbnailUrl,
  category,
  publishedOn,
  isInWatchlist,
  index,
  CallBack,
}) => {
  return (
    <div className="card">
      <img src={thumbnailUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{category}</li>
        <li className="list-group-item">{publishedOn}</li>
        <li className="list-group-item">
          <button
            className="btn btn-success btn-sm"
            onClick={CallBack.bind(this, index)}
          >
            {isInWatchlist ? "In Watchlist" : "Add to Watchlist"}
          </button>
        </li>
      </ul>
    </div>
  );
};

RecommendVideo.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  category: PropTypes.string,
  publishedOn: PropTypes.string,
  isInWatchlist: PropTypes.bool,
};

export default RecommendVideo;
