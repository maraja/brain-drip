import React, { useState, useCallback, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { Card, Typography, Modal, Form, Input, Radio, Button, Steps, InputNumber } from "antd";
import SmallSuccess from "#root/components/bd-components/SmallSuccess.js";
import SmallError from "#root/components/bd-components/SmallError.js";

const { TextArea } = Input;
const { Title } = Typography;
const { Step } = Steps;


import { CREATE_LEARNING_PATH_RESOURCE } from "#root/graphql/mutations"
import BottomNav from './BottomNav'

// createLearningPathResource(
    // learningPathId: String!,
    // url: String!, 
    // description: String!, 
    // topic: String!, 
    // type: String!, 
    // sequenceNumber: Int): LearningPathResourceResponse

const resourceTypes = ['Video', 'Article', 'Blog Post', 'Research Paper']

const LearningPathResources = ({ modal=false, modalForm=null, learningPath }) => {
    const [newData, setNewData] = useState(false)
    const [createLearningPathResource, { data, error }] = useMutation(CREATE_LEARNING_PATH_RESOURCE, { onCompleted: (data) => setNewData(true) });
    const { user } = useSelector(state => state.user);

    const [form] = Form.useForm();
  
    if (data) {
      console.log('reload component');
    }
  
    const onSubmit = (values) => {
      console.log("user", user)
      console.log("learning path", learningPath)
      console.log("values", values)
      createLearningPathResource({
        variables: {
          learningPathId: learningPath.id, 
          url: values.url,
          description: values.description,
          topic: values.topic,
          type: values.resource_types,
          sequenceNumber: parseInt(values.sequence_number),
        }
      });
      
      form.resetFields();
    };

    useEffect(() => {
        if (data && data.createLearningPathResource) {
          form.resetFields();
          SmallSuccess("Learning Path Resource created successfully!")
          console.log("successfully created: ", data)
        }
    
        if (error) {
          console.log("error", error)
          SmallError(error.message)
        }
      }, [data, error])

    return (
        <>
            <Form
            form={modalForm || form}
            onFinish={modal ? () => {} : onSubmit}
            name="normal_login"
            className="login-form"
            initialValues={{
                resource_types: "Article",
            }}
            >
            <Form.Item
                name="url"
                label="URL"
                rules={[
                {
                    required: true,
                    message: "Please enter your url!",
                },
                ]}
            >
                <Input size="large"/>
            </Form.Item>
            <Form.Item
                name="description"
                label="Description"
                rules={[
                {
                    required: true,
                    message: "Please enter a description!",
                },
                ]}
            >
                <TextArea rows={4}/>
            </Form.Item>
            <Form.Item
                label="Topic"
                name="topic"
                rules={[
                {
                    required: true,
                    message: "Please enter a topic for this resource!",
                },
                ]}
            >
                <Input size="large"/>
            </Form.Item>
            <Form.Item
                name="sequence_number"
                label="Sequence Number"
                rules={[
                {
                    required: true,
                    type: 'number', min: 0, max: 99,
                    message: "Please add a valid number from 0 to 99.",
                },
                ]}
            >
                <InputNumber size="large" />
            </Form.Item>
            <Form.Item name="resource_types">
                <Radio.Group>
                {resourceTypes.map(d => ( <Radio.Button value={d}>{d}</Radio.Button> ))}
                </Radio.Group>
            </Form.Item>
            
            {!modal && 
            <BottomNav submit submitText={"Next"} />}
            </Form>
        </>
    )
}

export default LearningPathResources
