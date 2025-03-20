import React from 'react';
import Toolbar from './Toolbar/Toolbar.js';
import {TopImage, TextWrapper, TopParaText, OverallWrapper, PostWrapper, PostHeader, PostParagraph, PostImage, MediaWrapper, SingleImage} from './StyledComponents.js';
import projectsCover from '../images/ProjectsData/projects.jpg';
import summerImage2 from "../images/Tutorial/DT5.jpg";
import Image1 from "../images/Tutorial/DT1.jpg"
import summerImage3 from "../images/Tutorial/DT4.jpg";


const ProjectSP2017 = (props) => {


    return(
        <div>
            <TopImage style={{backgroundImage: `url(${projectsCover})`, backgroundPosition:'center'}}>
                <Toolbar drawerClickHandler={props.drawerToggleClickHandler} />
                {props.sideDrawer}
                <TextWrapper>
                    {/* <TopHeaderText>PROJECTS</TopHeaderText> */}
                    <TopParaText>“SMALL ACTS, WHEN MULTIPLIED BY MILLIONS OF PEOPLE, CAN TRANSFORM THE WORLD.” — HOWARD ZINN</TopParaText>
                </TextWrapper>
            </TopImage>

            <OverallWrapper>
                <PostWrapper>
                    <PostHeader>CAIN Daily Tutorial Program</PostHeader>
                    <PostParagraph>

                    <strong>Why We Started</strong>
                    <br /><br />
                    Many children from low-income families in the Alimosho area face a severe gap in access to quality education. Public schools are often overcrowded and under-resourced, while private schools are simply unaffordable for most. Recognizing this, we launched the Daily Tutorial Program to bridge this gap by supplementing the school education system with high-quality tutorials in Mathematics and English.
                    <br /><br />
                    We carefully select, train, and equip qualified teachers who use creative and innovative methods such as audiovisual learning, language studios, and learning through play. These approaches, combined with their personal and professional experiences, have proven effective in fostering both academic growth and a love for learning.
                    <br /><br />
                    <strong>Free Resources for Every Student</strong>
                    <br /><br />
                    Our Daily Tutorial Program is <b>completely free,</b> with no financial burden placed on the students or their families. We go beyond just offering lessons to providing each student with the necessary supplies like notebooks, graph books, pens, and other stationery. This allows the students to focus entirely on learning, without worrying about anything else.
                    <br /><br />
                    1,920 beneficiaries have participated in our tutorials, benefiting significantly from this initiative. A shining example is Fawaz Asesanya, who went from failing English to becoming one of the top students in his class. With little hope left and a lack of confidence in his abilities, Fawaz was transformed by our expert training, mentorship, and personalized tutoring. His story is one of many, with several former students now attending universities and higher institutions, pursuing their dreams. Watch Fawaz’s story <a style={{color: "red"}} href='https://youtu.be/h4BBFvnuxmM?si=2KDCl2jUHAc7y0WS' target='_blank'>HERE.</a>
                    <br /><br />
                    <strong>Creating Bright Futures</strong>
                    <br /><br />
                    Our program serves a total of 120 students from J.S.S.1 to S.S.S.3, with 20 students in each class. Classes are held every Monday to Friday from 3:45 p.m. to 6 p.m., and Saturdays from 10 a.m. to 12:30 p.m. We also pay special attention to J.S.S.3 and S.S.S.3 students, helping them prepare for crucial external exams. Beyond academics, we also instill etiquette, good manners, and responsibility, nurturing well-rounded individuals who will grow up to be leaders in their communities.
                    <br /><br />
                    <strong>Sponsor a Child, Shape a Future</strong>
                    <br/><br />
                    For just <b>$320,</b> you can sponsor a child for a full year in our Daily Tutorial Program, providing them with the tools and support they need to excel. This amount covers a wide range of essential resources, including tech-forward classrooms, tutors' salaries, and educational materials. Beyond supporting one child, your contribution also helps us invest in durable furniture and equipment that will benefit not only the current 120 students but hundreds more in the future. Together, we can create lasting change and set these children on the path to success.
                    <br /><br />
                    The need is great, but with your help, we can continue to provide this life-changing initiative. Join us in our mission to make quality education accessible to every child.

                    </PostParagraph>                
                </PostWrapper>

                <MediaWrapper>
                {/* style={{paddingLeft:"1rem"}} */}
                    {/* <PostIframeWrapper>
                        <PostIframe  width="520" height="315" src="https://www.youtube.com/embed/pvpD_hIAqrY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;fullscreen"></PostIframe>
                    </PostIframeWrapper> */}
                    <SingleImage>
                        <PostImage src={`${Image1}`} />
                        <i style={{padding: '1rem 0'}}>
                            Students at the tutorial class.</i>
                    </SingleImage>
                    <SingleImage>
                        <PostImage src={`${summerImage3}`} />
                        <i style={{ padding: "1rem 0" }}>
                        Students taking instructions from their tutor.
                        </i>
                    </SingleImage>
                    <SingleImage>
                        <PostImage src={`${summerImage2}`} />
                        <i style={{ padding: "1rem 0" }}>
                        Students answering questions in one of the tutorial classes.
                        </i>
                    </SingleImage>
                </MediaWrapper>
            </OverallWrapper>
        </div>
    )
}

export default ProjectSP2017;
