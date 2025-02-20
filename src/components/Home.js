import React from 'react';
import styled from 'styled-components';
import TopBackground2 from '../images/home/TopBackground2.JPG';
import {TopParaText} from './StyledComponents.js';
import Toolbar from './Toolbar/Toolbar.js';

const TopImage = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    background-position: top;
    background-repeat: no-repeat;
    background-image: url(${TopBackground2});
    background-size: cover;
    position: relative;
    display:-webkit-box;
    display:-webkit-flex;
    display:-ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    align-items: center;
    justify-content: flex-start;

        @media (max-width: 768px) {
            justify-content: space-between;
            height: 96vh;
        }
`
const TextWrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    // border: 1px solid white;
        @media (max-width: 768px) {
            height: 50%;
            margin-bottom: 5rem;
        }
`

const Home = (props) => {
    return(
        <div>
            <TopImage>
                <Toolbar drawerClickHandler={props.drawerToggleClickHandler} />
                {props.sideDrawer}
                <TextWrapper>
                    <TopParaText> 
                       EMPOWERING UNDERSERVED AFRICANS WITH QUALITY EDUCATION 
                    </TopParaText>                    
                </TextWrapper>
            </TopImage>
            <div className='main-body'>
    <section className="mission-section section-container">
        <div className="section-content-items">
            <div className="section-content-first-container">
                <div className="upper-content">
                    <div className="section-content-first-item-content section-heading">The state of education in Africa demands urgent intervention</div>
                    <div className="section-content-item-1-second-content">
                        <div className="content-heading">9 out of 10</div>
                        <div className="content-paratext">Children in Africa leave school without learning <br/> any basic digital skills according to UNDP</div>
                    </div>
                    <div className="section-content-first-container-img"></div>
                    </div>
                    
                </div>
                <div className="section-content-second-container">
                    <div className="second-container-upper-container">
                        <div className="second-container-first-img">
                            <div className="img-text">
                                <div className="upper-text">98 million</div>
                                <div className="lower-text mission-link">School-age children are out of school in Africa according to UNESCO</div>
                            </div>
                        </div>
                    </div>
                    <div className="second-content-container">
                        <img src="./assets/images/stats.png" alt="" className="second-first-image"/>
                        <div className="text-container mission-link">MIF reports that 89% of students in Africa do not have access to computers
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Programs section starts here --> */}
    <section className="programs-section section-container">
        <div className="programs-section-container">
            <div className="programs-section-container-heading section-heading">Our Core Interventions</div>
            <div className="programs-section-container-first-row-items">
            <div className="programs-section-container-first-row-items-1">
                    <div className="programs-section-container-first-row-items-second-image item-top-image"><img src="https://s2.svgbox.net/materialui.svg?ic=computer&color=000" width="82" height="82"/></div>
                    <div className="programs-section-container-first-row-items-first-text-heading text-heading">FREE <span className="heading-black-text">Digital Skills Training</span></div>
                    <div className="programs-section-container-first-row-items-first-text programs-section-container-paragraph-text">We equip underprivileged African students with high-demand digital skills, preparing them to excel in today’s competitive, tech-driven world.</div>
                </div>
                <div className="programs-section-container-first-row-items-1">
                    <div className="programs-section-container-first-row-items-first-image item-top-image"><img src="./assets/images/chalkboard-user.svg" alt="" width="82" height="82"/></div>
                    <div className="programs-section-container-first-row-items-first-text-heading text-heading">FREE <span className="heading-black-text">Daily Tutorials</span></div>
                    <div className="programs-section-container-first-row-items-first-text programs-section-container-paragraph-text">We offer FREE daily Mathematics and English tutorials, empowering students in underserved African communities with essential skills for academic excellence.</div>
                </div>
                <div className="programs-section-container-first-row-items-1">
                    <div className="programs-section-container-first-row-items-third-image item-top-image"><img src="https://s2.svgbox.net/hero-solid.svg?ic=library&color=000000" width="82" height="82"/></div>
                    <div className="programs-section-container-first-row-items-first-text-heading text-heading">FREE <span className="heading-black-text">Public Library</span></div>
                    <div className="programs-section-container-first-row-items-first-text programs-section-container-paragraph-text">We provide students in underserved African communities with free access to a well stocked library—a vital resource for learning and research.</div>
                </div>
                <div className="programs-section-container-first-row-items-1">
                    <div className="programs-section-container-second-row-items-first-image item-top-image"><img src="./assets/images/people-pulling.svg" alt="" width="82" height="82"/></div>
                    <div className="programs-section-container-second-row-items-first-text-heading text-heading">FREE <span className="heading-black-text">Mentorship Program</span></div>
                    <div className="programs-section-container-second-row-items-first-text programs-section-container-paragraph-text">We connect students with accomplished professionals for a transformative mentoring experience, empowering them to make well-informed decisions for a brighter future.</div>
                </div>
                <div className="programs-section-container-first-row-items-1">
                    <div className="programs-section-container-second-row-items-second-image item-top-image"><img src="./assets/images/people-carry-box.svg" alt="" width="82" height="82"/></div>
                    <div className="programs-section-container-second-row-items-first-text-heading text-heading">FREE <span className="heading-black-text">Career Enrichment</span></div>
                    <div className="programs-section-container-second-row-items-first-text programs-section-container-paragraph-text">We host FREE seminars and webinars, connecting students with diverse professionals to gain invaluable career guidance and inspiration.</div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Programs section ends here --> */}
     {/* <!-- Achievement section starts here --> */}
    <section className="achievement-secion section-container">
        <div className="programs-section-container">
            <div className="achievement-section-container">
                <div className="achievement-section-container-image"><img src="./assets/images/ProgramsImage.png" alt=""/></div>
                <div className="achievement-section-container-text">
                    <div className="achievement-section-container-text-heading section-heading">What have <br/>we done with <br/>your help?</div>
                    <div className="achievement-section-container-text-paragraph">
                         We’ve invested over <span className="red-text">$200,000</span> to bring more than 13 transformative projects to life, impacting over <span className="red-text">10,000 underprivileged people</span> across seven under-resourced African communities. In Lagos's largest community, home to over 2 million residents, we established a state-of-the-art <span className="red-text">educational resource center</span> that provides access to cutting-edge learning resources. In Jeida, a rural village near Abuja with a population of 1,600, we collaborated with other organizations to establish the <span className="red-text">first school,</span> creating new opportunities for children to thrive and pursue their dreams.
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Achievement section starts here --> */}
    {/* <!-- Testimonial starts here --> */}
    <section className="testimonial section-container">
        <div className="testimonial-container">
            <div className="programs-section-container">
                <div className="testimonial-section-container-heading section-heading">People have good things <br/>to say about us</div>
            </div>
            <div className="testimonial-section-container">
                <div className="testimonial-1">
                    <div className="testimonials programs-section-container">
                        <div className="testimonial-image-container">
                            <div className="testimonial-image testimonial-image-1"></div>
                        </div>
                        <div className="testimonial-content">
                            <div className="testimonial-heading">i never thought i'd have an 'a' in english</div>
                            <div className="testimonial-paragraph">
                                <div className="quote">
                                    <div id="quote"><img src="./assets/images/quote.png" alt=""/></div>
                                    <div className="quote-text">I struggled a lot with English and almost gave up because I wasn’t improving. But thanks to CAIN tutorials and my English tutor, I got my first A in English. I never thought I'd have an A in English.</div>
                                </div>
                                <div className="lower-para-text">
                                    <span className="testimonial-name">Adesanya Fawaz,</span> a student in <a href="https://www.cainafrica.org/#/projects/Project-CAINSP2017" target="_blank"><b>CAIN Africa’s Daily Tutorial Program,</b></a> struggled with poor English performance. His outlook seemed bleak, but with the dedicated support of his CAIN tutor, his grades improved—from an F to a D, then a C. In 2023, Fawaz earned his first A in English and is now one of the top-performing students in his class.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonial-2">
                    <div className="testimonials programs-section-container testimonial-2-media">
                        <div className="testimonial-content">
                            <div className="testimonial-heading">the kids are so smart</div>
                            <div className="testimonial-paragraph">
                                <div className="quote">
                                    <div id="quote"><img src="./assets/images/quote.png" alt=""/></div>
                                    <div className="quote-text">I was highly impressed by how smart the kids are, a testament to the amazing work the CAIN team is doing tirelessly. Exposing underserved kids to information and knowledge to help them dream beyond their immediate environment.</div>
                                </div>
                                <div className="lower-para-text"><span className="testimonial-name">Moyinoluwa Joseph,</span>  Country Lead, Optimus Digital Future and a volunteer during the 2024 edition of our <span className="red-text"><a href="https://www.cainafrica.org/#/projects/Akaeze-Summer-Program" target="_blank">Akaeze Summer Program</a></span> on Artificial Intelligence</div>
                            </div>
                        </div>
                        <div className="testimonial-image-container testimonial-middle-image">
                            <div className="testimonial-image testimonial-image-2"></div>
                        </div>
                    </div>
                </div>
                <div className="testimonial-3">
                    <div className="testimonials programs-section-container">
                        <div className="testimonial-image-container">
                            <div className="testimonial-image testimonial-image-3"></div>
                        </div>
                        <div className="testimonial-content">
                            <div className="testimonial-heading">i am very grateful to cain</div>
                            <div className="testimonial-paragraph">
                                <div className="quote">
                                    <div id="quote"><img src="./assets/images/quote.png" alt=""/></div>
                                    <div className="quote-text">I am very grateful to CAIN, I won’t stop saying it anywhere I go. My girl comes back home after every computer class and she tells me how she learns new things every day and still has the opportunity to operate a computer. </div>
                                </div>
                                <div className="lower-para-text"><span className="testimonial-name">Mrs. Ayeni,</span> the mother of Aishat, a student in the <span className="red-text"><a href="https://www.cainafrica.org/#/projects/ict4u" target="_blank">CAIN ICT4U Program,</a></span> couldn’t afford to enroll her daughter in graphic design classes or buy her a laptop. However, through the program, Aishat was able to access these opportunities for free.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </section>
    {/* <!-- Testimonial section ends --> */}
    {/* <!-- Impact section starts here --> */}
    <section className="impact section-container">
        <div className="programs-section-container">
            <div className="impact-container">
                <div className="impact-text-content">
                    <div className="impact-heading">
                        <div className="section-heading impact-section-heading">Over a decade of service, <br/>our impact in numbers
                        <div class="report-container">
                            <div class="notification">
                                    <img src="./assets/images/notification-icon.png"></img>
                            </div>
                            <div className="report">
                                <a href="/reports/CAIN 2024 Annual Report.pdf" download="CAIN 2024 Annual Report">Download the CAIN 2024 <br/> Annual Report <b>HERE</b></a>
                            </div>
                        </div>
                        </div>
                        <div className="impact-items">
                            {/* <!-- impact Row One --> */}
                            <div className="impact-item-first-row">
                                <div className="impact-item-1 impact-item impact-item">
                                    <div className="impact-number">
                                        <p className="impact-number-heading"><span id="accent"><img src="./assets/images/accent.png" alt=""/></span>10,000+ </p>
                                        <div className="impact-personnel">Beneficiaries</div>
                                    </div>
                                    <div className="impact-para-text">Over 10,000 lives transformed through our free educational programs, digital skill acquisition initiatives, and community development efforts.</div>
                                </div>
                                <div className="impact-item-2 impact-item">
                                    <div className="impact-number">
                                        <p className="impact-number-heading"><span id="accent"><img src="./assets/images/accent.png" alt=""/></span>10,000+ </p>
                                        <div className="impact-personnel">Volunteer hours</div>
                                    </div>
                                    <div className="impact-para-text">Dedicated to empowering underprivileged individuals in underserved African communities, transforming lives through selfless service.</div>
                                </div>
                            </div>
                            {/* <!-- Impact Row Two --> */}
                            <div className="impact-item-second-row">
                                <div className="impact-item-1 impact-item">
                                    <div className="impact-number">
                                        <p className="impact-number-heading"><span id="accent"><img src="./assets/images/accent.png" alt=""/></span>13+ </p>
                                        <div className="impact-personnel">Programs</div>
                                    </div>
                                    <div className="impact-para-text">These programs are centred on empowering and improving the quality of lives of people in underserved African communities.</div>
                                </div>
                                <div className=" impact-item2 impact-item">
                                    <div className="impact-number">
                                        <p className="impact-number-heading"><span id="accent"><img src="./assets/images/accent.png" alt=""/></span>7+ </p>
                                        <div className="impact-personnel">Communities</div>
                                    </div>
                                    <div className="impact-para-text">Over Seven Underserved African Communities have benefitted from our various empowerment interventions.</div>
                                </div>
                                <div className="impact-item-3 impact-item">
                                    <div className="impact-number"> 
                                        <p className="impact-number-heading"><span id="accent"><img src="./assets/images/accent.png" alt=""/></span>98%</p>
                                        <div className="impact-personnel">Satisfaction rate</div>
                                    </div>
                                    <div className="impact-para-text">Among our beneficiaries—students, families, and communities—reflecting the quality of our programs and the positive impact we've made through our interventions.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="impact-map"></div>
            </div>
        </div>
    </section>
    {/* <!-- Impact section ends here --> */}

    {/* <!--Gift section starts here  --> */}
    <section className="gift-section">
        <div className="gift-container programs-section-container">
            <div className="gift-content">
                <div className="gift-para-text">
                    Your gift ensures that <br/>underprivileged African <br/>students can access quality <br/>education
                </div>
                <div className="give-today-container">
                    <div className="donate-link">
                        <a href="https://www.cainafrica.org/#/donate" target="_blank">give today</a><span className="gift-arrow"><img src="https://s2.svgbox.net/hero-solid.svg?ic=chevron-right&color=fff" width="42" height="42" className="arrow"/></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Gift section ends here --> */}
     {/* <!-- News and Insights section --> */}
    <section className="news-and-insights section-container programs-section-container">
        <div className="news-and-insights-section-heading section-heading">News and Insights</div>
        <div className="news-section-row news-first-row-item">
            {/* <!-- <div className="first-row-items"></div> --> */}
            <div className="section-first-item section-item">
                <div className="media-container img-media-container-1"></div>
                <div className="news-content">
                    <div className="news-heading">CAIN Africa empowers underprivileged students with game-changing AI education.</div>
                    <div className="news-text">CAIN Educational Foundation takes bold steps in bridging the digital divide by empowering underprivileged students in underserved African communities with essential AI knowledge and skills.</div>
                    <div className="news-link"><a href="https://guardian.ng/features/cain-africa-empowers-underprivileged-students-with-game-changing-ai-education/" target="_blank">Read More</a></div>
                </div>
            </div>
            {/* <!-- Second item in the first row --> */}
            <div className="section-second-item section-item">
                <iframe
                    width="560" height="315"src="https://www.youtube.com/embed/udveCSO-6ys?si=J5F6DacwZPbUGusH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                </iframe>
                <div className="news-content">
                    <div className="news-text">Our Founder and CEO, <b>May Asagba</b> was the youngest panelist at the Women In Leadership Event co-hosted by <b>Dr. Okonjo Ngozi Iweala and Meghan Markle, the Duchess of Sussex.</b></div>
                    <div className="news-link"><a href="https://www.youtube.com/watch?v=udveCSO-6ys" target="_blank">Watch Now</a></div>
                </div>
            </div>
            {/* <!-- Third item in the first row --> */}
            <div className="section-third-item section-item">
                <iframe
                    width="560" height="315" src="https://www.youtube.com/embed/XE9BF76RCc4?si=FuFyQYG2k6Kx3-kJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                </iframe>
                <div className="news-content">
                    <div className="news-text"><b>May Asagba,</b> CEO/Founder CAIN Africa, shares with <b>Channels TV and BBC</b> the organization’s ongoing efforts to make quality education accessible in underserved communities.</div>
                    <div className="news-link"><a href="https://www.youtube.com/watch?v=XE9BF76RCc4" target="_blank">Watch Now</a></div>
                </div>
            </div>
        </div>
        {/* <!-- Second row --> */}
        <div className="news-section-row second-row">
            <div className="section-first-item section-item">
                <div className="media-container img-media-container-2"></div>
                <div className="news-content">
                    <div className="news-heading">CAIN Africa’s ICT4U: On a mission to empower 10,000 underprivileged students to lead a digital future</div>
                    <div className="news-text">As Sub-Saharan Africa heads toward a future where 230 million jobs will require digital skills by 2030 (UNDP), bridging the digital divide has become more urgent.</div>
                    <div className="news-link"><a href="https://www.vanguardngr.com/2024/10/cain-africas-ict4u-on-mission-to-empower-10000-underprivileged-students-to-lead-digital-future/" target="_blank">Read More</a></div>
                </div>
            </div>
            {/* <!-- Second item in the second row --> */}
            <div className="section-second-item section-item">
                <iframe className="media-container"
                    width="560" height="315" src="https://www.youtube.com/embed/nVgPYQ91_pA?si=9W3eIUMgYGbnILfS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                </iframe>
                <div className="news-content">
                    <div className="news-text">Our Founder and CEO, <b>May Asagba,</b> featured on <b>ACT Pod</b> to discuss how CAIN Africa is making a difference through quality education.</div>
                    <div className="news-link"><a href="https://youtu.be/nVgPYQ91_pA?si=wqTlnL5rCV2a_ktV" target="_blank">Watch Now</a></div>
                </div>
            </div>
            {/* <!-- Third item in the first row --> */}
            <div className="section-third-item section-item">
                <div className="media-container img-media-container-3"></div>
                <div className="news-content">
                    <div className="news-heading">Private sector to boost employability skills of 1000 youths</div>
                    <div className="news-text">Determined to help young people develop employability skills for the workplace, Metanoia Africa and CAIN Africa partnered with Jobberman to provide free soft skills training for 1000 young Africans.</div>
                    <div className="news-link"><a href="https://businessday.ng/news/article/private-sector-to-boost-employability-skills-of-1000-youths/" target="_blank">Read More</a></div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- PARTNERS SECTION --> */}
    <section className="partners-section section-container programs-section-container">
        <div className="section-heading partner-heading">Partners and Sponsors</div>
        <div className="partners-images">
            <div className="images-first-row">
                <img src="./assets/images/partners/Jobberman.png" alt="" className="partners-image-container"/>
                <img src="./assets/images/partners/Cornell University.jpg" alt="" className="partners-image-container"/>
                <img src="./assets/images/partners/LFB.png" alt="" className="partners-image-container"/>
                <img src="./assets/images/partners/Davis Project for Peace.png" alt="" className="partners-image-container"/>
                <img src="./assets/images/partners/Schoolinka.jpeg" alt="" className="partners-image-container"/>
            </div>
            <div className="images-second-row">
                <img src="./assets/images/partners/crossbonds.jpg" alt="" className="partners-image-container"/>
                <img src="./assets/images/partners/SandraDuke.png" alt="" className="partners-image-container"/>
                <img src="./assets/images/partners/Metanoia Africa.png" alt="" className="partners-image-container"/>
                <img src="./assets/images/partners/Optimus.png" alt="" className="partners-image-container"/>
                <img src="./assets/images/partners/Bookcraft-logo.png" alt="" className="partners-image-container"/>
            </div>
        </div>
    </section>
    </div>
        </div>
    )
}

export default Home;