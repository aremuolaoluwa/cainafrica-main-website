import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {TopImage, TextWrapper, TopHeaderText, TopParaText, Button, NavLink} from './StyledComponents.js';
import styled from 'styled-components';
import blog2 from '../images/blog/Blog2.JPG'
import Toolbar from './Toolbar/Toolbar.js';


const PostWrapper = styled.div`
    width: 100%;
    margin: 2rem auto;
`
const Posts = styled.div`
    margin: 2rem auto;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.15rem solid #d8aa35;
    border-radius: 1rem;
    padding: 3rem;

        @media (max-width: 768px) {
            padding: 1rem;
        }
`



const BlogPosts = (props) => {

    const [post, setPost] = useState([])

    useEffect(()=>{
        axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@cainafrica')
        .then(res =>{
            setPost(res.data.items.filter(item => item.categories.length > 0))
        })
        .catch(err => console.log(err));
    },[])

    const shortenText = (text,startingPoint ,maxLength) => {
        let retValue = text.length > maxLength?
        text.slice(startingPoint, maxLength):
        text
        return retValue;
    }


        return(
            <div>
                <TopImage style={{backgroundImage: `url(${blog2})`}}>
                    <Toolbar drawerClickHandler={props.drawerToggleClickHandler} />
                    {props.sideDrawer}
                    <TextWrapper>
                        <TopHeaderText>BLOG</TopHeaderText>
                        <TopParaText>"BE THE REASON SOMEONE BELIEVES IN THE GOOD OF PEOPLE" - KAREN SALMANSOHN</TopParaText>
                    </TextWrapper>
                </TopImage>
                <PostWrapper>
                    <Posts>
                        {post.map(post => (
                            <div key ={post.pubDate}>
                                <h2 dangerouslySetInnerHTML={{__html: post.title}} />
                                <div dangerouslySetInnerHTML={{__html: shortenText(post.content,0,1000)+'...'}} />
                                
                                <Button>
                                    <NavLink href={`${post.link}`} target="_blank">
                                        Read on Medium
                                    </NavLink>
                                </Button>
                            </div>
                        ))}
                    </Posts>
                </PostWrapper>
            </div>
        )    
}

export default BlogPosts;