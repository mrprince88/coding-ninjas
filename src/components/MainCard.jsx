import React,{useState,useEffect} from 'react'
import CardStack from './CardStack';
import Tags from './Tags';
import styled from 'styled-components';
import axios from 'axios';
function MainCard(props) {

    const [state,setState]=useState([]);
    const [tagsForCards,setTags]=useState([]);

    useEffect(()=>{
        axios.get("https://api.codingninjas.com/api/v3/event_tags").
        then(res=>setState(res.data.data.tags))
    },[]);

    function handleTags(list) {
        setTags([...list])
    }
    return (
        <Container>
            <CardStack option={props.option} subOption= {props.subOption} tags={tagsForCards}/>
            <Tags tags={state} handleTags={handleTags}/>
        </Container>
    )
}

export default MainCard

const Container =styled.div `
display: grid;
margin: 24px;
grid-template-columns: 80% 20%;
`