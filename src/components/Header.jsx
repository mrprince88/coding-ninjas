import React from 'react'
import styled from 'styled-components'

function Header() {
    return(
        <Navbar>
            <Logo>
                <img src='/images/CNLOGO.svg'/>
            </Logo>
                <NavItem>
                    <a>Home</a>
                </NavItem>
                <NavItem>
                    <a>Courses</a>
                </NavItem>
                <NavItem>
                    <a>Practice</a>
                </NavItem>
                <NavItem>
                    <a>Events</a>
                </NavItem>
                <NavItem>
                    <a>Campus Ninja</a>
                </NavItem>
                <NavItem>
                    <a>Blog</a>
                </NavItem>
            <CareerCampus>
                <img src='/images/second.svg'/>
            </CareerCampus>

            <Profile>
                <ClassRoom>
                    <a>My Classroom</a>
                </ClassRoom>
                <Login>Login</Login>
            </Profile>
        </Navbar>
    )
}

export default Header


const Navbar=styled.nav `
position: sticky;
top:0;
width: 100%;
height: 55px;
padding: 0 30px;
display: flex;
background: #fff;
box-shadow: 0 2px 4px 0 rgb(0 0 0 / 7%);
z-index:99;
`

const NavItem= styled.div `
display: flex;
padding: 0 12px;
justify-content: center;
align-items: center;
font-size: 12px;
letter-spacing: .5px;
position: relative;
font-weight: 600;
cursor:pointer;
&:hover {
    background-color: rgb(0 0 0 / 4%);
}
`

const Logo =styled.div `
display: flex;
justify-content: center;
align-items: center;
img {
    width: 75px;
    height: 28px;
}
padding: 0 20px;
`
const CareerCampus=styled.div `
display: flex;
flex:1;
align-items: center;
justify-content: center;
padding: 0 12px;
max-width: 110px;
img {
    width: 105px;
    height: 25px;
}
&:hover {
    background-color: rgb(0 0 0 / 4%);
}

`
const Login = styled.div `
display:flex;
margin: 5px;
font-size: 13px;
letter-spacing: .3px;
background-image: linear-gradient(
62deg
,#fbab7e,#f7ce68);
border-radius: 100px;
padding: 10px 24px;
color: #fff;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
transition: all .3s;
`
const ClassRoom=styled.div `
display: flex;
padding: 0 5px;
margin: 5px;
font-weight: 600;
font-size: 13px;
letter-spacing: .3px;
cursor: pointer;
height: 54px;
justify-content: center;
align-items: center;
&:hover {
    background-color: rgb(0 0 0 / 4%);
}
`
const Profile =styled.div `
display: flex;
margin-left: auto;
flex-direction: row;
justify-content: center;
align-items: center;
`