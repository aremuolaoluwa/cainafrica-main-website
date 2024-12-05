import React from "react";
import Toolbar from "./Toolbar/Toolbar.js";
import {
  TopImage,
  TextWrapper,
  // TopHeaderText,
  TopParaText,
  OverallWrapper,
  PostIframeWrapper,
  PostIframe,
  PostWrapper,
  PostHeader,
  PostParagraph,
  PostImage,
  MediaWrapper,
  SingleImage,
} from "./StyledComponents.js";
import projectsCover from "../images/ProjectsData/projects.jpg";
import newJeida01 from "../images/Jeida/BPC.jpg";
import newJeida02 from "../images/Jeida/Jeida5.jpg";
import newJeida03 from "../images/Jeida/Jeida1.jpg";

const ProjectBtG = (props) => {
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
          <PostHeader>Community Development For Jeida Village</PostHeader>
          <PostParagraph>
            Through our partnership with Crossbonds and The Presbyterian Church of Nigeria, we are facilitating development in Jeida. Our projects are focused on providing quality healthcare services, education, and clean water to the villagers. The project has achieved a lot in the past years, but it has also faced challenges that need to be addressed to ensure its sustainability.
            <br />
            <br />
            <b>Jeida Health Centre</b>
            <br />
            We established the Jeida Health Centre in 2016 to provide primary healthcare services to the villagers. Since its inception, the centre has safely delivered an average of 8 children yearly with 0 mortality rate.  This is a significant achievement for the centre, considering the high infant mortality rate in rural Nigeria. 
            The community health workers and nurses have been able to provide basic medical services to the villagers, even in the absence of a doctor.
            <br /><br />
            Challenges: The recent brain drain of doctors in Nigeria have a grievous consequence on our health sector and the rural areas suffer most from the blow. This, coupled with the lack of basic amenities such as electricity, water, and bad roads has made it difficult to attract a doctor to the health centre as a replacement for the one who relocated.
            <br />
            <br />
            <b>Jeida School</b>
            <br />
            Divine Wisdom Presbyterian School has been able to provide primary education to over 100 students in the village. They have recently expanded to providing secondary education which is a positive development for the community.
            <br />
            Challenges: The school lacks basic amenities such as a well-stocked library, playground, and computers, which are essential for quality education.
            <br />
            <br />
            <b>Poultry and Fish Farm</b>
            <br />
            The poultry and fish farm were established to finance the school and health centre projects. Until recently, the farm has been able to generate revenue to support the health and educational projects.
            <br />
            Challenges: The farm is currently facing difficulties due to a hike in animal feed prices and operational lapses. This has led to a significant reduction in funding for the health and educational projects.
            <br />
            <br />
           <b> Water Pump Project</b>
           <br />
            To provide access to a clean and decent water supply, we've dug a water pump and erected an overhead tank in the community. The water pump is functional and open to use.

            <br />
            <br />
            Our intervention in Jeida has brought about significant positive change in healthcare, education, and access to clean water for the villagers. The health centre has been a life-saving facility for mothers and children, and the school has been able to provide education to the children.
            <br />
            <br />
            However, the challenges faced by the health centre, school, and poultry and fish farm threaten the sustainability of the projects. We call on the general public, philanthropists, and relevant stakeholders to support the sustainability and development of these life-changing projects by investing in the health centre, providing resources to the school, and supporting the poultry and fish farm.
            <br /><br />
            Together, we can ensure that the health centre is fully equipped with qualified medical personnel, the school has adequate resources, and the poultry and fish farm thrives, thus ensuring a sustainable future for the community of Jeida.
            <br />
            <br />
          </PostParagraph>
        </PostWrapper>

        <MediaWrapper>
        <PostIframeWrapper>
            <PostIframe
              src="https://www.youtube.com/embed/O2BWLawlcfE?si=xJSrxzTBGvr5IKA9"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            ></PostIframe>
          </PostIframeWrapper>
          <SingleImage>
            <PostImage src={`${newJeida01}`} />
            <i style={{ padding: "1rem 0", width: "95%" }}>
              A nurse attending to a patient.
            </i>
          </SingleImage>
          <SingleImage>
            <PostImage src={`${newJeida02}`} />
            <i style={{ padding: "1rem 0", width: "95%" }}>
              Education materials provided to the students.
            </i>
          </SingleImage>
          <SingleImage>
            <PostImage src={`${newJeida03}`} />
            <i style={{ padding: "1rem 0", width: "95%" }}>
              A patient at the clinic.
            </i>
          </SingleImage>
        </MediaWrapper>
      </OverallWrapper>
    </div>
  );
};

export default ProjectBtG;
