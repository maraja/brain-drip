import React from 'react'

import { Layout as _Layout } from 'antd';

const { Header, Footer, Sider, Content } = _Layout;

import BrainDripHeader from './Header';
import BrainDripFooter from './Footer';

import styled from 'styled-components'

const BDLayout = styled(_Layout)`
`

function Layout({ children }) {
    return (
        <BDLayout>
            <BrainDripHeader>Header</BrainDripHeader>
            <Content>{children}</Content>
            <BrainDripFooter>Footer</BrainDripFooter>
        </BDLayout>
    )
}

export default Layout
