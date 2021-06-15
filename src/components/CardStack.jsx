import React from 'react'
import Card from './Card';
import styled from 'styled-components';
import axios from 'axios';
import Pagination from './Pagination'
import{useState,useEffect} from 'react';

function CardStack(props) {

    const [state,setState]=useState([]);
    const [page,setPage]=useState(0);

    useEffect(()=>{
        setPage(0);
    },[props])

    useEffect(()=> {
        axios.get("https://api.codingninjas.com/api/v3/events",
            {params: {
            event_category:props.option,
            event_sub_category:props.subOption,
            tag_list:props.tags.toString(),
            offset:page*20
        }})
        .then(res=>setState(res.data.data));
    },[props,page]);
    
    const {events,page_count} =state;

    function handlePageChange(val) {
        setPage(val);
        console.log(val);
        window.scrollTo({
        top: 0,
        });
    }

    return (
        <MainContainer>
        {events && <>
        <Container>
            {events.map(event=><Card key={event.id} type={props.subOption} data={event}/>)}
        </Container>
       {events.length!==0 && <Pagination pageCount={page_count} currentPage={page} handlePageChange={handlePageChange}/> }
       {events.length==0 && <Message>No Events Found</Message>}
        </> }
        </MainContainer>
    )
}

export default CardStack

const Container=styled.div `
display: grid;
grid-template-columns: 50% 50%;

@media(max-width: 850px) {
    grid-template-columns: 1fr;
}
`

const MainContainer=styled.div `
`

const Message=styled.p `
    font-weight: 100;
    text-align: center;
    font-size: 60px;
    margin-top: 162px;
`