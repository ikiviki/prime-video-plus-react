import { Helmet } from "react-helmet-async";
import styled from "styled-components";

const StyledTitle = styled.h1`
  text-align: center;
  color: red;
  padding: 50px;
`;

const AboutUsPage = () => {
  return (
    <div>
      <Helmet>
        <title>About</title>
      </Helmet>
      <StyledTitle>AboutUsPage</StyledTitle>
    </div>
  );
};

export default AboutUsPage;
