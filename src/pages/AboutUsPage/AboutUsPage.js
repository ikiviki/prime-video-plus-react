import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import Hello from "./components/Hello";
import Bye from "./components/Bye";
import { applyStyles } from "../../hoc/applyStyles";
import { Link, Outlet } from "react-router-dom";

const StyledTitle = styled.h1`
  text-align: center;
  color: red;
  padding: 50px;
`;

const UpdatedHello = applyStyles(Hello);
const UpdatedBye = applyStyles(Bye);

const AboutUsPage = () => {
  return (
    <div>
      <Helmet>
        <title>About</title>
      </Helmet>
      <StyledTitle>AboutUsPage</StyledTitle>

      <div className="btn-group mb-3">
        <Link to="history" className="btn btn-outline-primary" type="button">
          Our History
        </Link>
        <Link to="team" className="btn btn-outline-secondary" type="button">
          Our Team
        </Link>
        <Link to="careers" className="btn btn-outline-success" type="button">
          Our Careers
        </Link>
      </div>

      <Outlet />

      {/* The following paragraph is to demo error boundary */}
      {/* Enable the following line to see error boundary in action */}
      {/* <p>{props.getAge()}</p> */}
      <h2>HOC Demo</h2>
      <UpdatedHello />
      <UpdatedBye />
    </div>
  );
};

export default AboutUsPage;
