import React from "react";
import styled from "styled-components";
import {
  TopImage,
  TextWrapper,
  TopParaText,
  MidSection,
  MidParagraphOne,
} from "./StyledComponents.js";
import TopOurMission2 from "../images/Our Mission/WCV.jpg";
import Toolbar from "./Toolbar/Toolbar.js";

export const PostIframe = styled.iframe`
  padding-left: 0.5rem;
  border: 2px solid white;
  margin: auto;
  // border: 1px solid black;
  @media (max-width: 768px) {
    // padding-top: 5rem;
    padding-left: 0rem;
    width: 100%;
    height: 15rem;
  }
`;

const WhoWeAre = (props) => {
  return (
    <div>
      <TopImage style={{ backgroundImage: `url(${TopOurMission2})` }}>
        <Toolbar drawerClickHandler={props.drawerToggleClickHandler} />
        {props.sideDrawer}
        <TextWrapper>
          <TopParaText>
            "BE THE CHANGE YOU WANT TO SEE IN THE WORLD." - MAHATMA GANDHI{" "}
          </TopParaText>
        </TextWrapper>
      </TopImage>

      <MidSection style={{marginBottom: "8rem"}}>
        <MidParagraphOne style={{height: "100vh"}}>
          <h2 style={{ margin: "0.5rem", fontSize: "2rem" }}>Our Mission</h2>
          <h4
            style={{ color: "red", margin: "0.5rem", fontSize: "1.25rem" }}
          >
            Our mission is to empower underprivileged students in underserved African communities by providing access to quality education, enabling them to break free from poverty and compete on a global scale.
          </h4>
          

          <p style={{ margin: "0.5rem", fontSize: "1rem" }}>
            CAIN Education Foundation, a 501(c)(3) non-profit organization based in Lagos, Nigeria, was established in 2013 by a passionate group of young adults dedicated to empowering underprivileged Africans.
          </p>
          <p style={{ margin: "0.5rem", fontSize: "1rem" }}>
            <strong style={{fontSize: "2rem"}}>Who We Are</strong><br/><br/>
            We are committed to organizing, mobilizing, and channeling resources to create transformative educational opportunities for underserved communities, fostering self-reliance. Through a comprehensive, community-focused strategy, we enhance the quality and accessibility of education for marginalized students across Africa. Our ambitious goal is to educate and empower 1,000,000 children and youth with exceptional education and skills by 2040, enabling them to overcome poverty and thrive on the global stage.
          </p>
          <p style={{ margin: "0.5rem", fontSize: "1rem" }}>
            At the heart of our foundation lies the belief that everyone deserves access to quality education, regardless of socioeconomic status. Since our inception, we have prioritized providing underserved African communities with access to quality education.
          </p>
        </MidParagraphOne>
        <PostIframe style={{marginTop: "3rem"}}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ILc2lnyRgik"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;fullscreen"
        ></PostIframe>

        {/* <MidParagraphTwo /> */}
      </MidSection>

      <div></div>
    </div>
  );
};

export default WhoWeAre;
