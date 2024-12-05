import React from "react";
import styled from "styled-components";
import Toolbar from "./Toolbar/Toolbar.js";
import { TopImage, TextWrapper, TopHeaderText } from "./StyledComponents.js";
import PropTypes from "prop-types";
import Gallery from "react-grid-gallery";
import GalleryHeader3 from "../images/Gallery/GalleryHeader3.jpg";
import T0 from "../images/Tutorial/DT5.jpg";
import T1 from "../images/Tutorial/DT9.jpg";
import T2 from "../images/Tutorial/DT10.jpg";
import T3 from "../images/Tutorial/DT11.jpg";
import T4 from "../images/Tutorial/DT12.jpg";
import T5 from "../images/Tutorial/DT1.jpg";
import T6 from "../images/Tutorial/DT2.jpg";
import T7 from "../images/Tutorial/DT4.jpg";

const PhotoBox = styled.div`
  margin: 2rem auto;
  padding: 2rem;
  display: block;
  minheight: 1rem;
  width: 80%;
  //border:1px solid #ddd;
  border: 0.15rem solid #d8aa35;
  border-radius: 1rem;
  overflow: auto;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

class Demo4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: this.props.images,
    };
  }

  setCustomTags(i) {
    return i.tags.map((t) => {
      return (
        <div key={t.value} style={customTagStyle}>
          {t.title}
        </div>
      );
    });
  }

  render() {
    var images = this.state.images.map((i) => {
      i.customOverlay = (
        <div style={captionStyle}>
          <div>{i.caption}</div>
          {i.hasOwnProperty("tags") && this.setCustomTags(i)}
        </div>
      );
      return i;
    });
    return (
      <div>
        <TopImage style={{ backgroundImage: `url(${GalleryHeader3})` }}>
          <Toolbar drawerClickHandler={this.props.drawerToggleClickHandler} />
          {this.props.sideDrawer}
          <TextWrapper>
            <TopHeaderText>Daily Tutorial Program</TopHeaderText>
          </TextWrapper>
        </TopImage>

        <PhotoBox>
          <Gallery images={images} enableImageSelection={false} />
        </PhotoBox>
      </div>
    );
  }
}

Demo4.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      srcset: PropTypes.array,
      caption: PropTypes.string,
      thumbnailWidth: PropTypes.number.isRequired,
      thumbnailHeight: PropTypes.number.isRequired,
    })
  ).isRequired,
};

const captionStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  maxHeight: "240px",
  overflow: "hidden",
  position: "absolute",
  bottom: "0",
  width: "100%",
  color: "white",
  padding: "2px",
  fontSize: "90%",
};

const customTagStyle = {
  wordWrap: "break-word",
  display: "inline-block",
  backgroundColor: "white",
  height: "auto",
  fontSize: "75%",
  fontWeight: "600",
  lineHeight: "1",
  padding: ".2em .6em .3em",
  borderRadius: ".25em",
  color: "black",
  verticalAlign: "baseline",
  margin: "2px",
};

Demo4.defaultProps = {
  images: [
     {
      src: `${T0}`,
      thumbnail: `${T0}`,
      thumbnailWidth: 524.5,
     thumbnailHeight: 349.7
     //tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
    //caption: "Orange Macro (Tom Eversley - isorepublic.com)"
     },
    {
      src: `${T1}`,
       thumbnail: `${T1}`,
       thumbnailWidth: 524.5,
      // thumbnailHeight: 349.7
       // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
    // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
     },
     {
      src: `${T2}`,
      thumbnail: `${T2}`,
      thumbnailWidth: 524.5,
      thumbnailHeight: 349.7,
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
     // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
     },
     {
      src: `${T3}`,
      thumbnail: `${T3}`,
       thumbnailWidth: 524.5,
       thumbnailHeight: 349.7,
     //tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
     //caption: "Orange Macro (Tom Eversley - isorepublic.com)"
     },
     {
       src: `${T4}`,
      thumbnail: `${T4}`,
      thumbnailWidth: 524.5,
    thumbnailHeight: 349.7
    //   // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
    //   // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${T5}`,
      thumbnail: `${T5}`,
      thumbnailWidth: 524.5,
      thumbnailHeight: 349.7
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${T6}`,
      thumbnail: `${T6}`,
      thumbnailWidth: 524.5,
      // thumbnailHeight: 349.7
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${T7}`,
      thumbnail: `${T7}`,
      thumbnailWidth: 524.5,
      // thumbnailHeight: 349.7
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
  ],
};

export default Demo4;
