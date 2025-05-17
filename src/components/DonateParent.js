import React from "react";
import Toolbar from "./Toolbar/Toolbar.js";
// import styled from "styled-components";
// import {
//   TopImage,
//   TextWrapper,
//   TopParaText,
//   Button,
//   NavLink,
//   OuterPaymentsDiv,
//   IndividualPaymentsCard,
//   DonateBodyImage,
//   DonateCardTextWrapper,
//   PayCardDiv,
// } from "./StyledComponents.js";
// import PayPal from "../images/PayPal.png";
// import bank from "../images/Donate/bank-transfer.png";
// import Benevity from "../images/Benevity.png";
// import AmazonSmile from "../images/AmazonSmile.png";
// import Donate3 from "../images/Donate/DonateImg.jpg";
// import DonateCover from "../images/Donate/DonateBanner.jpg";

// const ContentImage = styled.div`
//   margin: 0 auto;
//   width: 60%;
//   height: 107rem;
//   background-image: url(${Donate3});
//   background-position: right;
//   background-repeat: no-repeat;
//   background-size: cover;
//   position: relative;
//   align-items: center;
//   justify-content: center;
  //border: 1px solid black;
//   @media (max-width: 768px) {
    // display: none;
//   }
// `;

const DonateParent = (props) => {
  return (
    <div>
      {/* <TopImage style={{ backgroundImage: `url(${DonateCover})` }}> */}
        <Toolbar drawerClickHandler={props.drawerToggleClickHandler} />
        {props.sideDrawer}
        {/* <TextWrapper>
          <TopParaText>
            “GIVING IS NOT JUST ABOUT MAKING A DONATION. IT IS ABOUT MAKING A
            DIFFERENCE.” - KATHY CALVIN
          </TopParaText>
        </TextWrapper> */}
      {/* </TopImage> */}

      <div class="donate-image">
        <div class="donate-quote">
            empower underprivileged african children with your donation
        </div>
      </div>

        <aside class="section-container">
                <div class="left-container">
                    <div class="container-items">
                        <div class="container-heading">empower underprivileged african children with your donation</div>
                        <div class="container-wrap">
                            <p id="upper-text-content">According to UNESCO, over 98 million school-age children are
                                out of school in Africa. UNDP also reported that 9 out of 10
                                students in Africa leave school without learning any digital skill.
                            </p>
                            <p class="bullet-heading">
                                Here is how your donation can help:
                                <ul id="points">
                                    <li><b>$160</b> ensures that an underprivileged African child receives
                                        free daily tutorials for a year
                                    </li>
                                    <li><b>$330</b> ensures an underprivileged African child is empowered with lucrative digital skills</li>
                                    <li><b>$150</b> ensures that an underpriviledged student has FREE access to our library and its educational resources for a year</li>
                                </ul>
                            </p>
                            <p class="footer-text">Please don’t wait—give now to empower underprivileged African children with quality education and the skills they need to thrive.
                            </p>
                            <div class="donate-button">
                                <button class="donate-footer-btn" type="submit">
                                    <a href="https://www.paypal.com/donate?hosted_button_id=SGG2UVLMRTH56" target="_blank">donate today</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Form -->
                    <!-- <div class="donate-form">
                        <form class="donate-btns" action="">
                            <div class="first-row-btns">
                                <button class="onetime" type="submit">One-time</button>
                                <button class="monthly" type="submit">Monthly</button>
                            </div>
                            <div class="second-row-btns donat-bt row-btns">
                                <button class="first-item-sr" type="submit">$50</button>
                                <button class="second-item-sr" type="submit">$100</button>
                                <button class="third-item-sr">$200</button>
                            </div>
                            <div class="third-row-btns donat-bt row-btns">
                                <button class="first-item-tr" type="submit">$500</button>
                                <button class="second-item-tr">$1000</button>
                                <button class="third-item-tr">Other Amount</button>
                            </div>
                        </form>
                    </div> --> */}
                </div>
        </aside>

      <section id="giving">
        <div class="container section-container">
            <div class="section-items">
                <h1 class="section-heading giving-title" id="section-heading">Ways to Give</h1>
                {/* <!-- First row --> */}
                <div class="first-row row-items">
                    <div class="first-row-first-item row-item">
                        <div class="item-image benevity"></div>
                        <div class="item-content">
                            <span class="item-heading">Donate through Benevity
                            </span>
                            <p id="content-text">Match your donation by donating through
                                your employer. Find "Catering to Africans In
                                Need" in your Employer's Workplace Giving
                                and Matching Program powered by Benevity
                                Inc.
                            </p>
                            <a href="https://benevity.com/" target="_blank">
                                <button id="button">Find Us</button>
                            </a>
                        </div>
                    </div>
                    {/* <!-- <div class="second-row-second-item row-item">
                        <div class="item-image funds"></div>
                        <div class="item-content">
                            <span class="item-heading">Become a Fundraiser
                            </span>
                            <p id="content-text">Whether at your workplace, in social groups,
                                or through personal celebrations, every
                                dollar raised moves us closer to equipping
                                young minds with the tools for a brighter,
                                tech-enabled future. Ready to inspire
                                change?
                            </p>
                            <p>Send us an <a href="mailto:info@cainafrica.org">email</a> to get started</p>
                        </div>
                    </div> --> */}
                    {/* <!-- Second item --> */}
                    <div class="first-row-second-item row-item">
                        <div class="item-image paypal"></div>
                        <div class="item-content">
                            <span class="item-heading">Donate through PayPal
                            </span>
                            <p id="content-text">Please click the button below to donate.
                                You will be linked directly to our PayPal
                                account. 
                            </p>
                            <a href="https://www.paypal.com/donate?hosted_button_id=SGG2UVLMRTH56" target="_blank">
                                <button id="button">Donate Here</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* <!-- Second row --> */}
                <div class="second-row row-items">
                    <div class="second-row-first-item row-item">
                        <div class="item-image transfer"></div>
                        <div class="item-content">
                            <span class="item-heading">Bank Transfer (Nigeria)
                            </span>
                            <p id="content-text">
                                Donate into our Nigerian Bank Account by
                                transferring directly into our Naira account. 
                            </p>
                            <p><b>Account Name</b><br /><span>CAIN Educatonal and Medical Foundation</span></p>
                            <p><b>Account Number</b><br /><span>1019225521</span></p>
                            <p><b>Bank Name</b><br /><span>United Bank for Africa (UBA)</span></p>
                        </div>
                    </div>
                    {/* <!-- Second item second row --> */}
                    <div class="second-row-second-item row-item">
                        <div class="item-image funds"></div>
                        <div class="item-content">
                            <span class="item-heading">Become a Fundraiser
                            </span>
                            <p id="content-text">Whether at your workplace, in social groups,
                                or through personal celebrations, every
                                dollar raised moves us closer to equipping
                                young minds with the tools for a brighter,
                                tech-enabled future. Ready to inspire
                                change?
                            </p>
                            <p id="email-text">Send us an email at <a href="mailto:info@cainafrica.org">info@cainafrica.org</a> to get started.</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Third row --> */}
                <div class="third-row row-items">
                    <div class="third-row-first-item row-item">
                        <div class="item-image gift-will"></div>
                        <div class="item-content">
                            <span class="item-heading">Leave us a gift in your will
                            </span>
                            <p>
                                <b>U.S.A.: Catering to Africans In Need</b><br />
                                <b>Nigeria: CAIN Educational Foundation</b>
                            </p>
                            <p id="content-text">You can create a lasting legacy by including a
                                gift in your will to support our mission. This
                                powerful gesture ensures that, even long after
                                you are gone, you can continue to impact lives,
                                empowering underprivileged African students
                                with the education and digital skills they need
                                to build brighter futures.
                            </p>
                            <p style={{color: '#ff0000'}}>Be remembered for changing lives and
                                creating opportunities that endure.
                            </p>
                        </div>
                    </div>
                    {/* <!-- Second item second row --> */}
                    <div class="third-row-second-item row-item">
                        <div class="item-image legacy"></div>
                        <div class="item-content">
                            <span class="item-heading">Legacy Giving
                            </span>
                            <p id="content-text">Honor a loved one—or your own legacy—by
                                sponsoring a program or project named in
                                their/your honor. This meaningful gift will create
                                a lasting impact, providing underprivileged
                                African students with the education and digital
                                skills they need to thrive. By naming a program
                                after you/them, your/their legacy will live on.
                            </p>
                            <p id="email-text">Send us an email at <a href="mailto:info@cainafrica.org">info@cainafrica.org</a> to get started.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="donate-button">
            <button class="donate-footer-btn" type="submit">
                <a href="https://www.paypal.com/donate?hosted_button_id=SGG2UVLMRTH56" target="_blank">donate today</a>
            </button>
        </div>
    </section>

    </div>
  );
};

export default DonateParent;
