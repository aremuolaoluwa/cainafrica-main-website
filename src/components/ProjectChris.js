import React from "react";
import Toolbar from "./Toolbar/Toolbar.js";
import {
  TopImage,
  TextWrapper,
  // TopHeaderText,
  TopParaText,
  OverallWrapper,
  PostWrapper,
  PostHeader,
  PostParagraph,
  MediaWrapper,
  PostIframe,
  PostIframeWrapper,
  SingleImage,
  PostImage
} from "./StyledComponents.js";
import projectsCover from "../images/ProjectsData/projects.jpg";
import Image1 from "../images/christmas/Christmas.jpg";
import Image2 from "../images/christmas/CH1.jpg";

const ProjectChris = (props) => {
  return (
    <div>
      <TopImage
        style={{
          backgroundImage: `url(${projectsCover})`,
          backgroundPosition: "center",
        }}
      >
        <Toolbar drawerClickHandler={props.drawerToggleClickHandler} />
        {props.sideDrawer}
        <TextWrapper>
          {/* <TopHeaderText>PROJECTS</TopHeaderText> */}
          <TopParaText>
            “SMALL ACTS, WHEN MULTIPLIED BY MILLIONS OF PEOPLE, CAN TRANSFORM
            THE WORLD.” — HOWARD ZINN
          </TopParaText>
        </TextWrapper>
      </TopImage>

      <OverallWrapper>
        <PostWrapper>
          <PostHeader>Christmas Benevolence Project </PostHeader>
          <PostParagraph>
          While Christmas is often seen as a time of joy, celebration, and abundance. For many underprivileged families, it is a stark reminder of their struggles and insufficiencies as they are reminded of their inability to put food on their tables.
          <br />
          <br />
          With constant inflation ravaging the country's and the world's economies, essential commodities like food have become increasingly inaccessible for those already living below the poverty line. The harsh reality is that as others celebrate, many families in underserved communities grapple with the despair of not being able to afford a basic meal.
          <br />
          <br />
          Understanding this profound need, we initiated the Christmas Benevolence Project—a charity effort aimed at bringing relief and joy to these families during the holiday season. Our mission is to assist and support the less privileged by providing food and other essential gifts, ensuring that no family is left behind during a time meant for togetherness and hope.
          <br />
          <br />
          <b>The 50/50 Campaign: A Tradition of Giving</b>
          <br />
          <br />
          The inaugural edition of the project, dubbed the "50/50 Campaign", took place in December 2020. Donors were encouraged to contribute up to $50, which went directly towards feeding 50 families with food supplies and COVID-19 sanitary products. Carefully selecting recipients from the Ikotun/Igando community based on socioeconomic vulnerability indicators, we hosted the event at our Educational Resource Centre in Ikotun. The initiative was a resounding success, reaching all 50 targeted beneficiaries and providing much-needed relief during an exceptionally challenging year.
          <br />
          <br />
          <b>A Continuing Mission</b>
          <br />
          <br />
          Building on the success of the inaugural 2020 edition, we continued the Christmas Benevolence Project in 2021, 2022, and 2023, expanding our reach and impact each year. Thanks to the generous support of donors and volunteers, we were able to assist more families annually, providing not only essential food supplies but also gifts that brightened the holiday season for many. Year after year, this initiative grew stronger, touching the lives of even more families who would have otherwise faced the despair of hunger during a season meant for joy.
          <br />
          <br />
          As we move forward, our goal is to make the 50/50 Christmas Benevolence Project a steadfast annual event, mirroring the importance of our other significant programs. We are committed to making this project a yearly intervention, with bigger goals to reach more than 50 families each holiday season. With the rising number of families slipping below the poverty line and grappling with hunger, our mission is to extend hope and ensure no family is left to face Christmas in despair.
          <br />
          <br />
          <b>Join Us in Making a Difference</b>
          <br />
          <br />
          We invite you to be a part of this meaningful initiative. Your support can help us continue to brighten the faces of families who need it the most. Whether through donations, volunteering, or spreading the word, every action contributes to making the Christmas season a time of hope and happiness for all.
          <br />
          <br />
          "The true spirit of Christmas is love shared in action."

          </PostParagraph>
        </PostWrapper>

        <MediaWrapper>
         
          <PostIframeWrapper>
            <PostIframe
              width="560" height="315"
              src="https://www.youtube.com/embed/KcDeWifTRWc?si=UdqqbClhMm_CNNI-"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen>
            </PostIframe>
          </PostIframeWrapper>
         <SingleImage>
            <PostImage src={`${Image1}`} />
            <i style={{ padding: "1rem 0", width: "95%" }}>
              Beneficiaries receiving the food items.
            </i>
          </SingleImage>
          <SingleImage>
            <PostImage src={`${Image2}`} />
            <i style={{ padding: "1rem 0", width: "95%" }}>
              A picture of food items for the beneficiaries.
            </i>
          </SingleImage>
        </MediaWrapper>
      </OverallWrapper>
    </div>
  );
};

export default ProjectChris;
