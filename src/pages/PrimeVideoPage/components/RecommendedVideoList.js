import { useState } from "react";

const RecommendVideoList = () => {
  // Comp wide updatable data.
  const [recommendedVideos, setRecommendedVideos] = useState([
    {
      id: 765354657,
      title: "Top 50 Goals of Messi",
      description: "Watch and enjoy the top 50 goals of the Legendary Messi",
      thumbnailUrl: "https://placehold.co/350x250",
      category: "Sports",
      publishedOn: "2 months ago",
      isInWatchlist: false,
    },
    {
      id: 45657856768,
      title: "Why Ronaldo is the GOAT?",
      description: "Is he a human? Look at the goals he scored and decide",
      thumbnailUrl: "https://placehold.co/350x250",
      category: "Sports",
      publishedOn: "3 months ago",
      isInWatchlist: false,
    },
    {
      id: 67565654,
      title: "Big Factories of the World",
      description:
        "How the factories are producing stuff at large scale? watch it now",
      thumbnailUrl: "https://placehold.co/350x250",
      category: "Industries",
      publishedOn: "3 months ago",
      isInWatchlist: true,
    },
    {
      id: 979768632,
      title: "Super cars of 2023",
      description:
        "Electric cars are now taking over the old fashioned cars. Enjoy the Super cars show",
      thumbnailUrl: "https://placehold.co/350x250",
      category: "Auto",
      publishedOn: "3 months ago",
      isInWatchlist: false,
    },
  ]);

  // TESTING PURPOSE ONLY.
  // const [recommendedVideos, setRecommendedVideos] = useState([]);

  // Conditional Rendering outside JSX.
  if (recommendedVideos.length === 0) {
    return (
      <div className="alert alert-warning">
        Unable to suggest Recommended Videos. Please watch more videos.
      </div>
    );
  }

  const handleWatchlist = (index, videoId) => {
    // Receive index as param and update the state immutably.
    // Using index.
    const videos = [...recommendedVideos];
    videos[index].isInWatchlist = !videos[index].isInWatchlist;

    // Using videoId
    // const videos = recommendedVideos.map((video, index) => {
    //   if (video.id === videoId) {
    //     video.isInWatchlist = !video.isInWatchlist;
    //   }
    //   return video;
    // });
    // TODO: Try using filter.

    // DONOT mutate the state directly, use the setter to update the state.
    setRecommendedVideos(videos);
  };

  return (
    <div className="row">
      {
        // Conditional Rendering inside JSX.
        // recommendedVideos.length !== 0 ? (
        recommendedVideos.length !== 0 && (
          <>
            {/* Lists = looping through the array and rendering in JSX. */}
            {recommendedVideos.map((video, index) => {
              return (
                <div className="col-md-3" key={video.id}>
                  <div
                    className="card"
                    // INLINE STYLES not recommended inside LOOPS
                    // style={{
                    //   backgroundColor: "red",
                    // }}
                  >
                    <img
                      src={video.thumbnailUrl}
                      className="card-img-top"
                      alt={video.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{video.title}</h5>
                      <p className="card-text">{video.description}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">{video.category}</li>
                      <li className="list-group-item">{video.publishedOn}</li>
                      <li className="list-group-item">
                        <button
                          className="btn btn-success btn-sm"
                          onClick={handleWatchlist.bind(this, index, video.id)}
                          // onClick={() => handleWatchlist(index, video.id)} // NOT RECOMMENDED INSIDE MAP
                        >
                          {video.isInWatchlist
                            ? "In Watchlist"
                            : "Add to Watchlist"}
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </>
        )
        // : (
        //   <div className="alert alert-warning">
        //     Unable to suggest Recommended Videos. Please watch more videos.
        //   </div>
        // )
      }
    </div>
  );
};

export default RecommendVideoList;
