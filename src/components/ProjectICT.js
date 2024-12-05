import React from 'react';
import {TopImage, TextWrapper, TopParaText, OverallWrapper, PostWrapper, PostHeader, PostParagraph, PostImage, MediaWrapper, SingleImage} from './StyledComponents.js';
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
                    {/* <TopHeaderText>PROJECTS</TopHeaderText> */}
                    <TopParaText>“SMALL ACTS, WHEN MULTIPLIED BY MILLIONS OF PEOPLE, CAN TRANSFORM THE WORLD.” — HOWARD ZINN</TopParaText>
                </TextWrapper>
            </TopImage>
            <OverallWrapper>
                <PostWrapper>
                    <PostHeader>ICT4U (ICT for the Underprivileged)</PostHeader>
                    <PostParagraph>
                        By 2030, 230 million jobs in Sub-Saharan Africa will require digital skills. Shockingly, over 60% of African students currently lack basic digital training, and only 50% of African countries include 'computer' skills in their school curriculum. These alarming statistics highlight a significant digital skills shortage, necessitating urgent action. This led to the launch of the ICT4U Program by CAIN Africa, a groundbreaking initiative aimed at empowering underprivileged African students aged 10-18 with lucrative digital skills to compete in the global job market and escape the cycle of poverty.
                        <br /><br />
                        The ICT4U Program envisions a continent where all young people, regardless of socio-economic status, are digitally literate and skilled, ready for the workplace, and capable of competing globally. This initiative serves as a catalyst to lift families out of generational poverty.
                        <br /><br />
                        Located within the CAIN Educational Resource Center in Alimosho, the largest community in Lagos State, the CAIN ICT Center provides a safe and conducive learning environment for students. The center is fully air-conditioned and equipped with 24-hour solar-powered CCTV cameras.
                        <br /><br />
                        The program launched with funds we could generate through collaboration with key partners like Google and Microsoft, raising a total of $9,075, translating to 9,982,500 NGN using an average exchange rate of 1,100 NGN. These funds have been utilized for procurements and recruitments essential for the first nine months of operation, from April to December 2024.
                        <br /><br />
                        Equipment purchases include:
                        <ul>
                            <li>4 HP Victus 16GB/512GB Windows 11, NVIDIA Core i5 Laptops: 3,370,500 NGN</li>
                            <li>4 JBL Headphones with noise cancellation features: 72,100 NGN</li>
                            <li>1 Digital fireproof cabinet with compartments: 1,470,000 NGN</li>
                            <li>1 MTN 5G Internet router: 102,210 NGN</li>
                            <li>58” Smart television: 503,300 NGN</li>
                            <li>TV Guard and Movable whiteboard holder: 46,620 NGN</li>
                            <li>Installation of Inverter Afripower 1Kva 12V, Tubular Orbit 220ah 12V, Solar charge controller 60 amps MIV, 4 solar panels, and 1 battery rack: 980,000 NGN</li>
                            <li>Logistics and transportation: 18,700 NGN</li>
                        </ul>
                        <strong>The total equipment cost stands at 6,563,430 NGN. Please note that these numbers are subject to change as the project progresses, with the last update on 30th July 2024.</strong>
                        <br /><br />
                        We are still in the process of completing the furnishing of the ICT4U lab with all the necessary gadgets and software. We actively seek partners and donors to join us in this project. To enable the ICT Lab to function at full capacity, we need the following:
                        <ul>
                            <li>18 additional laptops and headsets: To increase our capacity to 22 laptops, ensuring personalized learning and maintaining the quality of tutorials.</li>
                            <li>Solar system to power the entire facility: Cost-efficient and climate-friendly, this would enable us to run at full capacity.</li>
                            <li>Starlink Internet installation: The fastest and most reliable internet broadband platform, ensuring steady connectivity for students.</li>
                            <li>Central CAIN Server: For centralized data storage, security, backup and recovery, network management, and compliance enforcement.</li>
                            <li>Learning management systems and edtech-based applications: To increase efficiency and encourage full digital operations within the facility.</li>
                        </ul>
                        Your support can make a significant difference in bridging the digital divide and providing underprivileged students with the skills they need for a brighter future.
                        <br /><br />
                    </PostParagraph>
                </PostWrapper>

                <MediaWrapper>
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