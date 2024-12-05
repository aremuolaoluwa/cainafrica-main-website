import React from "react";
import Toolbar from "./Toolbar/Toolbar.js";
import styled from "styled-components";
import {
  TopImage,
  TextWrapper,
  TopParaText,
  Button,
  NavLink,
  OuterPaymentsDiv,
  IndividualPaymentsCard,
  DonateBodyImage,
  DonateCardTextWrapper,
  PayCardDiv,
} from "./StyledComponents.js";
import PayPal from "../images/PayPal.png";
import bank from "../images/Donate/bank-transfer.png";
import Benevity from "../images/Benevity.png";
// import AmazonSmile from "../images/AmazonSmile.png";
import Donate3 from "../images/Donate/DonateImg.jpg";
import DonateCover from "../images/Donate/DonateBanner.jpg";

const ContentImage = styled.div`
  margin: 0 auto;
  width: 60%;
  height: 107rem;
  background-image: url(${Donate3});
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  align-items: center;
  justify-content: center;
  //border: 1px solid black;
  @media (max-width: 768px) {
    display: none;
  }
`;

const DonateParent = (props) => {
  return (
    <div>
      <TopImage style={{ backgroundImage: `url(${DonateCover})` }}>
        <Toolbar drawerClickHandler={props.drawerToggleClickHandler} />
        {props.sideDrawer}
        <TextWrapper>
          <TopParaText>
            “GIVING IS NOT JUST ABOUT MAKING A DONATION. IT IS ABOUT MAKING A
            DIFFERENCE.” - KATHY CALVIN
          </TopParaText>
        </TextWrapper>
      </TopImage>

      <OuterPaymentsDiv>
        <PayCardDiv>
          <IndividualPaymentsCard>
            <DonateBodyImage src={PayPal} />
            <DonateCardTextWrapper>
              <h2>Donate online with PayPal</h2>
              <p>
                Please donate by clicking the button below that would link you
                to our PayPal account
              </p>
              <Button>
                <NavLink
                  href="https://www.paypal.com/donate?hosted_button_id=SGG2UVLMRTH56"
                  target="_blank"
                >
                  Donate
                </NavLink>
              </Button>
            </DonateCardTextWrapper>
          </IndividualPaymentsCard>

          <IndividualPaymentsCard>
            <DonateBodyImage src={Benevity} />
            <DonateCardTextWrapper>
              <h2>Donate through your employer</h2>
              <p>
              Double your donation by donating through your employer. Find "Catering to Africans In Need" in your Employer Workplace Giving and Matching Program powered by Benevity Inc.
              </p>
              <Button>
                <NavLink href="https://www.benevity.com/" target="_blank">
                  Find Us
                </NavLink>
              </Button>
            </DonateCardTextWrapper>
          </IndividualPaymentsCard>

          <IndividualPaymentsCard>
            <DonateBodyImage src={bank} />
            <DonateCardTextWrapper>
              <h2>Donate in Nigeria via bank transfer</h2>
              <p>
                Make a direct transfer to our Naira account using the following
                information:
              </p>
              <table>
                <tr>
                  <td>
                    <strong>Account Name</strong>
                  </td>
                  <td>CAIN Education Foundation</td>
                </tr>
                <tr>
                  <td>
                    <strong>Account Number</strong>
                  </td>
                  <td>1019225521</td>
                </tr>
                <tr>
                  <td>
                    <strong>Bank Name</strong>
                  </td>
                  <td>United Bank for Africa (UBA)</td>
                </tr>
              </table>
            </DonateCardTextWrapper>
          </IndividualPaymentsCard>

          {/* <IndividualPaymentsCard> */}
            {/* <DonateBodyImage src={AmazonSmile} /> */}
            {/* <DonateCardTextWrapper> */}
              {/* <h2>Give with Amazon Smile</h2> */}
              {/* <p>
                {" "}
                By clicking on this link, you add CAIN to a list of charitable
                organizations you support when you shop on Amazon. By doing so,
                Amazon will donate 0.5% of the price of your eligible
                AmazonSmile purchases to CAIN!
              </p> */}
              {/* <Button> */}
                {/* <NavLink */}
                  {/* // href="https://smile.amazon.com/ch/46-2424490" */}
                  {/* // target="_blank" */}
                {/* > */}
                  {/* Donate */}
                {/* </NavLink> */}
              {/* </Button> */}
            {/* </DonateCardTextWrapper> */}
          {/* </IndividualPaymentsCard> */}
        </PayCardDiv>

        <ContentImage></ContentImage>
      </OuterPaymentsDiv>
    </div>
  );
};

export default DonateParent;