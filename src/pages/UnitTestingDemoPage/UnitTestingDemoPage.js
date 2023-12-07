import { Helmet } from "react-helmet-async";
import CompanyInfo from "./components/CompanyInfo";

const UnitTestingDemoPage = () => {
  return (
    <div>
      <Helmet>
        <title>Unit Testing Demo</title>
      </Helmet>
      UnitTestingDemoPage
      <CompanyInfo foundedYear="1886" />
    </div>
  );
};

export default UnitTestingDemoPage;
