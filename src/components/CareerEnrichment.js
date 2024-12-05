import React from "react";
import Toolbar from "./Toolbar/Toolbar.js";
import {
  TopImage,
  TextWrapper,
  TopParaText,
  OverallWrapper,
  PostWrapper,
  PostHeader,
  PostParagraph,
  PostIframeWrapper,
  PostIframe,
  PostImage,
  MediaWrapper,
  SingleImage,
} from "./StyledComponents.js";
import projectsCover from "../images/ProjectsData/projectsCover.jpeg";
import Image2 from "../images/Gallery/CAREER/B (3).jpg";
import Image3 from "../images/Career Enrichment/CE1.jpg";

const CareerEnrichmentProgram = (props) => {
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
          <TopParaText>
            “SMALL ACTS, WHEN MULTIPLIED BY MILLIONS OF PEOPLE, CAN TRANSFORM
            THE WORLD.” — HOWARD ZINN
          </TopParaText>
        </TextWrapper>
      </TopImage>

      <OverallWrapper>
        <PostWrapper>
          <PostHeader>Career Enrichment Program</PostHeader>
          <PostParagraph>
            {/* <i>
              “Reading is essential for those who seek to rise above the
              ordinary.” <strong>– Jim Rohn</strong>
            </i> */}
            The CAIN Career Enrichment Program is a <b>transformative initiative</b> designed to empower underprivileged students with the knowledge, skills, and guidance needed to make informed and strategic career decisions. Our mission is to ensure that these students not only dream beyond their current circumstances but also take actionable steps toward building <b>fulfilling and impactful careers.</b> In a world where access to career guidance is often limited for underserved communities, we strive to bridge that gap by connecting students with experienced professionals from diverse fields across the globe.
            <br /><br />
            Each month, we invite accomplished individuals from various professions to share their insights with our students. To date, we’ve hosted professionals from fields including Accounting, Medicine, Information & Communications Technology, Business Management, Oil & Gas, Agriculture, Engineering, and Education at the CAIN Educational Resource Centre. These experts hail from both local and international backgrounds, offering students a <b>global perspective on career opportunities</b> available both within Nigeria and abroad. During these interactive sessions, facilitators share their personal career journeys, the challenges they’ve overcome, and the strategies they’ve used to succeed, providing invaluable guidance on how students can navigate similar paths.
            <br /><br />
            The CAIN Career Enrichment Program goes beyond theoretical knowledge. Facilitators use <b>PowerPoint presentations, graphic illustrations, video livestreams, and engaging discussions</b> to provide practical advice on career planning, self-development, and navigating the professional world. Students learn about career guidance and counseling, the importance of aligning personal interests with the right career paths, and how to make strategic decisions that will influence both their education and future careers.
            <br /><br />
            In addition to career talks, students receive hands-on advice on <b>developing their strengths, identifying weaknesses, and building resilience</b> in the face of challenges. They are also introduced to effective networking strategies, learning how to leverage platforms like LinkedIn to seek out opportunities and grow their professional networks. The program emphasizes the importance of <b>lifelong learning and adaptability</b> in today’s rapidly evolving job market, ensuring students remain competitive.
            <br /><br />
            Since the program's inception, feedback from participants has shown a significant improvement in their understanding of career planning, with an average satisfaction rate of 81.4%. Many students have expressed that the program opened their eyes to <b>career paths they had never considered,</b> giving them a renewed sense of purpose and direction for their futures.
            <br /><br />
            We are committed to making the CAIN Career Enrichment Program a powerful platform where underprivileged students can access the <b>tools, inspiration, and networks</b> they need to pursue rewarding careers. By doing so, we aim to break the cycle of poverty and unemployment in their communities, empowering these students to become leaders in their fields and agents of change.<br/><br/>
          </PostParagraph>
        </PostWrapper>

        <MediaWrapper>
          <PostIframeWrapper>
            <PostIframe
            iframe width="560" height="315" src="https://www.youtube.com/embed/7Q4KF9a1L2U?si=jEak13YZR_j4dJzR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </PostIframe>
          </PostIframeWrapper>
          {/* <SingleImage>
            <PostImage src={`${Image1}`} /> */}
          {/* <i style={{ padding: "1rem 0" }}>
              Ongoing discussion at the Akaeze summer program
            </i> */}
          {/* </SingleImage> */}
          <SingleImage>
            <PostImage src={`${Image2}`} />
            <i style={{ padding: "1rem 0" }}>
              Students and facilitators at the Career Enrichment Program.
            </i>
          </SingleImage>
          <SingleImage>
            <PostImage src={`${Image3}`} />
            <i style={{ padding: "1rem 0" }}>
              A student asking a question in the Program.
            </i>
          </SingleImage>
        </MediaWrapper>
      </OverallWrapper>
    </div>
  );
};

export default CareerEnrichmentProgram;
