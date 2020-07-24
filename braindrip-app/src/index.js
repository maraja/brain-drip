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
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
import rootReducer from './reducers'

import "./index.css";
import './index.less'
import "#root/assets/_styles.scss"
import theme from "./theme";

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

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))
const persistor = persistStore(store)

render (<ApolloProvider client={graphqlClient}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <BrowserRouter>
                <Root/>
            </BrowserRouter>,
        </ThemeProvider>
      </PersistGate>
    </Provider>
</ApolloProvider>, document.getElementById("app"))
