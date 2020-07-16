import React, { useState, useCallback, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { Card, Typography, Modal, Form, Input, Radio, Button, Steps } from "antd";
import SmallSuccess from "#root/components/bd-components/SmallSuccess.js";

import BottomNav from './BottomNav'

const { TextArea } = Input;
const { Title } = Typography;
const { Step } = Steps;


import { CREATE_LEARNING_PATH, CREATE_LEARNING_PATH_RESOURCE } from "#root/graphql/mutations"

const difficulties = ['beginner', 'intermediate', 'advanced']
const resourceTypes = ['Video', 'Article', 'Blog Post', 'Research Paper']

const LearningPathShell = ({ modal=false, modalForm=null }) => {
    const [newData, setNewData] = useState(false)
    const [createLearningPath, { data, error }] = useMutation(CREATE_LEARNING_PATH, { onCompleted: (data) => setNewData(true) });
    const [visible, setVisible] = useState(false);
    const { user } = useSelector(state => state.user);

    const [form] = Form.useForm();
  
  
  
    if (data) {
      console.log('reload component');
    }
  
    const onSubmit = (values) => {
      console.log("user", user)
      createLearningPath({
        variables: {
          userId: user.id, 
          name: values.name,
          description: values.description,
          tags: values.tags,
          difficulty: values.difficulty,
        }
      });
      
      form.resetFields();
    };

    useEffect(() => {
        if (data && data.createLearningPath) {
          form.resetFields();
          SmallSuccess("Learning Path created successfully!")

          if (callback) callback(data.createLearningPath.newLearningPath)
          console.log("successfully created: ", data)
        }
    
        if (error) {
          console.log("error", error)
          SmallError(error.message)
        }
      }, [data, error])

    return (
        <>
            {!modal && <Title level={3}>Create a new Learning Path</Title>}
            <Form
            form={modalForm || form}
            onFinish={modal ? () => {} : onSubmit}
            name="normal_login"
            className="login-form"
            initialValues={{
                difficulty: "intermediate",
            }}
            >
            <Form.Item
                name="name"
                rules={[
                {
                    required: true,
                    message: "Please enter a Learning Path Name!",
                },
                ]}
            >
                <Input size="large" placeholder="Path Name" />
            </Form.Item>
            <Form.Item
                name="description"
                rules={[
                {
                    required: true,
                    message: "Please enter a description!",
                },
                ]}
            >
                <TextArea rows={4} placeholder="Description" />
            </Form.Item>
            <Form.Item
                name="tags"
                rules={[
                {
                    required: true,
                    message: "Please enter some tags!",
                },
                ]}
            >
                <Input size="large" placeholder="Tags" />
            </Form.Item>
            <Form.Item name="difficulty">
                <Radio.Group>
                {difficulties.map(d => ( <Radio.Button value={d}>{d}</Radio.Button> ))}
                </Radio.Group>
            </Form.Item>

            {/* <LearningPathResources /> */}
            
            {!modal && 
            <Form.Item wrapperCol={{ span:24 }}>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>}
            </Form>
        </>
    )
}

export default LearningPathShell
