import React from 'react';
import {TopImage, TextWrapper, TopParaText, OverallWrapper, PostWrapper, PostIframe, PostIframeWrapper, PostHeader, PostParagraph, PostImage, MediaWrapper, SingleImage} from './StyledComponents.js';
import ICT4U1 from '../images/ICT4U/ICT4U_1.jpeg';
import ICT4U from '../images/ProjectsData/ICT4U.jpg';
import ICT43 from '../images/ICT4U/ICT4U_3.jpeg';
import Toolbar from './Toolbar/Toolbar.js';
import projectsCover from '../images/ProjectsData/projects.jpg';

const ProjectICT = (props) => {


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
                    <PostHeader>ICT4U (ICT for Underserved Students)</PostHeader>
                    <PostParagraph>
                        The International Finance Corporation reports that by 2030, 230 million jobs in Sub-Saharan Africa will require digital skills, yet 90% of children in Africa graduate without basic digital competencies, according to the UNDP. Adding to this crisis, MIF reports that 89% of African students lack access to computers and data shows that only half of African countries include computer skills in their school curriculums. These staggering statistics paint a grim picture of a rapidly expanding digital divide, particularly for underprivileged youth trapped in poverty. For Africa, home to the world’s youngest population, this digital skills deficit poses a critical barrier to economic mobility and global workforce readiness.
                        <br /><br />
                    This urgent digital skills gap has prompted CAIN Education Foundation to launch the ICT4U(ICT for Underserved Students) Program, a transformative         initiative focused on empowering underserved youth, particularly girls, aged 10-18, in the Alimosho community of Lagos State—the largest local government area in Lagos. This demography includes young people in school and out of school. <br /><br />
                        The ICT4U Program seeks to build a future where all African youth, regardless of socio-economic background, are equipped with the digital literacy and high-demand technical skills needed to thrive in the global job market. Special emphasis is placed on empowering girls to break barriers, close the gender gap in technology, and create equitable opportunities.  
                        <br /><br />
                        Located within the CAIN Educational Resource Center in Alimosho, the largest community in Lagos State, the CAIN ICT Center provides a safe and conducive learning environment for students. The center is fully air-conditioned and equipped with 24-hour solar-powered CCTV cameras.
                        <br /><br />
                        <strong style={{color: "red", fontSize: "1.5rem"}}>Current Status of the project</strong>
                        <br/><br/>
                        With the invaluable support of implementation partners at Google and Microsoft, we successfully raised $13,000 during the first round of fundraising in 2023 and an additional $9,075 in 2024. These funds enabled us to pilot the program at the ICT Lab of the CAIN Educational Resource Center in Alimosho, Lagos, Nigeria. Leveraging these resources, we procured the following essential items:
                        <br /><br />
                        Equipment purchases include:
                        <ul>
                            <li>17 workstation spaces for 16 students and 1 Instructor</li>
                            <li>3 DCP Fire extinguishers, 1 CO2 Fire extinguisher, 2 fireball extinguishers, 7 smoke detectors and an emergency exit door</li>
                            <li>Hiring of ICT Instructor, Cleaner and Security Guard</li>
                            <li>24 Channel CCTV Monitoring System</li>
                            <li>4 HP Victus 16GB/512GB Windows 11, NVIDIA Core i5 Laptops</li>
                            <li>4 JBL Headphones with noise cancellation features</li>
                            <li>1 Digital fireproof cabinet with compartments</li>
                            <li>1 MTN 5G Internet router</li>
                            <li>58” Smart television</li>
                            <li>TV Guard and Movable whiteboard holder</li>
                            <li>Installation of Inverter Afripower 1Kva 12V, Tubular Orbit 220ah 12V, Solar charge controller 60 amps MIV, 4 solar panels, and 1 battery rack</li>
                        </ul>
                        <strong>These purchases and hires have enabled us to run the program albeit below the planned capacity of 16 students per class and 48 students per cohort.</strong>
                        <br /><br />
                        We are still in the process of completing the furnishing of the ICT4U lab with all the necessary gadgets and software. We actively seek partners and donors to join us in this project. To enable the ICT Lab to function at full capacity, we need the following:
                        <ul>
                            <li>18 additional laptops and headsets: To increase our capacity to 22 laptops, ensuring personalized learning and maintaining the quality of tutorials.</li>
                            <li>Solar system to power the entire facility: Cost-efficient and climate-friendly, this would enable us to run at full capacity.</li>
                            <li>Starlink Internet installation: The fastest and most reliable internet broadband platform, ensuring steady connectivity for students.</li>
                            <li>Central CAIN Server: For centralized data storage, security, backup and recovery, network management, and compliance enforcement.</li>
                            <li>Learning management systems and Edtech-based applications: To increase efficiency and encourage full digital operations within the facility.</li>
                        </ul>
                        Your support can make a significant difference in bridging the digital divide and providing underprivileged students with the skills they need for a brighter future.
                        <br /><br />
                    </PostParagraph>
                </PostWrapper>

                <MediaWrapper>
                    <PostIframeWrapper>
                    <PostIframe
                    src="https://www.youtube.com/embed/bzFdTN9LXNM?si=ctjOqQHqF-eS3ibD"
                    title="YouTube video player"
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                    </PostIframe>
                </PostIframeWrapper>
                    <SingleImage>
                        <PostImage src={`${ICT4U1}`} />
                        <i style={{padding: '1rem 0'}}>Peer mentorship</i>
                    </SingleImage>
                    
                    <SingleImage>
                        <PostImage src={`${ICT4U}`}/>
                        <i style={{padding: '1rem 0'}}>Our laptops for classes.</i>
                    </SingleImage>

                    <SingleImage>
                        <PostImage src={`${ICT43}`}/>
                        <i style={{padding: '1rem 0'}}>Students learning in one of the ICT4U classes.</i>
                    </SingleImage>

                </MediaWrapper>
            </OverallWrapper>
            
        </div>
    )
}

export default ProjectICT;