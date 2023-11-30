const TrendingVideo = ({title, description, thumbnailUrl, category, publishedOn}) => {
  return (
    <div className="card">
      <img
        src={thumbnailUrl}
        className="card-img-top"
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{category}</li>
        <li className="list-group-item">{publishedOn}</li>
      </ul>
    </div>
  );
};

export default TrendingVideo;
