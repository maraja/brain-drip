import React from 'react'
import { Typography } from 'antd';

import styled from 'styled-components'

const { Title } = Typography;

const _Title = styled.h3`
    font-size: 2rem;
    font-weight: 500;
`

function Title1(props) {
    return (
        <_Title>{props.children}</_Title>
    )
}

export default Title1
