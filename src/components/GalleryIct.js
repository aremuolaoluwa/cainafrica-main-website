import React from "react";
import styled from "styled-components";
import Toolbar from "./Toolbar/Toolbar.js";
import { TopImage, TextWrapper} from "./StyledComponents.js";
import PropTypes from "prop-types";
import Gallery from "react-grid-gallery";
import GalleryHeader3 from "../images/Gallery/GalleryHeader3.jpg";
import B1 from "../images/ICT4U/ICT4U_1.jpeg";
import B3 from "../images/ICT4U/ICT-21.jpg";
import B4 from "../images/ICT4U/ICT4U_3.jpeg";
import B5 from "../images/ICT4U/ICT-1.jpg";
import B6 from "../images/ICT4U/ICT-2.jpg";
import B7 from "../images/ICT4U/ICT-3.png";
import B8 from "../images/ICT4U/ICT-4.png";
import B9 from "../images/ICT4U/ICT-5.png";
import B10 from "../images/ICT4U/ICT-6.png";
import B11 from "../images/ICT4U/ICT-7.png";
import B12 from "../images/ICT4U/ICT-8.png";
import B13 from "../images/ICT4U/ICT-9.png";
import B14 from "../images/ICT4U/ICT-10.png";
import B15 from "../images/ICT4U/ICT-14.png";
import B16 from "../images/ICT4U/ICT-22.jpg";
import B17 from "../images/ICT4U/IT1.jpeg";
import B18 from "../images/ICT4U/IT2.jpeg";
import B19 from "../images/ICT4U/IT3.jpeg";

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
      src: `${B1}`,
      thumbnail: `${B1}`,
      thumbnailWidth: 524.5,
      // thumbnailHeight: 349.7
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${B3}`,
      thumbnail: `${B3}`,
      thumbnailWidth: 524.5,
      // thumbnailHeight: 349.7,
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${B4}`,
      thumbnail: `${B4}`,
      thumbnailWidth: 524.5,
      // thumbnailHeight: 349.7
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${B5}`,
      thumbnail: `${B5}`,
      thumbnailWidth: 524.5,
      // thumbnailHeight: 349.7
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${B6}`,
      thumbnail: `${B6}`,
      thumbnailWidth: 524.5,
      // thumbnailHeight: 349.7
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${B7}`,
      thumbnail: `${B7}`,
      thumbnailWidth: 524.5,
      // thumbnailHeight: 349.7
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${B8}`,
      thumbnail: `${B8}`,
      thumbnailWidth: 524.5,
      // thumbnailHeight: 349.7
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${B9}`,
      thumbnail: `${B9}`,
      thumbnailWidth: 524.5,
      // thumbnailHeight: 349.7
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${B10}`,
      thumbnail: `${B10}`,
      thumbnailWidth: 524.5,
      // thumbnailHeight: 349.7
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${B11}`,
      thumbnail: `${B11}`,
      thumbnailWidth: 524.5,
      // thumbnailHeight: 349.7
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${B12}`,
      thumbnail: `${B12}`,
      thumbnailWidth: 524.5,
      // thumbnailHeight: 349.7
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${B13}`,
      thumbnail: `${B13}`,
      thumbnailWidth: 524.5,
      // thumbnailHeight: 349.7
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${B14}`,
      thumbnail: `${B14}`,
      thumbnailWidth: 524.5,
      // thumbnailHeight: 349.7
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${B15}`,
      thumbnail: `${B15}`,
      thumbnailWidth: 524.5,
      // thumbnailHeight: 349.7
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${B16}`,
      thumbnail: `${B16}`,
      thumbnailWidth: 524.5,
      // thumbnailHeight: 349.7
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${B17}`,
      thumbnail: `${B17}`,
      thumbnailWidth: 524.5,
      // thumbnailHeight: 349.7
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${B18}`,
      thumbnail: `${B18}`,
      thumbnailWidth: 524.5,
      // thumbnailHeight: 349.7
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${B19}`,
      thumbnail: `${B19}`,
      thumbnailWidth: 524.5,
      // thumbnailHeight: 349.7
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
  ],
};

export default Demo4;