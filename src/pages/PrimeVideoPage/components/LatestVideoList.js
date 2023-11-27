import LatestVideo from "./LatestVideo";
const latestVideos = [
  {
    id: 45345,
    title: "Formula 1 - Final",
    description:
      "Verstappen beats Leclerc to victory in Abu Dhabi to end record-breaking year on top",
    thumbnailUrl: "https://placehold.co/350x250",
    category: "Sports",
    publishedOn: "2 hours ago",
  },
  {
    id: 5467890,
    title: "Greatest goals in the Premier League",
    description:
      "Garnacho's third-minute wonder goal muted the protesting Everton supporters at Goodison Park.",
    thumbnailUrl: "https://placehold.co/350x250",
    category: "Sports",
    publishedOn: "5 hours ago",
  },
];

const LatestVideoList = () => {
  return (
    <div className="row">
      <div className="col-md-3">
        <LatestVideo
          title={latestVideos[0].title}
          description={latestVideos[0].description}
          thumbnailUrl={latestVideos[0].thumbnailUrl}
          category={latestVideos[0].category}
        >
          {latestVideos[0].publishedOn}
          {/* Inner Text items are passed as 'children' => 'props.children' */}
        </LatestVideo>
      </div>
      <div className="col-md-3">
        <LatestVideo
          title={latestVideos[1].title}
          description={latestVideos[1].description}
          thumbnailUrl={latestVideos[1].thumbnailUrl}
          category={latestVideos[1].category}
        >
          {latestVideos[1].publishedOn}
        </LatestVideo>
      </div>
      <div className="col-md-3">
        <LatestVideo />
      </div>
      <div className="col-md-3">
        <LatestVideo />
      </div>
    </div>
  );
};

export default LatestVideoList;
