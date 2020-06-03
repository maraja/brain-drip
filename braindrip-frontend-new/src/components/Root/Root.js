import React from 'react'
import styled from "styled-components";
import {Route, Switch} from 'react-router-dom';
import {Layout} from 'antd';


import Login from "./Login";
import Home from './Home';
import LearningPath from './LearningPath';
import {default as BDHeader} from '../shared/Header';
import {default as BDFooter} from '../shared/Footer';


const {Header, Footer, Sider, Content} = Layout;

// const Container = styled.div `
//     display: flex;
//     flex-flow: row nowrap;
//     margin: 0 auto;
//     width: 80rem;
// `;

// const Content = styled.div `
//     flex: 1;
//     margin-right: 1rem;
// `

// const Sidebar = styled.div `
//     flex: 0 auto;
//     width: 10rem;
// `

// const Wrapper = styled.div `
//     box-sizing: border-box;
//     height: 100%;
//     padding: 1rem;
//     width: 100%;
// `;

function About() {
    return (
        <h2>THis is my about page.</h2>
    // <Wrapper>
    //     <Container> <h1>This is my about page.</h1>
    //     </Container>
    // </Wrapper>
    )
}

function Root() {
    return (
        <Layout>
            <Header><BDHeader/></Header>
            <Content>
                <Switch>
                    <Route path="/"
                        component={Home}
                        exact/>
                    <Route path="/about"
                        component={About}/> {/* <Route path="/shop" component={Shop} /> */}
                    <Route path="/learning-path"
                        component={LearningPath}/>
                </Switch>
            </Content>
            <Footer><BDFooter/></Footer>
        </Layout>

    )
}


export default Root
