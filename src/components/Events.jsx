import React from 'react'
import styled from 'styled-components';
import MainCard from './MainCard';
import { useState,useEffect } from 'react';

function Events() {

    const [state,setState]=useState({
        values:[
            {id:1,name:"All Events", req:"ALL_EVENTS",clicked:true,selectedImg:"/images/all-events-selected.svg",unselectedImg:'/images/all-events-unselected.svg'},
            {id:2,name:"Webinar", req:"WEBINAR", clicked:false,selectedImg:"/images/webinar-selected.svg",unselectedImg:'/images/webinar-unselected.svg'},
            {id:3,name:"Coding Events", req:"CODING_EVENT", clicked:false,selectedImg:"/images/coding-events-selected.svg",unselectedImg:'/images/coding-events-unselected.svg'},
            {id:4,name:"Bootcamp Events", req:"BOOTCAMP_EVENT",clicked:false,selectedImg:"/images/bootcamp_events_selected.png",unselectedImg:"/images/bootcamp_events_unselected.png"},
            {id:5,name:"Worshop", req:"WORKSHOP", clicked:false,selectedImg:"/images/workshop_selected.png",unselectedImg:'/images/workshop_unselected.png'}
        ],
        active: {
             option:"ALL_EVENTS", 
             subOption:"Upcoming" 
        },
        subCategory: [
            {id:1,name:"Upcoming",clicked:true},
            {id:2, name:"Archived",clicked:false},
            {id:3, name:"All Time Favorites",clicked:false}
        ]
    })

    const { values} = state;
    const { active } = state;
    const {subCategory}=state;

    function handleClick(a) {
        let newActive={...active};
        const newSub=subCategory.map(val=>{
            val.clicked=false;
            if(val.name==="Upcoming") val.clicked=true;
            return val;
        })
        const vals=values.map(val=>{
            val.clicked=false;
            if(val.id===a) {
            val.clicked=true;
            newActive.option=val.req;
            newActive.subOption="Upcoming";
            }
            return val;
        })
        const newState={values:vals,active:newActive,subCategory:newSub};
        setState(newState);
    }

    function handleSubClick(a) {
        let newActive={...active};
        const newSubCategory=subCategory.map(val=>{
            val.clicked=false;
            if(val.id===a) {
                val.clicked=true;
                newActive.subOption=val.name;
            }
            return val;
        });
        setState({values,subCategory:newSubCategory,active:newActive})
    }

    return (
        <Container>
            <Content>
                <MainCategory>
                    {
                    values.map(val=>
                    <Option key={val.id} active={val.clicked} onClick={()=>handleClick(val.id)}>
                         <img className='selected' src={val.selectedImg}/>
                        <img className='unselected' src={val.unselectedImg}/>
                        {val.name}
                    </Option>)
                    }
                </MainCategory>

                <SubCategory>
                    {
                        subCategory.map(value=>
                            <SubOptions key={value.id} active={value.clicked} onClick={()=>handleSubClick(value.id)}>
                                {value.name}
                            </SubOptions>)
                    }
                </SubCategory>
                <MainCard option={active.option} subOption={active.subOption}/>
            </Content>
        </Container>
    )
}

export default Events

const Container=styled.div `
padding: 70px 130px;
@media(max-width:1130px) {
    padding: 70px 60px;
}
background: white;
`
const Content=styled.div `
border: 1px solid #d0d0d0;
background: #fff;
border-radius: 6px;
`
const MainCategory=styled.div `
overflow-x: auto;
padding: 20px 18px;
display: flex;
`

const Option =styled.div `
font-size: 19px;
padding-right: 84px;
display: flex;
align-items: center;
justify-content: center;
font-weight: 400;
color: #9e9e9e;
cursor: pointer;
white-space: nowrap;
font-size: 19px;
.selected {
    display: none;
}
img {
    margin-right:8px;
    width: 20px;
}

${({ active})=>active && `
.selected {
    display: block;
}
.unselected {
    display: none;
}
color: #fa7328;
font-weight: 700;
`}
`

const SubCategory= styled.div `
overflow-x: auto;
background: #fafafa;
padding: 14px 24px;
margin-bottom: 34px;
border-top: 1px solid #e0e0e0;
border-bottom: 1px solid #e0e0e0;
display: flex;
`

const SubOptions=styled.div `
margin-right: 52px;
font-size: 17px;
font-weight: 400;
color: #9e9e9e;
cursor: pointer;
white-space: nowrap;
${({ active})=>active && `
color: #fa7328;
font-weight: 700;
`}
`