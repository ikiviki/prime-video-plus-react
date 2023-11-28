import { useState } from "react";

const TrendingVideoList = () => {
  // State is a component wide updateable data.
  // Whenever the state is updated -> the UI will update.
  const [resolution, setResolution] = useState("HD");
  const handleResolution = () => {
    // Updating the state using the setter.
    setResolution("4k");
  };

  return (
    <div className="row">
      <h4>
        Enjoy Watching in {resolution} | &nbsp;
        <button className="btn btn-primary btn-sm" onClick={handleResolution}>
          Change Resolution
        </button>
      </h4>
      <div className="col-md-3">col1</div>
      <div className="col-md-3">col2</div>
    </div>
  );
};

export default TrendingVideoList;
