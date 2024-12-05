//THIS COMPONENT IS OBSOLETE. FOR REFERENCE ONLY -Daniel Ajadi

// import React from 'react';
// import  { Link } from "react-router-dom";
// import styled from 'styled-components';
// import CainWhiteLogo from '../images/CainWhiteLogo.png';

// const OuterDiv = styled.div`
//     width: 100%;
//     height: 8rem;
//     margin-top:1rem;
//     display: flex;
//     justify-content: space-between;
//     //justify-content: space-around;
//     align-items: center;
//         // @media (max-width: 768px) {
//         //     //height: 30rem;
//         //     width: 95%;
//         //     flex-direction: column;
//         // }

//         @media screen and (max-width:768px) {
//             height: 10rem;
//             width: 95%;
//             display: inline-block;
//             //flex-direction: column;
//         }
// `
// const NavBox = styled.nav`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 80%;
//     height: 5.2rem;
//     background-color:rgb(18,19,18);opacity:0.9;

//     position: relative;
//     :before {
//         content: '';
//         position: absolute;
//         bottom: 0;
//         left: 0;
//         border-bottom: 5.15rem solid #999;
//         border-right: 5.15rem solid transparent;
//         width: 0;
//     }

//     @media (max-width: 768px) {
//         height: 23rem; 
//         padding: 1rem;
//         margin: 0 auto;
//         flex-direction: column;
//     }
// `

// const Logo = styled.img`
//     width: 10rem;
//     margin: 0 3%;
    
//     //border: 1px solid white;
//         @media (max-width: 768px) {
//             padding: 0 6rem;
//         }
// `
// const NavDiv = styled.div`
//     display: flex;
//     justify-content: space-evenly;
//     width: 80%;
//     margin: 0 2rem;
//     @media (max-width: 768px) {
//         // height: 30rem;
//         margin: 0 auto;
//         flex-direction: column;
//     }
// `

// const NavLink = styled(Link)`
//     //border: 1px solid white;
//     text-align:center;
//     margin: auto;
//     width: 150px;
//     text-decoration: none;
//     color: white;
//     cursor:pointer;
//     display: block;
//         &:hover{
//             color: #d8aa35;
//             text-decoration: none;
//         }
        
//         @media (max-width: 768px) {
//             // height: 30rem;
//             padding: 1rem;
//             margin: 0 auto;
//             flex-direction: column;
//         }
// `

// const DropDownNavLink = styled(Link)`
//     //border: 1px solid white;
//     text-align:center;
//     margin: auto;
//     width: 150px;
//     text-decoration: none;
//     color: white;
//     display: block;
//         &:hover{
//             color: #d8aa35;
//             text-decoration: none;
//             width: 13rem;
//         }

        
//         @media (max-width: 768px) {
//             // height: 30rem;
//             padding: 1rem;
//             margin: 0 auto;
//             flex-direction: column;
//         }
// `

// const ButtonLink = styled(Link)`
//     border: 1px solid #d8aa35;
//     background-color: #d8aa35;
//     border-radius: 2rem;
//     cursor:pointer;
//     color:#ffffff;
//     padding: 0.5rem 1rem;
//     text-decoration:none;
//     text-align:center;
//     width: 10rem;
//         &:hover {
//             background-color:white;
//             border: 1px solid white;
//             color:#d8aa35;
//             text-decoration:none;
//         }
//         @media (max-width: 1170px) {
//             width: 7rem;
//         }
// `


// const Navbar = () => {

//     return( 
//         <OuterDiv>
//             <Logo src={CainWhiteLogo} alt="Cain logo"/>
//             <NavBox>
//                 <NavDiv>
//                     <NavLink to="/home">Home</NavLink>
//                     <NavLink to="/mission">Mission</NavLink>
//                     <NavLink to="/projects">Projects</NavLink>
//                     <div className="dropdown">
//                         <span className="dropbtn">Team</span>
//                         <div className="dropdown-content">
//                             <DropDownNavLink to="executiveboard" style={{padding:'1rem'}}>Executive Board</DropDownNavLink>
//                             <DropDownNavLink to="ourmembers" style={{padding:'1rem'}}>Members</DropDownNavLink>
//                             <DropDownNavLink to="beavolunteer" style={{padding:'1rem'}}>Join Our Team</DropDownNavLink>
//                         </div>
//                     </div>
//                     <NavLink to="/blog">Blog</NavLink>
//                     <NavLink to="/gallery">Gallery</NavLink>
//                 </NavDiv>
                
//                 <ButtonLink to="/donate">Donate Now</ButtonLink>                
//             </NavBox> 
//         </OuterDiv>       
//     )
// }

// export default Navbar;
