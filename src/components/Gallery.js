import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Toolbar from './Toolbar/Toolbar.js';
import {TopImage, TextWrapper, TopParaText, OuterDiv, KeyDiv, TextBodyWrapper,ButtonLink, PostLink } from './StyledComponents.js';
import GalleryData from './GalleryData'; //Import Object data to loop over.
import galleryCover from '../images/Gallery/coverphoto.jpg';

const ProjectImage = styled.img`
    margin:auto;
    border-radius: 0.8rem;
    width: 19rem;
    height: 14rem;
    @media (max-width: 320px) {
        margin: 0rem;
        width: 17rem;
        margin: 1rem auto;
    }
`
export const Card = styled.div`
    margin: auto;
    width: 19rem;
    background-color:white;
    padding: 1rem;
    border: 0.15rem solid #ff0000;
    border-radius: 1rem;
        @media (max-width: 320px) {
            width: 17rem;
            height: 38rem;
            margin: 1rem auto;
        }
`

const Gallery = (props) => {

    const [data, setData] = useState([]);

    useEffect(()=>{
        All()
    },[])

    let All = () =>{
        setData(GalleryData)
    }   

    let scrollToTop = () =>{
        window.scrollTo({top:500,behavior:'smooth'})
    }

    return(
        <div>
            <TopImage style={{backgroundImage: `url(${galleryCover})`, backgroundPosition:'center'}}>
            
                <Toolbar drawerClickHandler={props.drawerToggleClickHandler} />
                {props.sideDrawer}
                <TextWrapper style={{}}>
                    <TopParaText>“A KIND GESTURE CAN REACH A WOUND THAT ONLY COMPASSION CAN HEAL.” ― STEVE MARABOLI
                    </TopParaText>
                </TextWrapper>
            </TopImage>
            
            <OuterDiv>
                {data.map(project => (
                    <KeyDiv key={project.index}>
                        <Card>
                            <ProjectImage src={project.image}></ProjectImage>
                            <TextBodyWrapper>
                                
                                <h4 style={{margin: '1rem 0', height:'0.3rem'}}>{project.title}</h4>
                                
                                <p style={{margin: '1rem 0'}}>
                                    {project.description}
                                </p> 
                                <PostLink to={`${project.link}`}>
                                    <ButtonLink onClick={scrollToTop} >
                                       View 
                                    </ButtonLink>
                                </PostLink>
                                
                            </TextBodyWrapper>
                        </Card>
                    </KeyDiv>
                ))}
            </OuterDiv>
        </div>
    )
}

export default Gallery;