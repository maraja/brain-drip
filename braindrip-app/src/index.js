import "@babel/polyfill";

import React from "react";
import {ApolloProvider} from "@apollo/client";
import {render} from "react-dom";
import {createGlobalStyle, ThemeProvider} from "styled-components";

import graphqlClient from "#root/api/graphqlClient";
import Root from "#root/components/Root";

import {BrowserRouter} from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers'

import * as theme from "./theme";
import "./index.css";
import "#root/assets/_styles.scss"

const GlobalStyle = createGlobalStyle `
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

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

render (<ApolloProvider client={graphqlClient}>
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <BrowserRouter>
                <Root/>
            </BrowserRouter>,
        </ThemeProvider>
    </Provider>
</ApolloProvider>, document.getElementById("app"))
