// import coloredlogo from '../images/coloredlogo.png'
import JeidaClinic from '../images/Jeida/JeidaCoverPhoto.jpg';
import Akaeze from '../images/Akaeze/Akaeze Gallery.png.jpg';
import Christmas from "../images/christmas/IMG4.jpg";
import Library from "../images/Library/Lib1.jpg";
import Career from "../images/Career Enrichment/CEPCover.jpg";
import CAINTUT from "../images/Tutorial/DT3.jpg";
import FoodDrive from "../images/ProjectsData/FoodDriveCover.png";
import ICT from "../images/ProjectsData/ICT4UCover.jpg";
import ERC from "../images/resource_center/CPL.jpg";

const GalleryData = [
    {   
        index: 1,
        title: "ICT4U (ICT for the Underprivileged)",
        image: `${ICT}`,
        link: "/gallery/Ict"
    },
    {   
        index: 2,
        title: "Community Development For Jeida Village",
        image: `${JeidaClinic}`,
        link: "/gallery/Jeida-Clinic"
    },
    {   
        index: 3,
        title: "CAIN Daily Tutorial Program",
        image: `${CAINTUT}`,
        link: "/gallery/Tutorial"
    },
    {   
        index: 4,
        title: "Akaeze Summer Program",
        image: `${Akaeze}`,
        link: "/gallery/Akaeze-Summer-Program"
    },
    {
   		index: 5,
    	title: "Christmas Benevolence Project ",
    	image: `${Christmas}`,
    	link: "/gallery/Christmas",
    },
    {   
        index: 6,
        title: "The CAIN Library Initiative",
        image: `${Library}`,
        link: "/gallery/library"
    },
    {   
        index: 7,
        title: "Career Enrichment Program",
        image: `${Career}`,
        link: "/gallery/career"
    },
    {   
        index: 9,
        title: "Monthly Food Drive: Feeding the Underprivileged",
        image: `${FoodDrive}`,
        link: "/gallery/FoodDrive"
    },
    {   
        index: 10,
        title: "CAIN Educational Resource Center",
        image: `${ERC}`,
        link: "/gallery/ResourceCenter"
    },
]

export default GalleryData;