import "@babel/polyfill";

import React from "react";
import { ApolloProvider } from "@apollo/client";
import { render } from "react-dom";
import { ThemeProvider } from "styled-components";

import graphqlClient from "#root/api/graphqlClient";

import { BrowserRouter } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import GlobalStyles from './assets/style/Global.style';
import AuthProvider from './context/AuthProvider';
import Routes from './router';
import rootReducer from './reducers'

import "./index.css";
import './index.less'
import "#root/assets/_styles.scss"
import theme from './themes/default.theme';



const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))
const persistor = persistStore(store)

render(<ApolloProvider client={graphqlClient}>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
                <>
                    <GlobalStyles />
                    <BrowserRouter>
                        <AuthProvider>
                            <Routes />
                        </AuthProvider>
                    </BrowserRouter>
                </>
            </ThemeProvider>
        </PersistGate>
    </Provider>
</ApolloProvider>, document.getElementById("app"))
