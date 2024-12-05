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
  PostImage,
  MediaWrapper,
  SingleImage,
  PostIframe,
  PostIframeWrapper,
} from "./StyledComponents.js";
import projectsCover from "../images/ProjectsData/projects.jpg";
import Image1 from "../images/Akaeze/Akaeze Gallery.png.jpg";
import Image2 from "../images/Akaeze/A1.jpg";
import Image3 from "../images/Akaeze/A5.jpg";
import Image4 from "../images/Akaeze/ASP2.jpg";
import Image5 from "../images/Akaeze/A4.jpg";
import Image6 from "../images/Akaeze/ASP7.jpg";


const ProjectASRP2019 = (props) => {
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
          <PostHeader>Akaeze Summer Program</PostHeader>
          <PostParagraph>
            {" "}
            <i>
              “Reading is essential for those who seek to rise above the
              ordinary.” <strong>– Jim Rohn</strong>
            </i>
            <br />
            <br />
            In 2018, after countless interactions with the underprivileged students we serve, our Founder and CEO, Miss May Asagba, identified a critical gap in their ability to communicate effectively and confidently. Many students struggled to articulate their thoughts, both in writing and speech. This glaring issue inspired the launch of the Akaeze Summer Program—an innovative initiative aimed at closing communication gaps while equipping students with essential life skills.
            <br />
            <br />
            For four transformative weeks each summer, students immerse themselves in activities designed to sharpen their reading, writing, critical thinking, and communication abilities. The program is structured around three core objectives:
            <ol>
              <li><b>Enhance Communication Skills: </b>Through intensive reading, essay writing, and engaging discussions, students develop the tools to communicate clearly and confidently. We foster active listening, encourage them to express themselves coherently, and teach respectful discourse when faced with opposing views.</li>
              <li><b>Instill Social and Moral Values: </b>Each year, we select a book and theme that highlights pressing societal challenges, allowing students to gain more than academic knowledge. They explore critical topics such as diversity and inclusion, gender equality, and environmental responsibility, preparing them to become socially conscious global citizens.</li>
              <li><b>Develop Critical Thinking: </b>Group discussions and activities are designed to cultivate deep analytical thinking. Students are encouraged to examine different perspectives and articulate their ideas effectively, equipping them for future leadership roles.</li>
            </ol>
            <br />
            Our method is simple yet highly impactful. We choose a timely, relevant theme, select a book that aligns with this theme, and in recent years, have incorporated movie or documentary screenings to deepen understanding. These resources help students build vocabulary, enhance writing skills through essays, and participate in group debates and discussions that hone public speaking, critical thinking, and active listening skills. Embedded within the stories are moral values and life lessons that resonate with students long after the program ends.
            <br />
            <br />
            This hands-on, community-centered approach has been instrumental in empowering underprivileged youth, providing them with the communication and critical thinking skills necessary for academic success and beyond. The Akaeze Summer Program is a shining example of our commitment to bridging the educational gap, one student at a time.
            <br />
            <br />
            <hr></hr>
            <br />
            <b>Program Highlights Over the Years</b>
            <br /><br />
            The first edition of the program took place at the CAIN Educational Resource Centre from August 11 to September 8, 2018, where Chinua Achebe's Things Fall Apart was the book of choice. Discussions centered around gender roles, domestic violence, and toxic masculinity. Students left with a stronger sense of gender equality and awareness of the dangers of domestic abuse.
            <br /><br />
            Due to COVID-19 regulations, the program did not take place in 2020. However, the 2021 edition featured Buchi Emecheta’s Second Class Citizen, focusing on the issues of tribalism and racism. This thought-provoking program broadened students' perspectives on the harmful impacts of tribalism and racism and ways to foster unity.
            <br /><br />
            In 2023, the Akaeze Summer Program focused on climate change, a topic that remains not only globally relevant but also profoundly valuable for our students to understand. Climate change poses significant threats to the planet, and its impacts are being felt more strongly in underprivileged communities. The Boy Who Harnessed the Wind was the Movie of Choice while Global Warming - Horizons students’ Encyclopedia was the book of choice.
            <br /><br />
            The 2024 edition took a bold step into the future by focusing on Artificial Intelligence (AI), a topic that is rapidly reshaping the world as we know it. As the global economy becomes increasingly tech-driven, having AI skills is essential for staying competitive. This is especially critical for students in underserved areas, who, without intervention, risk being left behind due to a lack of resources and educational opportunities in this field.
            <br /><br />
            Recognizing the absence of an age-appropriate book to help teenagers grasp the complex concepts of AI, we innovatively created The AI Adventure, a guide specifically designed to simplify AI for young minds. This book now stands as CAIN’s first original product, a testament to our commitment to ensuring that no student is left behind in the fast-evolving digital world.
            <br /><br />
            Each year, the program includes fun activities and awards to recognize outstanding students in various categories, such as the “Quiz Whiz,” “Aspiring Novelist,” and “Star Student.” Students also receive school supplies, and their special requests for rewards, such as a lunch and movie outing, are often granted.
            <br /><br />
            <table className="asrp-table">
              <thead>
                  <tr>
                      <th>Year</th>
                      <th>Theme</th>
                      <th>Book of Choice</th>
                      <th>Movie of Choice</th>
                      <th>Number of Participants</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td data-label="Year">2018</td>
                      <td data-label="Theme">Gender Roles & Toxic Masculinity</td>
                      <td data-label="Book of Choice">Things Fall Apart by Chinua Achebe</td>
                      <td data-label="Movie of Choice">None</td>
                      <td data-label="Number of Participant">45</td>
                  </tr>
                  <tr>
                      <td data-label="Year">2019</td>
                      <td data-label="Theme">Feminism & Sexual Assault</td>
                      <td data-label="Book of Choice">Dear Ijeawele, or A Feminist Manifesto in Fifteen Suggestions by Chimamanda Ngozi Adichie</td>
                      <td data-label="Movie of Choice">N/A</td>
                      <td data-label="Number of Participant">50</td>
                  </tr>
                  <tr>
                      <td data-label="Year">2020</td>
                      <td data-label="Theme">N/A (Program halted due to COVID-19)</td>
                      <td data-label="Book of Choice">N/A</td>
                      <td data-label="Movie of Choice">N/A</td>
                      <td data-label="Number of Participant">N/A</td>
                  </tr>
                  <tr>
                      <td data-label="Year">2021</td>
                      <td data-label="Theme">Tribalism & Racism</td>
                      <td data-label="Book of Choice">Second Class Citizen by Buchi Emecheta</td>
                      <td data-label="Movie of Choice">N/A</td>
                      <td data-label="Number of Participant">55</td>
                  </tr>
                  <tr>
                      <td data-label="Year">2022</td>
                      <td data-label="Theme">Courage and Determination</td>
                      <td data-label="Book of Choice">The Old Man and the Sea by Ernest Hemingway</td>
                      <td data-label="Movie of Choice">Creed</td>
                      <td data-label="Number of Participant">50</td>
                  </tr>
                  <tr>
                      <td data-label="Year">2023</td>
                      <td data-label="Theme">Climate Change</td>
                      <td data-label="Book of Choice">Global Warming - Horizons Students’ Encyclopedia</td>
                      <td data-label="Movie of Choice">The Boy Who Harnessed the Wind</td>
                      <td data-label="Number of Participant">51</td>
                  </tr>
                  <tr>
                      <td data-label="Year">2024</td>
                      <td data-label="Theme">Artificial Intelligence</td>
                      <td data-label="Book of Choice">The AI Adventure by CAIN Africa</td>
                      <td data-label="Movie of Choice">i.Robot</td>
                      <td data-label="Number of Participant">50</td>
                  </tr>
              </tbody>
          </table>
          <br />
          The Akaeze Summer Program has become one of CAIN’s main annual programs, and it continues to be a vital tool in our efforts to educate the next generation and foster future leaders. With your support, we can expand this program and positively impact more students each year.

          </PostParagraph>
        </PostWrapper>

        <MediaWrapper>
          {/* <PostIframeWrapper>
                        <PostIframe  src="https://www.youtube.com/embed/ETBP3YoLt6o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;fullscreen"></PostIframe>
                    </PostIframeWrapper> */}
          <PostIframeWrapper>
            <PostIframe
              src="https://www.youtube.com/embed/nYdZY38L5OM?si=jkutEnqntd0K7PK4"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
            </PostIframe>
          </PostIframeWrapper>
          <SingleImage>
            <PostImage src={`${Image1}`} />
            <i style={{ padding: "1rem 0" }}>
              Students reading the Akaeze Summer Program 2024 Book titled "The AI Adventure."
            </i>
          </SingleImage>
          <SingleImage>
            <PostImage src={`${Image2}`} />
            <i style={{ padding: "1rem 0" }}>
              
            </i>
          </SingleImage>

          <SingleImage>
            <PostImage src={`${Image3}`} />
            <i style={{ padding: "1rem 0" }}>
              Students in a group discussion.
            </i>
          </SingleImage>

          <SingleImage>
            <PostImage src={`${Image4}`} />
            <i style={{ padding: "1rem 0" }}>
              Movie screening in one of the Akaeze Summer Program.
            </i>
          </SingleImage>

          <SingleImage>
            <PostImage src={`${Image5}`} />
            <i style={{ padding: "1rem 0" }}>
              Winners in the 2024 Akaeze Summer Program with the CEO.
            </i>
          </SingleImage>
          
          <SingleImage>
            <PostImage src={`${Image6}`} />
            <i style={{ padding: "1rem 0" }}>
            Students cleaning the street during the climate change program.
            </i>
          </SingleImage>

        </MediaWrapper>
      </OverallWrapper>
    </div>
  );
};


export default ProjectASRP2019;