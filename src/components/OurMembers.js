import React from 'react';
import Flippy, {FrontSide, BackSide} from 'react-flippy';
import {TopImage,TextWrapper, TopParaText, HeadingTwo, MemberMother, FlipContainerMember, Position, Bio, CEO, Joseph, Chinedu, Abisoye, Gbolahan} from './StyledComponents.js';
import Toolbar from './Toolbar/Toolbar.js';
import TeamCover from '../images/Our Team/TeamBanner.jpg';

function OurMembers(props) {

    return(
        <>
            <TopImage style={{backgroundImage: `url(${TeamCover})`}}>
                <Toolbar drawerClickHandler={props.drawerToggleClickHandler} />
                {props.sideDrawer}
                <TextWrapper>
                    <TopParaText>“REMEMBER, EACH ONE OF US HAS THE POWER TO CHANGE THE WORLD.” – YOKO ONO</TopParaText>
                </TextWrapper>
            </TopImage>

            <MemberMother>
                <HeadingTwo>Management Staff</HeadingTwo>
                <FlipContainerMember>

                    <Flippy
                        // flipOnHover={true}
                        flipOnClick={true} 
                        flipDirection="horizontal"
                        // ref={(r) => this.flippy = r}
                        style={{ width: '22rem', margin: '1rem', height: '45rem', cursor: 'pointer', backgroundColor: 'white'}}>
                        
                        <FrontSide style={{display:'flex', flexDirection:'column', justifyContent:'space-between' }}>

                            <CEO> </CEO> 
                            <Position>
                            Asagba May Oghenerukeme
                                <br/>
                                <i>Founder/CEO- African</i>
                            </Position>

                        </FrontSide>
                        
                        <BackSide style={{backgroundColor: '#ff0000', overflow: 'auto'}}>

                            <Bio>
                            May Asagba is a trailblazing social impact leader, renowned for her exceptional vision and over a decade of expertise in driving transformative development across underserved African communities. <br/> <br/>A recognized expert in project management, youth empowerment, community development, and educational equity, May's leadership is redefining the future of Africa's youth. At just 21, she founded CAIN AFRICA, a pioneering organization that has impacted over 10,000 lives, bringing sustainable change to some of the continent's most marginalized populations. <br/> <br/> Under her dynamic leadership, CAIN AFRICA launched a groundbreaking educational center in Lagos's largest underserved community and built the first primary school in a remote village, bridging critical gaps in education access. Through May’s ability to mobilize resources and rally global support, CAIN AFRICA has earned a reputation for excellence and innovation in sustainable development. <br/> <br/> Her expertise has made her a sought-after voice at prestigious regional consultations by UNESCO and UNICEF, advocating for quality education, youth empowerment, and digital transformation across Africa. Her visionary work has garnered recognition from global platforms like BBC News, TEDx, The Clinton Global Initiative, and The Guardian.<br/> <br/> A distinguished alumna of Cornell University, where she graduated with honors, May exemplifies servant leadership and is deeply committed to uplifting underserved African communities. Her tireless dedication to empowering others and driving systemic change is a testament to her legacy as a transformative leader with a profound and lasting global impact.
                            </Bio>

                        </BackSide>
                    </Flippy>

                    <Flippy
                        // flipOnHover={true}
                        flipOnClick={true} 
                        flipDirection="horizontal"
                        // ref={(r) => this.flippy = r}
                        style={{ width: '22rem', margin: '1rem', height: '45rem', cursor: 'pointer', backgroundColor: 'white'}}>
                        
                        <FrontSide style={{display:'flex', flexDirection:'column', justifyContent:'space-between' }}>

                            <Chinedu> </Chinedu> 
                            <Position>
                                Isagbah Chinedu Jesse
                                <br/>
                                <i>Programs Manager- African</i>
                            </Position>

                        </FrontSide>
                        
                        <BackSide style={{backgroundColor: '#ff0000', overflow: 'auto'}}>

                            <Bio>
                            Chinedu is a distinguished lawyer and development expert with a remarkable specialization in Education and Governance, possessing over a decade of experience in driving transformative social impact projects across two continents.
                            <br/> <br/> With a strong expertise in Project Management, Policy Formulation, and Monitoring & Evaluation, he has designed and executed high-impact programs that have significantly enhanced educational outcomes and opportunities for underprivileged youth. Chinedu’s leadership as a THEIRWORLD Global Youth Ambassador (2020-2023) saw him advocating passionately for Early Childhood Education, both in Nigeria and internationally. <br/> <br/> His dedication to advancing education also led to the founding of Education Conversations Africa, a pioneering platform fostering dialogue, innovation, and sustainable solutions to achieve SDG 4. <br/> <br/> A sought-after speaker at both local and global events, Chinedu brings an interdisciplinary approach to discussions on education, youth development, and societal impact. His unwavering commitment to advancing education and governance continues to inspire change, positioning him as a visionary force in the development sector.
                            </Bio>

                        </BackSide>
                    </Flippy>
                    <Flippy
                        // flipOnHover={true}
                        flipOnClick={true} 
                        flipDirection="horizontal"
                        // ref={(r) => this.flippy = r}
                        style={{ width: '22rem', margin: '1rem', height: '45rem', cursor: 'pointer', backgroundColor: 'white'}}>
                        
                        <FrontSide style={{display:'flex', flexDirection:'column', justifyContent:'space-between' }}>

                            <Gbolahan> </Gbolahan> 
                            <Position>
                                Adamolekun Gbolahan
                                <br/>
                                <i>Communications Manager- African</i>
                            </Position>

                        </FrontSide>
                        
                        <BackSide style={{backgroundColor: '#ff0000', overflow: 'auto'}}>

                            <Bio>
                            Gbolahan is a skilled Content Creator, Writer, and Communications professional whose mastery of storytelling brings CAIN Africa's mission to life. With a keen eye for detail and a talent for crafting narratives that resonate, he excels in capturing the organization’s impact in a way that engages and inspires. <br/> <br/> An accomplished author, Gbolahan published his first book, The Parrot, during his final year of university—a work so well-regarded that it was approved as a literary text for Junior Secondary schools by the Ekiti State Ministry of Education.<br/> <br/> His expertise spans both traditional and digital media, with a record of leading impactful communication campaigns that drive awareness and foster engagement with diverse stakeholders. Having completed extensive training in digital marketing, content creation, and social media management, he brings a comprehensive skill set to every project. <br/> <br/>Gbolahan’s commitment to creating positive change through powerful storytelling makes him an invaluable asset in the field of communications, amplifying messages that inspire progress and transformation.
                            </Bio>

                        </BackSide>
                    </Flippy>

                    <Flippy
                        // flipOnHover={true}
                        flipOnClick={true} 
                        flipDirection="horizontal"
                        // ref={(r) => this.flippy = r}
                        style={{ width: '22rem', margin: '1rem', height: '45rem', cursor: 'pointer', backgroundColor: 'white'}}>
                        
                        <FrontSide style={{display:'flex', flexDirection:'column', justifyContent:'space-between' }}>

                            <Abisoye> </Abisoye> 
                            <Position>
                                Olagbaiye Olagbaiye
                                <br/>
                                <i>Administrative Manager- African</i>
                            </Position>

                        </FrontSide>
                        
                        <BackSide style={{backgroundColor: '#ff0000', overflow: 'auto'}}>

                            <Bio>
                            Abisoye Olagbaiye is a highly skilled Administrative Manager and a distinguished graduate of the University of Lagos, where she earned a B.A. in History and Strategic Studies. At CAIN Africa, Abisoye ensures the seamless operation of the organization’s daily activities, overseeing orderliness, security, and the smooth execution of programs with exceptional attention to detail. <br/> <br/> Her extensive experience spans both the nonprofit and for-profit sectors, where she has honed expertise in team management, customer relations, and facility management. Recently, she excelled in the Young Women Leadership Accelerator Programme at LEAP Leadership Institute, demonstrating her strong leadership skills and unwavering commitment to continuous growth.<br/> <br/> Abisoye’s dedication to organizational excellence, paired with her passion for impactful administration, makes her an invaluable asset to CAIN Africa and a pivotal force in driving the organization’s mission forward.
                            </Bio>

                        </BackSide>
                    </Flippy>

                    <Flippy
                        // flipOnHover={true}
                        flipOnClick={true} 
                        flipDirection="horizontal"
                        // ref={(r) => this.flippy = r}
                        style={{ width: '22rem', margin: '1rem', height: '45rem', cursor: 'pointer', backgroundColor: 'white'}}>
                        
                        <FrontSide style={{display:'flex', flexDirection:'column', justifyContent:'space-between' }}>

                            <Joseph> </Joseph> 
                            <Position>
                                Aremu Joseph
                                <br/>
                                <i>Tech Education Lead- African</i>
                            </Position>

                        </FrontSide>
                        
                        <BackSide style={{backgroundColor: '#ff0000', overflow: 'auto'}}>

                            <Bio>
                            Joseph Aremu is a dynamic tech educator with a Bachelor’s degree in Computer Science Education from Tai Solarin University of Education. His deep-rooted passion for teaching and technology has shaped a career dedicated to empowering junior and senior secondary school students with vital digital skills. <br/> <br/>  With a wealth of experience in Nigeria’s tech industry, Joseph has held impactful roles at prominent organizations, including as an EdTech Fellow at Co-Creation Hub, a Technology Support Associate at Tech4Dev, and Chief Operating Officer at Exquitec Education Technology. Now serving as the Tech Education Lead at CAIN, Joseph is spearheading innovative initiatives to combat educational inequality in underserved communities, delivering transformative digital skills training to underprivileged students. His unwavering commitment to advancing digital literacy stands as a beacon of hope and progress for countless young learners, fostering a brighter, tech-enabled future.<br/> <br/> The diverse and exceptional academic and professional expertise of CAIN Africa’s board members and management team brings unparalleled clarity and precision to the execution of our initiatives. Our mission, especially in extending educational access to children from underprivileged backgrounds, is intrinsically aligned with our commitment to the ambitious objectives of United Nations Sustainable Development Goal 4.
                            <br/> <br/>Equipped with unmatched skills and unwavering dedication, our team is strategically positioned to address educational challenges across the African continent. For over a decade, a shared vision and steadfast commitment have been the pillars of our progress, fueling our journey to create lasting impact in the lives of thousands—and inspiring our continued pursuit of a brighter, more equitable future.
                            </Bio>
                        </BackSide>
                    </Flippy>

                </FlipContainerMember>
            </MemberMother>
        </>
    )
}

export default OurMembers;
