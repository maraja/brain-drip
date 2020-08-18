import React from 'react'
import { Typography } from 'antd';

import styled from 'styled-components'

const { Title } = Typography;

const _Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 500;
`

function Title1(props) {
    return (
        <_Title>{props.children}</_Title>
    )
}

export default Title1
