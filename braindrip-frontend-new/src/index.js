// import "@babel/polyfill";

import React from "react";
import {ApolloProvider} from 'react-apollo';
import {render} from "react-dom";
import {createGlobalStyle, ThemeProvider} from "styled-components";

import graphqlClient from "./api/graphqlClient";
import Root from "./components/Root";
import App from "./App";

import {BrowserRouter} from 'react-router-dom';

import * as theme from "./theme";
import * as serviceWorker from './serviceWorker';

const GlobalStyle = createGlobalStyle `
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');

    html, body, #root {
        height: 100%;
        margin: 0;
        padding: 0;
        width: 100%;
    }

    body {
        font-family: Open Sans, sans-serif;
    }
`;

render (
    <ApolloProvider client={graphqlClient}>
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <BrowserRouter>
                <Root/>
            </BrowserRouter>
        </ThemeProvider>
    </ApolloProvider>,
    document.getElementById("root")
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
