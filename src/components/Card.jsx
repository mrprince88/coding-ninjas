import React from 'react'
import styled from 'styled-components';
import {toDateTime,getDate,getTime,getLongDate} from './Date';

function Card(props) {
    const {data}=props;
    const { card_tags,registered_users}=data;
    const {top_users,other_users_count,show_users_count} = registered_users;
    const archived=toDateTime(data.end_time) < new Date();
    return (
        <Container>
            <Header>
                <Glass>
                    <ImageContainer screen={data.cover_picture} mobile={data.mobile_cover_picture}>
                        <div></div>
                        <img />
                    </ImageContainer>
                </Glass>
                <EventStatus value={archived}>
                    <StatusContainer>
                        <div></div>
                        <p>Registrations <b>open</b> till <b>{getDate(data.registration_end_time)}, {getTime(data.registration_end_time)}</b></p>
                    </StatusContainer>
                </EventStatus>
            </Header>

            <Details>
                <p>{data.name}</p>
                <DetailsContainer>
                    <DetailBox>
                        <Label><b>Starts On</b></Label>
                        <Item><div>{getTime(data.event_start_time)},</div>
                        <div>{getLongDate(data.event_start_time)}</div>
                        </Item>
                    </DetailBox>
                    <DetailBox>
                        <Label><b>Entry Fee</b></Label>
                        <Item>INR {data.fees}</Item>
                    </DetailBox>
                    <DetailBox>
                        <Label><b>Venue</b></Label>
                        <Item>{data.venue}</Item>
                    </DetailBox>
                </DetailsContainer>

            <Description>
                {data.short_desc}
            </Description>

            <TagsContainer>
                {card_tags && card_tags.map(tag=><div key={tag}>{tag}</div>)}
            </TagsContainer>

            </Details>
            <Footer>
                <Users value={show_users_count}>
                    <div>
                   {top_users && top_users.map(val=>
                       <div>
                        <img src={val.image_url!=null ? val.image_url : '/images/default.png'}/>
                       </div>
                   )}
                   </div>
                   <p>and <b>{other_users_count}</b> others registered</p>
                </Users>
                <Register value={archived}>
                <img src='/images/register.png'/>
                </Register>
            </Footer>
        </Container>
    )
}

export default Card

const Container=styled.div `
    background: #fff;
    border-radius: 5px;
    width: 95%;
    margin-right: 25px;
    margin-bottom: 25px;
    box-shadow: 0 1px 19px 0 rgb(0 0 0 / 7%);
    cursor: pointer;
    font-weight: 400;
    transition: all .3s;
`

const Header=styled.div `
height:159px;
position: relative;
`
const Glass=styled.div `
width: 100%;
height: 100%;
position: relative;
`

const ImageContainer=styled.div `
width: 100%;
height: 100%;
position: relative;
div {
    background-image: linear-gradient(
-180deg
,rgba(3,3,3,0),#010101);
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: .2;
}

img {
    object-fit: cover;
    width:inherit;
    height:inherit;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    content:url(${props=>props.mobile})
}
@media(min-width:1130px) {
    img {
    content:url(${props=>props.screen})
    }
}
}
`

const EventStatus=styled.div `
position: absolute;
font-size: 12px;
color: #121212;
background: #fff;
padding: 7px 13px;
border-radius: 2px;
bottom: 7px;
right: 7px;
box-shadow: 0 1px 11px 0 rgb(0 0 0 / 11%);
${({value})=>value && 
`
display:none;
`
}
`

const StatusContainer=styled.div `
display: flex;
align-items: center;

div {
    border-radius: 50%;
    position: relative;
    width: 10px!important;
    height: 10px;
    top: 5px;
    background: red linear-gradient(#ff73ac,#ff274b);
    transition: height .25s ease,width .25s ease;
    transform: translate(-50%,-50%);
    margin-right: 2px;
    animation: view 2s linear 2s infinite;
    @keyframes view {
        0% {
            opacity:1;
        }
        100% {
            opacity:0.2;
        }
    }

    @keyframes ripple {
    to {
        transform: scale(2);
        opacity: 0;
        }
    }
    &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 50%;
    border: 1px solid #ffb6c1;
    background: linear-gradient(#ff73ac,#ff274b);
    animation: ripple 3s linear infinite;
    }

    &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 50%;
    border: 1px solid #ffb6c1;
    background: linear-gradient(#ff73ac,#ff274b);
    animation: ripple 3s linear infinite;
    }
}
 p {
     margin:0;
 }
`

const Details=styled.main  `
padding: 20px 16px;
p {
    margin: 0 0 9px;
    font-size: 18px;
    letter-spacing: .2px;
    font-weight: 700;
    min-height: 50px;
}
`

const DetailsContainer=styled.div `
display: flex;
border-bottom: 1px solid #f3f3f3;
padding-bottom: 10px;
`

const DetailBox=styled.div `
    display: flex;
    flex-direction: column;
    margin-right: 16px;
`

const Label=styled.div `
font-size: 13px;
color: rgba(28,28,28,.6);
margin: 0;
cursor:pointer;
font-weight:400;
b {
    font-size: 13px;
    color: rgba(28,28,28,.6);
    margin: 0;
}
`

const Item=styled.div `
    color: #212121;
    font-weight: 600;
    font-size: 14px;
    margin:0;
    div {
        white-space: pre;
    }
`

const Users=styled.div `
display: flex;
justify-content: center;
flex-direction: column;

${({value})=>!value && 
`
display:none;
`}

div {
display: flex;
margin-bottom: 4px;
div {
    margin-left:0;
    display: flex;
    align-items:center;
}
img {
    border: 1px solid #fff;
    width: 22px;
    height: 22px;
    border-radius: 50%
}
}
p {
    margin: 0;
    color: #757575;
    font-size: 13px;
    b {
        color: black;
    }
}
`

const Description=styled.div `
    margin-top: 12px;
    height: 57px;
    font-size: 14px;
    line-height: 19px;
    font-weight: 400;
    color: #616161;
    text-overflow: ellipsis;
    overflow: hidden;
`

const TagsContainer=styled.div `
    display: flex;
    flex-wrap: wrap;
    height: 64px;
    margin-top: 20px;
    div {
    height: fit-content;
    margin-right: 8px;
    margin-bottom: 8px;
    color: #616161;
    background: #eee;
    border-radius: 3px;
    padding: 4px 14px;
    font-size: 12px;
    }
`

const Footer=styled.footer `
    padding: 9px 0 9px 19px;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid hsla(0,0%,59.2%,.1);
    min-height: 30px;
`

const Register=styled.div `
margin-left:auto;
img {
        height: 30px;
}
${({value})=>value && 
`
display:none;
`
}
`