import React from 'react'
import { Form, Button } from "antd";

function BottomNav({ prev=null, next=null, submit=null, submitText="Submit" }) {
    return (
        <>
            {prev && 
                <Button type="primary" onClick={prev}>
                Previous
                </Button>
            }
            {next && 
                <Button type="primary" onClick={next}>
                Next
                </Button>
            }
            {submit && <Form.Item wrapperCol={{ span:24 }}>
                <Button type="primary" htmlType="submit">
                {submitText}
                </Button>
            </Form.Item>}
        </>
    )
}

export default BottomNav
