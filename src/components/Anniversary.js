import React from 'react';
import styled from 'styled-components';
import TopBackground2 from '../images/home/TopBackground2.JPG';
import { TopHeaderText, TopParaText } from './StyledComponents.js';
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

const Anniversary = (props) => {
    return(
        <div>
            <TopImage>
                <Toolbar drawerClickHandler={props.drawerToggleClickHandler} />
                {props.sideDrawer}
                <TextWrapper>
                    <TopHeaderText>10th Year Anniversary</TopHeaderText>
                    <TopParaText>Celebrating a decade of immense impact</TopParaText>                
                </TextWrapper>
                
            </TopImage>
            
        </div>
    )
}

export default Anniversary;
