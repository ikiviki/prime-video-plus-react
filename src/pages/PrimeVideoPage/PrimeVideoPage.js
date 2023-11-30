import { Helmet } from "react-helmet-async";
import LatestVideoList from "./components/LatestVideoList";
import TrendingVideoList from "./components/TrendingVideoList";
import RecommendedVideoList from "./components/RecommendedVideoList";
import Subscription from "./components/Subscription";

const PrimeVideoPage = () => {
  return (
    <div>
      <Helmet>
        <title>Prime Videos</title>
      </Helmet>
      <h1>Prime Video App</h1>

      <h2>Latest Videos | Props Demo</h2>
      <LatestVideoList />
      <hr />

      <h2>Trending Videos | States and Events Demo</h2>
      <TrendingVideoList />
      <hr />

      <h2>
        Recommended Videos | States, Events, Conditional Rendering, Lists & Keys
        Demo
      </h2>
      <RecommendedVideoList />
      <hr />

      <h2>Styling in React JS</h2>
      <Subscription />
      <hr />
    </div>
  );
};

export default PrimeVideoPage;
