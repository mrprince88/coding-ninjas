import React, { Component } from 'react'
import Header from './Header';
import Jumbotron from './jumbotron';
import Events from './Events';
import styled from 'styled-components';

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
            <Header/>
            <Content>
                <Container>
                    <Jumbotron/>
                    <Events />
                </Container>
            </Content>
            </React.Fragment>
        )
    }
}

const Content=styled.main `
display: flex;
max-width: 100%;
background-color: #ececec;
justify-content: center;
`

const Container=styled.div `
max-width: 1600px;
overflow: hidden;
width: 100%;
`