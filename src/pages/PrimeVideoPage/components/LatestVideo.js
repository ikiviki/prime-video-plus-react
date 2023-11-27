const LatestVideo = () => {
  return (
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Video title</h5>
        <p className="card-text">Video desc</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Action</li>
        <li className="list-group-item">published a day ago</li>
      </ul>
    </div>
  );
};

export default LatestVideo;
