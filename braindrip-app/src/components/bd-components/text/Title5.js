import React from 'react'
import { Typography } from 'antd';

import styled from 'styled-components'

const { Title } = Typography;

const _Title = styled.h5`
    font-size: 1.5rem;
    font-weight: 400;
`

function Title1(props) {
    return (
        <_Title>{props.children}</_Title>
    )
}

export default Title1
