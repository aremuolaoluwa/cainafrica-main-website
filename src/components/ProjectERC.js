import React from "react";
import {
  TopImage,
  TextWrapper,
  // TopHeaderText,
  TopParaText,
  OverallWrapper,
  DonateLink,
  SingleImage,
  PostImage,
  PostHeader,
  PostParagraph,
  PostWrapper,
  MediaWrapper,
  PostIframeWrapper,
  PostIframe,
} from "./StyledComponents.js";
import CAINERC1 from "../images/ProjectsData/CAINERC1.JPG";
import CAINERC2 from "../images/ERC/ICT.jpg";
import CAINERC3 from "../images/resource_center/CPL.jpg";
import CAINERC4 from "../images/ERC/F5.jpg";
import CAINERC5 from "../images/ERC/F6.jpg";
import Toolbar from "./Toolbar/Toolbar.js";
import projectsCover from "../images/ProjectsData/projects.jpg";

const ProjectERC = (props) => {
  let scrollToTop = () => {
    window.scrollTo({ top: 500, behavior: "smooth" });
  };

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
          <PostHeader>CAIN Educational Resource Center</PostHeader>

          <PostParagraph>
          <b>Background</b><br /><br />
          The idea of the CAIN Educational Resource Centre was born out of a pressing need to tackle inadequate access to quality education in underserved communities and bypass bureaucratic hurdles in the process. After much deliberation and expert analysis, we realized that a community-centred approach would offer the best solution. We decided to bring the resource directly into the neighborhoods where the need was greatest, ensuring that those who required it the most had direct access. Alimosho, the largest underserved community in Lagos and home to over 2 million residents, became the site of our Educational Resource Centre, a beacon of hope for underprivileged students striving for a brighter future.

            <br />
            <br />
            <b>Purchase and Renovation</b>
            <br /><br />

            In 2016, CAIN Educational Foundation successfully purchased the property for the CAIN Educational Resource Centre, thanks to grants from the Davis Projects for Peace and generous donations from Microsoft employees and individuals across the globe. This pivotal moment marked the beginning of our journey to provide accessible, quality education to underprivileged students.
            <br /><br />

            To transform the facility into a functional educational hub, we embarked on a full renovation, both internally and externally. We raised funds through Microsoft’s Benevity platform and from various passionate donors who believe in our mission. Additionally, we competed in a Clinton Global Initiative University fundraising competition, clinching third place and securing additional funding for the improvements. Today, the facility stands strong, but we are still working to fully secure it, with plans to enhance its features and help it reach its full potential.
            <br /><br />

            <b>Facility Impact</b>
            <br /><br />
            Since acquiring the property in 2016, the CAIN Educational Resource Centre has positively impacted over 1000 underprivileged students through our educational programs. The facility is more than just a building; it is a transformative space that hosts the following:
            <ul>
              <li><b>Classrooms:</b> Two classrooms serve as the site for our daily tutorials in English and Mathematics, equipping students with a strong foundation in these crucial subjects for academic success.</li>
              <li><b>Library:</b> Our library, stocked with a wealth of educational resources, provides a quiet space for students and individuals in the community to deepen their knowledge and expand their horizons.</li>
              <li><b>Seminar Room:</b> A dedicated space for staff deliberations, operations, and meetings, where we strategize ways to maximize our impact.</li>
              <li><b>Playground:</b> A vast recreational area where students can unwind, connect with their peers, and relax in a safe, nurturing environment.</li>
              <li><b>Digital Skills Lab:</b> The jewel of the facility, our digital skills lab is where we empower students with the critical tech skills they need to thrive in today’s world. By teaching the students various digital skills, we aim to equip them with the tools necessary to secure employment and excel in a competitive, tech-driven world.</li>
            </ul>
            <br />
            <b>Projections</b>
            <br /><br />
            While we’ve come a long way, there’s still much to be done. Our goal is to fully furnish the Educational Resource Centre and enable it to reach its full potential.
            <br /><br />
            <b>The digital skills lab</b> , for instance, requires more computers and gadgets to operate at full capacity. We estimate that $44,900 is needed to bring this vision to life. Learn more about our plans for the digital lab <a style={{color: "red"}} href="https://www.cainafrica.org/#/projects/ict4u">HERE.</a>
            <br />
            <b>Our library</b>, a cornerstone of intellectual growth, also needs more books and resources to accommodate the growing number of students seeking knowledge. We estimate that $26,380.30 is needed to accomplish this. Read more about our library initiative <a style={{color: "red"}} href="https://www.cainafrica.org/#/projects/project-library">HERE.</a>
            <br /><br />
            Additionally, we require the following to enhance the safety and functionality of the facility:
            <ul>
              <li><b>Solar inverter </b>to provide sustainable and cost-effective power – <b>$7778.6</b></li>
              <li><b>Starlink Internet installation </b>for fast and reliable internet - <b>$857.1</b></li>
              <li><b>Central CAIN Server </b>for centralized data storage - <b>$1071.4</b></li>
              <li><b>Air conditioning units </b>in all rooms to create a comfortable learning environment – <b>$1714.4</b></li>
              <li><b>Furniture</b>,  classroom chairs, reception, staff office etc - <b>$480.20</b></li>
            </ul>
            <br />
            <b>Join Us in Making a Difference</b>
            <br /><br />
            The time is now, and we need you to help us continue changing lives. This facility plays a crucial role in the lives of countless underprivileged students, providing them with the tools they need to rise above poverty and secure a brighter future. Your support can make a lasting impact on their journey toward self-reliance and success.
            
            <PostHeader onClick={scrollToTop}>
              {" "}
              <DonateLink style={{ color: "black" }} to="/donate">
                {" "}
                <strong>Click below to donate towards this project.</strong>
                <br />
                <br />
                <DonateLink style={{ color: "black" }} to="/donate">
                  <a href="donate.js" class="donate_button">
                    <span class="donate_button__text">Donate</span>
                  </a>
                </DonateLink>
              </DonateLink>{" "}
            </PostHeader>
          </PostParagraph>
        </PostWrapper>

        <MediaWrapper>
          <PostIframeWrapper>
            <PostIframe
              src="https://www.youtube.com/embed/QVSKpP0dfWA"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;fullscreen"
              frameBorder="0"
            ></PostIframe>
          </PostIframeWrapper>
          <SingleImage>
            <PostImage src={`${CAINERC1}`} />
            <i style={{ padding: "1rem 0" }}>
              Property purchased to serve as the Educational Resource Center.
            </i>
          </SingleImage>

          <SingleImage>
            <PostImage src={`${CAINERC2}`} />
            <i style={{ padding: "1rem 0" }}>
              {" "}
              Digital Skills Lab.
            </i>
          </SingleImage>
          <SingleImage>
            <PostImage src={`${CAINERC3}`} />
            <i style={{ padding: "1rem 0" }}>
              Current state of the Educational Resource Center after internal
              renovations and painting.
            </i>
          </SingleImage>
          <SingleImage>
            <PostImage src={`${CAINERC4}`} />
            <i style={{ padding: "1rem 0" }}>
              Interior view of the library.
            </i>
          </SingleImage>
          <SingleImage>
            <PostImage src={`${CAINERC5}`} />
            <i style={{ padding: "1rem 0" }}>
              The seminar room.
            </i>
          </SingleImage>
        </MediaWrapper>
      </OverallWrapper>
    </div>
  );
};

export default ProjectERC;
