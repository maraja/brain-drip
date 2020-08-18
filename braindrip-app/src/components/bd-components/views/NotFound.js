import React from 'react'
import {Link} from 'react-router-dom' 

import { Result, Button } from 'antd';

import Layout from '#root/components/Root/Layout'
import Container from '#root/components/bd-components/Container'

function NotFound() {
    return (
        <Layout><Container>
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Link to="/" ><Button type="primary">Back Home</Button></Link>}
        />
        </Container></Layout>
        
    )
}

export default NotFound
