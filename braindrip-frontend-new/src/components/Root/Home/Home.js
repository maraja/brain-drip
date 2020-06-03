import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {Button} from 'antd';

const Container = styled.div `
    display: flex;
    flex-flow: row nowrap;
    margin: 0 auto;
    width: 80rem;
`;

const Content = styled.div `
    flex: 1;
    margin-right: 1rem;
`

const Wrapper = styled.div `
    box-sizing: border-box;
    height: 100%;
    padding: 1rem;
    width: 100%;
`;

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <Wrapper>
                <Container>
                    <Content>Amit is a batty boy</Content>
                    <Button/>
                </Container>
            </Wrapper>
        )
    }
} Home.propTypes = {}

export default Home