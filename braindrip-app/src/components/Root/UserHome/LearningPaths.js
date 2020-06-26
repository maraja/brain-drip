import React, { useState, useCallback, Component } from "react";
import { Redirect } from 'react-router-dom'
import { useSelector } from "react-redux";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

import LearningPathContent from "#root/components/bd-components/LearningPathList.js";
import Layout from "#root/components/Root/Layout";
import Container from "#root/components/bd-components/Container.js";
import { Card, Typography, Modal, Form, Input, Radio, Button } from "antd";
const { Title } = Typography;
const { TextArea } = Input;

import { CREATE_LEARNING_PATH } from "#root/graphql/mutations"

const difficulties = ['beginner', 'intermediate', 'advanced']

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
    <>
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
              {difficulties.map(d => (<Radio.Button value={d}>{d}</Radio.Button>))}
            </Radio.Group>
          </Form.Item>
        </Form>
      </Modal>

      <h1>My Learning Paths</h1>
      <Button type="primary" onClick={() => setVisible(true)} >+ Create Learning Path</Button>

      <LearningPathContent newData={newData} />
    </>
  );
};

export default LearningPaths;
