import React from 'react'
import styled from 'styled-components'

function Jumbotron() {
    return (
     <ImgContainer>
     <HeaderText>Events & News</HeaderText>
     <HeaderSubtitle>Learn, Compete & Grow</HeaderSubtitle>
     </ImgContainer>
    )
}

export default Jumbotron

const ImgContainer=styled.div `
height: 245px;
padding-top: 73px;
padding-left: 65px;
box-sizing: border-box;
background-image: url(https://files.codingninjas.in/0000000000002471.png);
`

const HeaderText= styled.div `
margin: 0;
font-size: 60px;
color: #fff;
font-weight: 700;
`

const HeaderSubtitle=styled.div `
color: #fff;
font-size: 20px;
margin-top: 2px;
margin-left: 4px;
font-weight: 600;
`