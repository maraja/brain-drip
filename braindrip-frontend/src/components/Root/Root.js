import React from 'react'
import styled from "styled-components";
import { Route, Switch } from 'react-router-dom';

import Login from "./Login";
import Home from './Home';

const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    margin: 0 auto;
    width: 80rem;
`;

const Content = styled.div`
    flex: 1;
    margin-right: 1rem;
`

const Sidebar = styled.div`
    flex: 0 auto;
    width: 10rem;
`

const Wrapper = styled.div`
    box-sizing: border-box;
    height: 100%;
    padding: 1rem;
    width: 100%;
`;

function About() {
    return (
        <Wrapper>
            <Container>
                <h1>This is my about page.</h1>
            </Container>
        </Wrapper>
    )
}

function Root() {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            {/* <Route path="/shop" component={Shop} /> */}
        </Switch>
    )
}


export default Root
