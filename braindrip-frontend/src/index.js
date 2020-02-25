import "@babel/polyfill";

import React from "react";
import { ApolloProvider } from 'react-apollo';
import { render } from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import graphqlClient from "#root/api/graphqlClient";
import Root from "#root/components/Root";

import { BrowserRouter } from 'react-router-dom';

import * as theme from "./theme";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');

    html, body, #app {
        height: 100%;
        margin: 0;
        padding: 0;
        width: 100%;
    }

    body {
        font-family: Open Sans, sans-serif;
    }
`;

render(
    <ApolloProvider client={graphqlClient} >
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <BrowserRouter>
                <Root />
            </BrowserRouter>, 
        </ThemeProvider>
    </ApolloProvider>, 
    document.getElementById("app"))