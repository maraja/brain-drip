import React, { useState, useEffect, useCallback, Component } from "react";
import  { Redirect } from 'react-router-dom'
import { useSelector } from "react-redux";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

import LearningPathContent from "#root/components/bd-components/LearningPathList";
import LearningPathCreate from "#root/components/bd-components/LearningPathCreate";
import SmallSuccess from "#root/components/bd-components/SmallSuccess";
import SmallError from "#root/components/bd-components/SmallError";
import Layout from "#root/components/Root/Layout";
import Container from "#root/components/bd-components/Container";
import { Card, Typography, Modal, Form, Input, Radio, Button } from "antd";
const { Title } = Typography;
const { TextArea } = Input;

import { CREATE_LEARNING_PATH } from "#root/graphql/mutations"

const difficulties = ['beginner', 'intermediate', 'advanced']

const LearningPaths = (props) => {

  const [newData, setNewData] = useState(false)
  const [createLearningPath, { data, error }] = useMutation(CREATE_LEARNING_PATH, { errorPolicy: 'all', onCompleted: (data) => setNewData(true) });
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

  
  useEffect(() => {
    if (data && data.createLearningPath) {
      form.resetFields();
      SmallSuccess("Learning Path created successfully!")
      console.log("successfully created: ", data)
    }

    if (error) {
      console.log("error", error)
      SmallError(error.message)
    }
  }, [data, error])

  const [form] = Form.useForm();
  return (
    <Layout>
    <Container>
      <Modal
        title="Create a New Learning Path"
        style={{ top: 20 }}
        visible={visible}
        okText="Create"
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
        onCancel={() => setVisible(false)}
      >
        <LearningPathCreate modal={true} modalForm={form} />
      </Modal>

      <h1>My Learning Paths</h1>
      <Button type="primary" onClick={() => setVisible(true)} >+ Create Learning Path</Button>

        <LearningPathContent newData={newData} />
    </Container>
    </Layout>
  );
};

export default LearningPaths;
