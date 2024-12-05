import React from 'react';
import {TopImage, TextWrapper, TopParaText, OverallWrapper, PostWrapper, PostHeader, PostParagraph, PostImage, MediaWrapper, SingleImage} from './StyledComponents.js';
import CainIjegunClassroom from '../images/ProjectsData/CainIjegunClassroom.JPG';
import CainIjegunClassroomTeam from '../images/ProjectsData/CainIjegunClassroomTeam.JPG';
import Toolbar from './Toolbar/Toolbar.js';
import projectsCover from '../images/ProjectsData/projects.jpg';

const ProjectArise = (props) => {


    return(
        <div>
            <TopImage style={{backgroundImage: `url(${projectsCover})`, backgroundPosition:'center'}}>
                <Toolbar drawerClickHandler={props.drawerToggleClickHandler} />
                {props.sideDrawer}
                <TextWrapper>
                    <TopParaText>“SMALL ACTS, WHEN MULTIPLIED BY MILLIONS OF PEOPLE, CAN TRANSFORM THE WORLD.” — HOWARD ZINN</TopParaText>
                </TextWrapper>
            </TopImage>
            <OverallWrapper>
                <PostWrapper>
                    <PostHeader>ARISE (Allocating Resources to Improve School Experience) </PostHeader>
                    <PostParagraph>
                        Over 1,500 students at Ijegun Community Primary School 1 have had their learning experiences transformed by the ARISE project. The school has received about 200 textbooks in the major subjects of Mathematics and English. 
                        <br /><br />
                        CAIN Education Foundation has been successful in providing these students with a stronger foundation in both subjects. Because most standardized examinations measure students' capacity to solve problems analytically and communicate effectively, we have bridged the gap between students and their possibilities of obtaining greater academic goals.
                        <br /><br />
                        To improve the students' learning experiences and facilitate the teachers' teaching process, new whiteboards have been installed in all of the classrooms, together with the supply of board markers and board cleaners.
                        <br /><br />
                        In a similar vein, over 950 notebooks, 28 dozen pencils, and over 200 pencil erasers have been provided, much to the delight of these youngsters, their teachers, and their parents.
                        <br /><br />
                        When we arrived at the school, a school official pleaded with us to provide stationery for the students as many of them lacked these essential study tools. We gladly offered this assistance, and it was gratifying to see how taking notes improved the pupils' learning capacities.
                        <br /><br />
                        CAIN Education Foundation has taken things a step further in fostering positive changes in the community's educational system by establishing an Educational Resource Center in Ikotun. This will provide better educational opportunities to students around Ikotun-Ijegun.
                        <br /><br />
                    </PostParagraph>
                </PostWrapper>

                <MediaWrapper>
                    <SingleImage>
                        <PostImage src={`${CainIjegunClassroom}`} />
                        <i style={{padding: '1rem 0'}}>A classroom at  Ijegun Community Primary School 1</i>
                    </SingleImage>
                    
                    <SingleImage>
                        <PostImage src={`${CainIjegunClassroomTeam}`}/>
                        <i style={{padding: '1rem 0'}}>Members of our team with some school officials and students after donating whiteboards, stationery and books to Ijegun Community Primary School 1</i>
                    </SingleImage>

                </MediaWrapper>
            </OverallWrapper>
            
        </div>
    )
}

export default ProjectArise;
