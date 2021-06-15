import React from 'react'
import styled from 'styled-components';
import {useState} from 'react';

export default function Tags(props) {
    const tags=props.tags;
    const [collapse,setCollapse]=useState(false);
    const [state,setState]=useState({boxes: Array(22).fill(false)});


    function expand(e) {
        e.target.style.display='none';
        setCollapse(true);
    }

    function handleClick(index) {
        let list = [];
        if(state.boxes[index]===false) list.push(tags[index]);
        setState(prevState=>({
            boxes: [
                ...prevState.boxes.slice(0,index),
                !prevState.boxes[index],
                ...prevState.boxes.slice(index+1)
            ]
        }));
        state.boxes.forEach((val,idx)=>{
            if(val===true && idx!==index) list.push(tags[idx])
        })
        console.log(list);
        props.handleTags(list);
    }

    return (
        <Container>
        {tags.length!==0 &&
        <>
            <Heading>TAGS</Heading>
            <TagList>
                {tags.slice(0,collapse===false ? 12:tags.length).map((tag,index)=>
                <Tag key={tag} active={state.boxes[index]} onClick={()=>handleClick(index)}>
                  {tag}
                </Tag>) }
            </TagList>
            <div onClick={expand}>See 10 more tags</div>
            </> }
        </Container>
    )
}


const Container= styled.div `
height: 100%;
width: 100%;
color: #fa7328;
font-weight: 600;
font-size: 14px;
cursor: pointer;

`

const Heading=styled.div `
font-weight: 700;
font-size: 16px;
color: #616161;
margin-bottom: 14px;
`

const TagList=styled.div `
display: flex;
flex-wrap: wrap;
`
const Tag=styled.div `
color: #424242;
font-size: 14px;
padding: 6px 12px;
font-weight: 400;
border-radius: 2px;
margin-right: 5px;
margin-bottom: 10px;
background: #eee;
cursor: pointer;
text-decoration: none;
${({ active})=>active && `
    color: #fff;
    background: #fa7328;
`}
`