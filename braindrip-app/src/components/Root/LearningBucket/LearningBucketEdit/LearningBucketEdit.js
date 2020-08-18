import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { Card, Typography, Modal, Form, Input, Radio, Button } from "antd";

import { GET_LEARNING_BUCKET_DETAIL } from "#root/graphql/queries"
import Layout from "#root/components/Root/Layout";
import Container from "#root/components/bd-components/Container";


const { TextArea } = Input;
const { Title, Text, Paragraph } = Typography;
const difficulties = ['beginner', 'intermediate', 'advanced']


const LearningBucketEdit = (props) => {
  const [form] = Form.useForm();
  const id = props.match.params.id
  const { data, loading, error } = useQuery(GET_LEARNING_BUCKET_DETAIL, {
    variables: { id },
  });

  const onSubmit = (values) => {
    console.log("values", values)
    
    form.resetFields();
  };

  if (loading) return <Paragraph>Loading ...</Paragraph>;
  if (data)
    return (
      <Layout>
        <Container>
            <Title level={3}>Edit your Learning Path.</Title>
            <Form
            form={form}
            onFinish={onSubmit}
            name="edit_learning_path"
            className="edit-learning-path-form"
            initialValues={{
              name: data.learningBucket.name, 
              description: data.learningBucket.description,
              tags: data.learningBucket.tags,
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
                <Input size="large" placeholder="Path Name" value={data.learningBucket.name} />
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
                <TextArea rows={4} placeholder="Description" value={data.learningBucket.description}/>
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
                <Input size="large" placeholder="Tags" value={data.learningBucket.tags}/>
            </Form.Item>
            
            <Form.Item wrapperCol={{ span:24 }}>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
            </Form>
      </Container>
    </Layout>
    );
};
export default LearningBucketEdit;
