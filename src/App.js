import React, {useState} from 'react';
import  {Switch, Route, HashRouter} from "react-router-dom";
import './App.css';

//Displayed components
import Home from './components/Home';
import WhoWeAre from './components/WhoWeAre';
import Projects from './components/Projects';
import MeetTheTeam from './components/ExecutiveTeam';
import EduStaff from './components/edustaff.js';
import SupportStaff from './components/support-staff.js';
import OurMembers from './components/OurMembers';
import Volunteer from './components/Volunteer';
import BlogPosts from './components/Blog';
import Demo4 from './components/Gallery';
import Footer from './components/Footer';
import ProjectArise from './components/ProjectArise';
import ProjectBtG from './components/ProjectBtG';
import ProjectERC from './components/ProjectERC';
import ProjectSP2017 from './components/ProjectSP2017';
import ProjectASRP2019 from './components/ProjectASRP2019';
import ProjectChristmas from "./components/ProjectChris";
import ProjectLibrary from "./components/ProjectLibrary.js"
import ProjectFD from './components/ProjectFD.js';
import ProjectICT from './components/ProjectICT.js';
import PartnersSponsors from "./components/partners-sponsors";
import GalleryAkaeze from "./components/GalleryAkaeze";
import GalleryJeida from "./components/GalleryJeida";
import GalleryChristmas from "./components/GalleryChristmas";
import GalleryTutorial from "./components/GalleryTutorial";
import GalleryLibrary from "./components/GalleryLibrary";
import GalleryCareer from "./components/GalleryCareer";
import GalleryFoodDrive from "./components/GalleryFoodDrive";
import GalleryIct from "./components/GalleryIct";
import GalleryUnstuck from "./components/GalleryUnstuck";
import GalleryResourceCenter from "./components/GalleryResourceCenter";
import ProjectUnstuck from './components/ProjectUnstuck.js';
import CareerEnrichment from './components/CareerEnrichment.js';
import Newsletter from './components/Newsletter.js';
import NewsletterSuccess from './components/NewsletterSuccess.js';

import DonateParent from './components/DonateParent';

import SideDrawer from './components/SideDrawer/SideDrawer.js';



const App = () => {

  const [state, setState] = useState({sideDrawerOpen: false})  

  let drawerToggleClickHandler = () => {
    setState((prevState) => {
      return{sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  };

  let closeBackDropClickHandler = () => {
    setState({sideDrawerOpen: false})
  }
  
  let sideDrawer;

  if(state.sideDrawerOpen){
    sideDrawer = <SideDrawer closeDrawer={closeBackDropClickHandler}/>
  }
  
  
  return (
    <div style={{height: "100%"}}>
      
      <HashRouter>
        <Switch>
          <Route 
            path='/home' 
            render = {(props)=> <Home {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer} />}
          />
          <Route 
            path='/who-we-are' 
            render = {(props)=> <WhoWeAre {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route 
            path='/projects/project-arise' 
            render = {(props)=> <ProjectArise {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route 
            path='/projects/Project-BtG' 
            render = {(props)=> <ProjectBtG {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route 
            path='/projects/Project-CAINERC' 
            render = {(props)=> <ProjectERC {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route 
            path='/projects/Project-CAINSP2017' 
            render = {(props)=> <ProjectSP2017 {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route 
            path='/projects/Akaeze-Summer-Program' 
            render = {(props)=> <ProjectASRP2019 {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route 
            path='/projects/career-enrichment-program' 
            render = {(props)=> <CareerEnrichment {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route 
            path='/projects/project-library' 
            render = {(props)=> <ProjectLibrary {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route 
            path='/projects/monthly-food-drive' 
            render = {(props)=> <ProjectFD {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route 
            path='/projects/ict4u' 
            render = {(props)=> <ProjectICT {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route 
            path='/projects/unstuck' 
            render = {(props)=> <ProjectUnstuck {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route
            path="/projects/Christmas-Benevolence-Project"
            render={(props) => (
              <ProjectChristmas
                {...props}
                drawerToggleClickHandler={drawerToggleClickHandler}
                sideDrawer={sideDrawer}
              />
            )}
          />
          <Route 
            path='/gallery/Akaeze-Summer-Program' 
            exact
            render = {(props)=> <GalleryAkaeze {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer} />}
          />
          <Route 
            path='/gallery/Jeida-Clinic' 
            exact
            render = {(props)=> <GalleryJeida {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer} />}
          />
          <Route 
            path='/gallery/library' 
            exact
            render = {(props)=> <GalleryLibrary {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer} />}
          />
          <Route 
            path='/gallery/Christmas' 
            exact
            render = {(props)=> <GalleryChristmas {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer} />}
          />
          <Route 
            path='/gallery/Tutorial' 
            exact
            render = {(props)=> <GalleryTutorial {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer} />}
          />
         <Route 
            path='/gallery/career' 
            exact
            render = {(props)=> <GalleryCareer {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer} />}
          />
          <Route 
            path='/gallery/Ict' 
            exact
            render = {(props)=> <GalleryIct {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer} />}
          />
          <Route 
            path='/gallery/Unstuck' 
            exact
            render = {(props)=> <GalleryUnstuck {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer} />}
          />
          <Route 
            path='/gallery/FoodDrive' 
            exact
            render = {(props)=> <GalleryFoodDrive {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer} />}
          />
          <Route 
            path='/gallery/ResourceCenter' 
            exact
            render = {(props)=> <GalleryResourceCenter {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer} />}
          />
          <Route 
            path='/projects' 
            render = {(props)=> <Projects {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route 
            path='/executiveboard' 
            render = {(props)=> <MeetTheTeam {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
            exact
          />
          <Route 
            path='/ourmembers' 
            render = {(props)=> <OurMembers {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route 
            path='/edustaff' 
            render = {(props)=> <EduStaff {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route 
            path='/supportstaff' 
            render = {(props)=> <SupportStaff {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route 
            path='/beavolunteer' 
            render = {(props)=> <Volunteer {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route 
            path='/blog' 
            render = {(props)=> <BlogPosts {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route 
            path='/gallery' 
            render = {(props)=> <Demo4 {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route 
            path='/donate' 
            render = {(props)=> <DonateParent {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
           <Route 
            path='/newsletter'
            render = {(props)=> <Newsletter {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
           <Route 
            path='/confirmation'
            render = {(props)=> <NewsletterSuccess {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route
            path="/partners-sponsors"
            render={(props) => (
              <PartnersSponsors
                {...props}
                drawerToggleClickHandler={drawerToggleClickHandler}
                sideDrawer={sideDrawer}
              />
            )}
          /> 
          <Route path='/' 
            render = {(props)=> <Home {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
        </Switch>
        <Footer />
      </HashRouter>
    </div>
  );
}
export default App;
