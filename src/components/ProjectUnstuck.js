import React from 'react';
import {TopImage, TextWrapper, TopParaText, OverallWrapper, PostWrapper, PostHeader, PostParagraph, PostImage, MediaWrapper, SingleImage} from './StyledComponents.js';
import Unstuck_3 from '../images/Unstuck/Unstuck_3.jpg';
import Unstuck_2 from '../images/Unstuck/Unstuck_2.jpg';
import Unstuck_1 from "../images/Unstuck/Unstuck_1.png"
import Toolbar from './Toolbar/Toolbar.js';
import projectsCover from '../images/ProjectsData/projects.jpg';

const ProjectUnstuck = (props) => {


    return(
        <div>
            <TopImage style={{backgroundImage: `url(${projectsCover})`, backgroundPosition:'center'}}>
                <Toolbar drawerClickHandler={props.drawerToggleClickHandler} />
                {props.sideDrawer}
                <TextWrapper>
                    <TopParaText>“SMALL ACTS, WHEN MULTIPLIED BY MILLIONS OF PEOPLE, CAN TRANSFORM THE WORLD.” — HOWARD ZINN</TopParaText>
                </TextWrapper>
            </TopImage>
            <OverallWrapper>
                <PostWrapper>
                    <PostHeader>Unstuck Project - Empowering Young Tech Enthusiasts</PostHeader>
                    <PostParagraph> 
                        The Unstuck Project is dedicated to empowering motivated individuals in Nigeria by providing them with the essential tools and support to embark on a career in tech. We believe that technology is a powerful force for liberation and empowerment. Our sponsorship program offers recipients a laptop, a monthly stipend, internet connectivity, and mentorship for a year. By the end of the 12-month period, participants will have gained the skills and independence needed to pursue further education or new job opportunities.
                        <br /><br />
                        <b>Our Target</b>
                        <br /><br />

                        Our target group includes secondary school graduates awaiting university admission and university graduates awaiting their youth service. By providing them with the necessary resources, we aim to help them break free from the cycle of poverty and unlock their full potential. We believe in creating opportunities that empower individuals to shape their futures and contribute meaningfully to society.
                        <br /><br />

                        <b>Sustaining the Initiative</b>
                        <br /><br />
                        We rely on the generosity of well-meaning Nigerians at home and abroad to sustain this initiative. The Unstuck Project provides a platform for those in the diaspora to give back to their community through financial contributions and mentorship. 
                        <br /><br />

                        <b>Key Partnerships for Success</b>
                        <br /><br />
                        Key partnerships will be vital to the success of The Unstuck Project. We are collaborating with:
                        <ul>
                            <li><b>Laptop Manufacturers </b>for subsidized supplies.</li>
                            <li><b>Seasoned IT Specialists </b>for mentorship, ensuring participants receive expert guidance.</li>
                            <li><b>Volunteers </b>to maintain a transparent selection process.</li>
                            <li><b>Companies </b>offering opportunities to our graduates, providing a seamless transition into the workforce.</li>
                            <li><b>Educational Institutions </b>willing to accept our students for further studies, helping them advance their education.</li>
                            <li><b>Co-location Hubs </b>to offer distraction-free learning environments, ensuring our students have the best conditions for success.</li>
                        </ul>

                        <b>Paying It Forward</b>
                        <br /><br />
                        Participants are encouraged to give back by becoming donors and mentors themselves, ensuring the sustainability and continued impact of the program. This cycle of support and empowerment will help us build a robust community dedicated to lifting each other up.
                        <br /><br />

                        <b>Our Collaboration with iShareHope</b>
                        <br /><br />
                        In partnership with iShareHope, we will manage the donation platform and provide mentorship, while CAIN Africa will handle student recruitment and program navigation. This collaboration ensures that our participants receive comprehensive support, helping them to navigate the challenges of their journey and achieve their goals.
                        <br /><br />

                        Together, we are committed to empowering the youth of Nigeria, helping them break free from the cycle of poverty and achieve their full potential. Join us in making a lasting impact on the lives of many.
                       
                    </PostParagraph>
                </PostWrapper>

                <MediaWrapper>
                    <SingleImage>
                        <PostImage src={`${Unstuck_3}`} />
                        <i style={{padding: '1rem 0'}}>Proposed learning mode.</i>
                    </SingleImage>
                    
                    <SingleImage>
                        <PostImage src={`${Unstuck_2}`}/>
                        <i style={{padding: '1rem 0'}}>Proposed laptops for classes.</i>
                    </SingleImage>

                    <SingleImage>
                        <PostImage src={`${Unstuck_1}`}/>
                        <i style={{padding: '1rem 0'}}>A student learning web design.</i>
                    </SingleImage>

                </MediaWrapper>
            </OverallWrapper>
            
        </div>
    )
}

export default ProjectUnstuck;