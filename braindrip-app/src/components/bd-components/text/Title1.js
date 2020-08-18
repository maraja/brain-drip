import React from 'react'
import { Typography } from 'antd';

import styled from 'styled-components'

const { Title } = Typography;

const _Title = styled.h1`
    font-size: 3rem;
    font-weight: 600;
`

function Title1(props) {
    return (
        <_Title>{props.children}</_Title>
    )
}

export default Title1
