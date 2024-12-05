import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Toolbar from "./Toolbar/Toolbar.js";
import {
  TopImage,
  TextWrapper,
  TopParaText,
  OuterDiv,
  KeyDiv,
} from "./StyledComponents.js";
import partnersCover from "../images/PS/partners.png";
import sp1 from "../images/PS/Metanoia Africa.png";
import sp2 from "../images/PS/Cornell University.jpg";
import sp3 from "../images/PS/Davis Project for Peace.png";
import sp5 from "../images/PS/Bookcraft-logo.png";
import sp6 from "../images/PS/crossbonds.jpg";
import sp7 from "../images/PS/SandraDuke.png";
import sp8 from "../images/PS/LFB.png";
import sp9 from "../images/PS/Optimus.png";
import sp10 from "../images/PS/Jobberman.png";
import sp11 from "../images/PS/Schoolinka.jpeg";

const PartenersSponsorsData = [
  {
    index: 1,
    image: `${sp5}`,
  },


  {
    index: 2,
    image: `${sp3}`,
  },
  {
    index: 3, //These should be incremental from the last interger
    image: `${sp1}`,
  },
  {
    index: 4,
    image: `${sp2}`,
  },
  {
    index: 6,
    image: `${sp6}`,
  },
  {
    index: 7,
    image: `${sp7}`,
  },
  {
    index: 8,
    image: `${sp8}`,
  },
  {
    index: 9,
    image: `${sp9}`,
  },
  {
    index: 10,
    image: `${sp10}`,
  },
  {
    index: 11,
    image: `${sp11}`,
  },
];

const SponsorsImage = styled.img`
  margin: auto;
  border-radius: 0.8rem;
  width: auto;
  max-width: 20rem;
  height: 8rem;
  padding: 2rem;
  @media (max-width: 320px) {
    margin: 0rem;
    width: 10rem;
    margin: 1rem auto;
  }
`;

const PartnersSponsors = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    All();
  }, []);

  let All = () => {
    setData(PartenersSponsorsData);
  };

  return (
    <div>
      <TopImage
        style={{
          backgroundImage: `url(${partnersCover})`,
          backgroundPosition: "center",
        }}
      >
        <Toolbar drawerClickHandler={props.drawerToggleClickHandler} />
        {props.sideDrawer}
        <TextWrapper style={{}}>
          <TopParaText>
            “ALONE WE CAN DO SO LITTLE; TOGETHER WE CAN DO SO MUCH.” — HELEN KELLER 
          </TopParaText>
        </TextWrapper>
      </TopImage>
      <h1 style={{ textAlign: "center", marginTop: "5rem", fontSize: "3rem" }}>Our Partners & Sponsors</h1>
      <OuterDiv>
        {data.map((ps) => (
          <KeyDiv key={ps.index}>
            <SponsorsImage src={ps.image} class="sponsor_pic"></SponsorsImage>
          </KeyDiv>
        ))}
      </OuterDiv>
    </div>
  );
};

export default PartnersSponsors;
