import React, { useState, useCallback, Component } from "react";
import  { Redirect } from 'react-router-dom'
import { useSelector } from "react-redux";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

import LearningPathContent from "#root/components/bd-components/LearningPathList.js";
import { Layout, Card, Typography, Modal, Form, Input, Radio } from "antd";
const { Content } = Layout;
const { Title } = Typography;
const { TextArea } = Input;

import { CREATE_LEARNING_PATH } from "#root/graphql/mutations"

const LearningPaths = (props) => {

  const [newData, setNewData] = useState(false)
  const [createLearningPath, { data }] = useMutation(CREATE_LEARNING_PATH, { onCompleted: (data) => setNewData(true) });
  const [visible, setVisible] = useState(false);
  const { user } = useSelector(state => state.user);



  if (data) {
    console.log('reload component');
  }

  const onCreate = (values) => {
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
    setVisible(false);
  };

  const [form] = Form.useForm();
  return (
    <Content>
      <Modal
        title="New Learning Path"
        style={{ top: 20 }}
        visible={visible}
        okText="Create"
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
        onCancel={() => setVisible(false)}
      >
        <Form
          form={form}
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
              <Radio.Button value="beginner">Beginner</Radio.Button>
              <Radio.Button value="intermediate">Intermediate</Radio.Button>
              <Radio.Button value="advanced">Advanced</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Form>
      </Modal>

      <Card
        title="My Learning Paths"
        extra={
          <a onClick={() => setVisible(true)} href="#">
            New
          </a>
        }
      >
        <LearningPathContent newData={newData} />
      </Card>
    </Content>
  );
};

export default LearningPaths;
