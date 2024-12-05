import React from 'react';
import Flippy, {FrontSide, BackSide} from 'react-flippy';
import {TopImage,TextWrapper, TopParaText, MemberMother, FlipContainerMember, Position, Bio, MrsGloria, MrKongs} from './StyledComponents.js';
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
                <FlipContainerMember>

                    <Flippy
                        // flipOnHover={true}
                        flipOnClick={true} 
                        flipDirection="horizontal"
                        // ref={(r) => this.flippy = r}
                        style={{ width: '22rem', margin: '1rem', height: '45rem', cursor: 'pointer', backgroundColor: 'white'}}>
                        
                        <FrontSide style={{display:'flex', flexDirection:'column', justifyContent:'space-between' }}>

                            <MrKongs> </MrKongs> 
                            <Position>
                                Mr. Setpak Kongs
                                <br/>
                                <i>Security Officer</i>
                            </Position>

                        </FrontSide>
                        
                        <BackSide style={{backgroundColor: '#ff0000', overflow: 'auto'}}>

                            <Bio>
                      
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

                            <MrsGloria> </MrsGloria> 
                            <Position>
                                Mrs. Gloria Udoh
                                <br/>
                                <i>Office Custodian</i>
                            </Position>

                        </FrontSide>
                        
                        <BackSide style={{backgroundColor: '#ff0000', overflow: 'auto'}}>

                            <Bio>
                            
                            </Bio>

                        </BackSide>
                    </Flippy>

                </FlipContainerMember>
            </MemberMother>
        </>
    )
}

export default OurMembers;