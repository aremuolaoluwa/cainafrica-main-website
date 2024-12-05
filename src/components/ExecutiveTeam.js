import React from 'react';
import Toolbar from './Toolbar/Toolbar.js';
import Flippy, {FrontSide, BackSide} from 'react-flippy';
import {TopImage, TextWrapper, TopParaText, ExecutiveMother, FlipContainer, HeadingTwo, President, VP, PublicityChair, Peace, Mandy, Position, Bio} from './StyledComponents.js';
import TeamCover from '../images/Our Team/TeamBanner.jpg';

const MeetTheTeam = (props) => {

    return(
        <>
            <TopImage style={{backgroundImage: `url(${TeamCover})`}}>
                <Toolbar drawerClickHandler={props.drawerToggleClickHandler} />
                {props.sideDrawer}
                <TextWrapper>
                    <TopParaText>“REMEMBER, EACH ONE OF US HAS THE POWER TO CHANGE THE WORLD.” – YOKO ONO</TopParaText>
                </TextWrapper>
            </TopImage>

            <ExecutiveMother>
                <HeadingTwo>Board of Trustees</HeadingTwo>
                <FlipContainer> 

                    <Flippy
                        // flipOnHover={true} // default false
                        flipOnClick={true} // default false
                        flipDirection="horizontal" // horizontal or vertical
                        // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                        // if you pass isFlipped prop component will be controlled component.
                        // and other props, which will go to div
                        style={{ width: '22rem', margin: '1rem', height: '45rem', cursor: 'pointer'}} /// these are optional style, it is not necessary
                        >
                        <FrontSide style={{display:'flex', flexDirection:'column', justifyContent:'space-between' }} >                            
                            
                            <President> </President>
                            
                            <Position>
                                Asagba May Oghenerukeme
                                <br/>
                                <i>Trustee/Secretary - African</i>
                            </Position>
                            
                        </FrontSide>
                        <BackSide style={{backgroundColor: '#ff0000', overflow: 'auto'}} >
                            
                            <Bio>
                            May Asagba is a trailblazing social impact leader, renowned for her exceptional vision and over a decade of expertise in driving transformative development across underserved African communities. <br/> <br/> A recognized expert in project management, youth empowerment, community development, and educational equity, May's leadership is redefining the future of Africa's youth. At just 21, she founded CAIN AFRICA, a pioneering organization that has impacted over 10,000 lives, bringing sustainable change to some of the continent's most marginalized populations.
                            <br/> <br/> Under her dynamic leadership, CAIN AFRICA launched a groundbreaking educational center in Lagos's largest underserved community and built the first primary school in a remote village, bridging critical gaps in education access. Through May’s ability to mobilize resources and rally global support, CAIN AFRICA has earned a reputation for excellence and innovation in sustainable development. <br/> <br/> Her expertise has made her a sought-after voice at prestigious regional consultations by UNESCO and UNICEF, advocating for quality education, youth empowerment, and digital transformation across Africa. Her visionary work has garnered recognition from global platforms like BBC News, TEDx, The Clinton Global Initiative, and The Guardian. <br/><br/> A distinguished alumna of Cornell University, where she graduated with honors, May exemplifies servant leadership and is deeply committed to uplifting underserved African communities. Her tireless dedication to empowering others and driving systemic change is a testament to her legacy as a transformative leader with a profound and lasting global impact.
                            </Bio>

                        </BackSide>

                    </Flippy>

                    <Flippy
                        // flipOnHover={true}
                        flipOnClick={true} 
                        flipDirection="horizontal"
                        // ref={(r) => this.flippy = r}
                        style={{ width: '22rem', margin: '1rem', height: '45rem', cursor: 'pointer' }}>
                        <FrontSide style={{display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
                            
                            <VP> </VP>

                            <Position>
                                Lasebikan Olatomiwa Daniel
                                <br/>
                                <i>Trustee/Chair - African</i>
                            </Position>

                        </FrontSide>
                        <BackSide style={{backgroundColor: '#ff0000', overflow: 'auto'}}>
                            
                            <Bio>
                            Lasebikan Olatomiwa Daniel is a highly accomplished tech leader with a Bachelor’s degree in Computer Science and Mathematics from Fisk University. With over a decade of experience in the tech industry, he has contributed to both Fortune 100 companies and dynamic startups. <br/> <br/> Tomiwa’s career includes a significant tenure as a Software Engineer at Microsoft, where he honed his technical expertise for over four years. Following this, he co-founded Helicarrier (formerly Buycoins), a groundbreaking startup focused on building cryptocurrency infrastructure in Africa.  <br/> <br/> Currently, he serves as the Head of Product at Gandalf, another innovative startup. Tomiwa is deeply passionate about the transformative power of education, particularly in overcoming challenges faced by African youth. Recognizing the vital role education plays in building Africa’s economy and talent, he advocates for leveraging technology, alongside a deep understanding of local contexts, to drive meaningful change. His insights and expertise are instrumental in shaping and enhancing CAIN Africa’s tech education programs, ensuring they have a lasting, positive impact. 
                            </Bio>

                        </BackSide>
                    </Flippy>                  

                    <Flippy
                        // flipOnHover={true}
                        flipOnClick={true} 
                        flipDirection="horizontal"
                        // ref={(r) => this.flippy = r}
                        style={{ width: '22rem', margin: '1rem', height: '45rem', cursor: 'pointer' }}>
                        
                        <FrontSide style={{display:'flex', flexDirection:'column', justifyContent:'space-between' }}>

                            <PublicityChair> </PublicityChair> 
                            <Position>
                                Isibor Daisy Dumebi
                                <br/>
                                <i>Trustee - African</i>
                            </Position>

                        </FrontSide>
                        
                        <BackSide style={{backgroundColor: '#ff0000', overflow: 'auto'}}>

                            <Bio>
                            Daisy is a seasoned leader with over 12 years of experience building transformative projects across the technology, nonprofit, business, and education sectors. Her impressive career includes six years at Microsoft, where she excelled as a Senior Software Engineer, and her impactful tenure as a Technical Program Manager at Meta. <br/> <br/>Currently, Daisy is the founder of Keneesse Consulting, where she delivers expert coaching and consulting services in areas such as career development, software engineering, product and program management, education, and research and development. Passionate about empowering the next generation, Daisy channels her dedication to youth development through her work at CAIN and Keneesse Consulting, creating pathways for brighter futures and lasting impact.
                            </Bio>

                        </BackSide>
                    </Flippy>

                    <Flippy
                        // flipOnHover={true}
                        flipOnClick={true} 
                        flipDirection="horizontal"
                        // ref={(r) => this.flippy = r}
                        style={{ width: '22rem', margin: '1rem', height: '45rem', cursor: 'pointer' }}>
                        
                        <FrontSide style={{display:'flex', flexDirection:'column', justifyContent:'space-between' }}>

                            <Peace> </Peace> 
                            <Position>
                                Odiase Peace Oghosa
                                <br/>
                                <i>Trustee - African</i>
                            </Position>

                        </FrontSide>
                        
                        <BackSide style={{backgroundColor: '#ff0000', overflow: 'auto'}}>

                            <Bio>
                            Peace is a visionary data strategist with a talent for transforming raw information into powerful insights that drive impactful decisions. With a deep expertise in statistical analysis and data modeling, she excels at unraveling complex datasets to reveal critical trends, patterns, and opportunities, empowering organizations to make data-driven choices. <br/> <br/>Her career spans multiple industries, where she has refined the ability to translate technical findings into clear, actionable insights that resonate with stakeholders across all organizational levels. <br/> <br/> As the CEO and Co-founder of Osaze, a pioneering tech startup, Peace champions small-scale fashion designers in Nigeria, connecting them with a global market and fostering economic growth. <br/> <br/> Featured on NPR, she has shared her inspiring vision to alleviate the struggles of underserved communities across Nigeria and Africa through strategic partnerships and economic empowerment. Driven by purpose and an unwavering commitment to progress, Peace stands as a dynamic force for positive change.
                            </Bio>

                        </BackSide>
                    </Flippy>

                    <Flippy
                        // flipOnHover={true}
                        flipOnClick={true} 
                        flipDirection="horizontal"
                        // ref={(r) => this.flippy = r}
                        style={{ width: '22rem', margin: '1rem', height: '45rem', cursor: 'pointer' }}>
                        
                        <FrontSide style={{display:'flex', flexDirection:'column', justifyContent:'space-between' }}>

                            <Mandy> </Mandy> 
                            <Position>
                            Asagba Ego Justina Amanda
                                <br/>
                                <i>Trustee - African</i>
                            </Position>

                        </FrontSide>
                        
                        <BackSide style={{backgroundColor: '#ff0000', overflow: 'auto'}}>

                            <Bio>
                            Mrs. Ego Amanda Asagba is a distinguished legal luminary with over three decades of impactful service in the legal profession. Called to the Nigerian Bar in 1989, she has dedicated her career to upholding justice and pioneering excellence within the field.
                            <br/> <br/>In 2001, she established her own law firm, which has since gained a stellar reputation for its unwavering commitment to justice and integrity. As the current President of the African Women Lawyers Association (AWLA), Mrs. Asagba is a powerful advocate for women’s rights and empowerment across the continent. Her visionary leadership in AWLA has driven significant strides in advancing gender equality and ensuring legal support for women in need, making her a formidable force for social change.<br/> <br/> Throughout her career, she has taken bold and courageous steps to secure justice for the underprivileged and marginalized, demonstrating an unyielding dedication to serving the voiceless, often in the face of formidable challenges.
                            </Bio>

                        </BackSide>
                    </Flippy>

                </FlipContainer>
                
            </ExecutiveMother>

        </>
    )
}

export default MeetTheTeam;
