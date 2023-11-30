import { useState } from "react";
import TrendingVideo from "./TrendingVideo";

const TrendingVideoList = () => {
  // State is a component wide updateable data.
  // Whenever the state is updated -> the UI will update.
  const [resolution, setResolution] = useState("HD");
  const [trendingVideos, setTrendingVideos] = useState([
    {
      id: 7856786,
      title: "Harry Potter",
      description: "The story of Hogwarts !!",
      thumbnailUrl: "https://placehold.co/350x250",
      category: "Action",
      publishedOn: "2 yers ago",
    },
    {
      id: 2396,
      title: "Man Vs Wild",
      description: "The life of Man in the wild",
      thumbnailUrl: "https://placehold.co/350x250",
      category: "Adventure",
      publishedOn: "5 days ago",
    },
  ]);

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
      <div className="col-md-3">
        <TrendingVideo
          // title={trendingVideos[0].title}
          // description={trendingVideos[0].description}
          // thumbnailUrl={trendingVideos[0].thumbnailUrl}
          // category={trendingVideos[0].category}
          // publishedOn={trendingVideos[0].publishedOn}
          {...trendingVideos[0]}
        />
      </div>
      <div className="col-md-3">
        <TrendingVideo
          title={trendingVideos[1].title}
          description={trendingVideos[1].description}
          thumbnailUrl={trendingVideos[1].thumbnailUrl}
          category={trendingVideos[1].category}
          publishedOn={trendingVideos[1].publishedOn}
        />
      </div>
    </div>
  );
};

export default TrendingVideoList;
