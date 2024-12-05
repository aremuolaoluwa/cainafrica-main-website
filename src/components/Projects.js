import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Toolbar from './Toolbar/Toolbar.js';
import {TopImage, TextWrapper, TopParaText, OuterDiv, KeyDiv, IndividualCard,TextBodyWrapper,ButtonLink, PostLink, FilterButtonLeft, FilterButtonMid, FilterButtonRight, FilterWrapper } from './StyledComponents.js';
import ProjectData from './ProjectsData'; //Import Object data to loop over.
import projectsCover from '../images/ProjectsData/projects.jpg';
import NoProjects from '../images/ProjectsData/NoProjects.jpg'

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

const Projects = (props) => {

    const [data, setData] = useState([]);

    useEffect(()=>{
        All()
    },[])

    let All = () =>{
        setData(ProjectData)
    }   

    let Ongoing = () =>{
        let newData = []
        let noData = [{   
            index: 1,
            title: "There are no Ongoing Projects at this time",
            image: `${NoProjects}`,
            description: "There are no Ongoing Projects at this time",
            status: "Ongoing",
            link: "/projects"
        }]
        ProjectData.forEach( obj => {            
            if (obj.status === "Ongoing") {
                newData.push(obj)                
            }            
        }) 
        
        if(newData.length === 0){
            setData(noData)
        } else {            
            setData([...newData])
        }
    }

    let Completed = () =>{
        let newData = []
        ProjectData.forEach( obj => {            
            if (obj.status === "Completed") {
                newData.push(obj)                
            }            
        })                
        if(newData.length === 0){
            return 
        } else {
            setData([...newData])
        }        
    }

    let scrollToTop = () =>{
        window.scrollTo({top:500,behavior:'smooth'})
    }

    return(
        <div>
            <TopImage style={{backgroundImage: `url(${projectsCover})`, backgroundPosition:'center'}}>
            
                <Toolbar drawerClickHandler={props.drawerToggleClickHandler} />
                {props.sideDrawer}
                <TextWrapper style={{}}>
                    <TopParaText>“SMALL ACTS, WHEN MULTIPLIED BY MILLIONS OF PEOPLE, CAN TRANSFORM THE WORLD.”  —  HOWARD ZINN</TopParaText>
                    
                </TextWrapper>
            </TopImage>
            <FilterWrapper>
                <FilterButtonLeft onClick={All}> All Projects </FilterButtonLeft>
                <FilterButtonMid onClick={Ongoing}> Ongoing </FilterButtonMid>
                <FilterButtonRight onClick={Completed}> Completed </FilterButtonRight>
            </FilterWrapper>
            
            <OuterDiv>
                {data.map(project => (
                    <KeyDiv key={project.index}>
                        <IndividualCard>
                            <ProjectImage src={project.image}></ProjectImage>
                            <TextBodyWrapper>
                                
                                <h4 style={{margin: '1rem 0', height:'1rem'}}>{project.title}</h4>
                                
                                <p style={{margin: '1rem 0'}}>
                                    {project.description}
                                </p> 
                                <PostLink to={`${project.link}`}>
                                    <ButtonLink onClick={scrollToTop} >
                                        Read More
                                    </ButtonLink>
                                </PostLink>
                                
                            </TextBodyWrapper>
                        </IndividualCard>
                    </KeyDiv>

                    
                ))}
            </OuterDiv>
        </div>
    )
}

export default Projects;