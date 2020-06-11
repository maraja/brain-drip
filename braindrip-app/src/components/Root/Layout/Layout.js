import React from 'react'

import { Layout as _Layout } from 'antd';

const { Header, Footer, Sider, Content } = _Layout;

import BrainDripHeader from './Header';
import BrainDripFooter from './Footer';

function Layout({ children }) {
    return (
        <_Layout>
            <BrainDripHeader>Header</BrainDripHeader>
            <Content>{children}</Content>
            <BrainDripFooter>Footer</BrainDripFooter>
        </_Layout>
    )
}

export default Layout
