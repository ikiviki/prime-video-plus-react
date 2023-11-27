import LatestVideo from "./LatestVideo";

const LatestVideoList = () => {
  return (
    <div className="row">
      <div className="col-md-3">
        <LatestVideo />
      </div>
      <div className="col-md-3">
        <LatestVideo />
      </div>
      <div className="col-md-3">col 3</div>
      <div className="col-md-3">col 4</div>
      <div className="col-md-3">col 5</div>
      <div className="col-md-3">col 6</div>
    </div>
  );
};

export default LatestVideoList;
