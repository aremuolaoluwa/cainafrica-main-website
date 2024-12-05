import React from "react";
import styled from "styled-components";
import Toolbar from "./Toolbar/Toolbar.js";
import { TopImage, TextWrapper} from "./StyledComponents.js";
import PropTypes from "prop-types";
import Gallery from "react-grid-gallery";
import GalleryHeader3 from "../images/Gallery/GalleryHeader3.jpg";
import JC0 from "../images/ProjectsData/JEIDA clinic.jpg";
import JC1 from "../images/Gallery/JEIDA CLINIC/J (1).jpg";
import JC2 from "../images/Gallery/JEIDA CLINIC/J (2).jpg";
import JC3 from "../images/Gallery/JEIDA CLINIC/J (6).jpg";
import JC4 from "../images/Gallery/JEIDA CLINIC/J (7).jpg";
import JC5 from "../images/Jeida/Jeida2.jpg";
import JC6 from "../images/Jeida/Jeida3.jpg";
import JC7 from "../images/Jeida/Jeida4.jpg";
import JC8 from "../images/Jeida/J2.jpg";
import JC9 from "../images/Jeida/J3.jpg";
import JC10 from "../images/Jeida/J4.jpg";
import JC11 from "../images/Jeida/J5.jpg";
import JC12 from "../images/Jeida/J6.jpg";
import JC13 from "../images/Jeida/J7.jpg";
import JC14 from "../images/Jeida/J8.jpg";

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
            {/* <TopHeaderText>Health Care For Jeida</TopHeaderText> */}
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
      src: `${JC0}`,
      thumbnail: `${JC0}`,
      thumbnailWidth: 524.5,
      thumbnailHeight: 349.7,
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${JC1}`,
      thumbnail: `${JC1}`,
      thumbnailWidth: 524.5,
      thumbnailHeight: 524.7,
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${JC2}`,
      thumbnail: `${JC2}`,
      thumbnailWidth: 524.5,
      thumbnailHeight: 349.7,
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${JC3}`,
      thumbnail: `${JC3}`,
      thumbnailWidth: 524.5,
      thumbnailHeight: 349.7,
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${JC4}`,
      thumbnail: `${JC4}`,
      thumbnailWidth: 524.5,
      thumbnailHeight: 349.7,
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${JC5}`,
      thumbnail: `${JC5}`,
      thumbnailWidth: 524.5,
      thumbnailHeight: 349.7,
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${JC6}`,
      thumbnail: `${JC6}`,
      thumbnailWidth: 524.5,
      thumbnailHeight: 349.7,
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${JC7}`,
      thumbnail: `${JC7}`,
      thumbnailWidth: 524.5,
      thumbnailHeight: 349.7,
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${JC8}`,
      thumbnail: `${JC8}`,
      thumbnailWidth: 524.5,
      thumbnailHeight: 349.7,
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${JC9}`,
      thumbnail: `${JC9}`,
      thumbnailWidth: 524.5,
      thumbnailHeight: 349.7,
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${JC10}`,
      thumbnail: `${JC10}`,
      thumbnailWidth: 524.5,
      thumbnailHeight: 349.7,
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${JC11}`,
      thumbnail: `${JC11}`,
      thumbnailWidth: 524.5,
      thumbnailHeight: 349.7,
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${JC12}`,
      thumbnail: `${JC12}`,
      thumbnailWidth: 524.5,
      thumbnailHeight: 349.7,
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${JC13}`,
      thumbnail: `${JC13}`,
      thumbnailWidth: 524.5,
      thumbnailHeight: 349.7,
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${JC14}`,
      thumbnail: `${JC14}`,
      thumbnailWidth: 524.5,
      thumbnailHeight: 349.7,
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
  ],
};

export default Demo4;
