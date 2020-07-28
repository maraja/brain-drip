import React, { useState, useCallback, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { Card, Typography, Modal, Form, Input, Radio, Button, Steps, Space, InputNumber } from "antd";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import SmallSuccess from "#root/components/bd-components/SmallSuccess.js";
import SmallError from "#root/components/bd-components/SmallError.js";
import Layout from "#root/components/Root/Layout";
import Container from "#root/components/bd-components/Container";

const { TextArea } = Input;
const { Title } = Typography;
const { Step } = Steps;


import { CREATE_LEARNING_PATH, CREATE_LEARNING_PATH_RESOURCE } from "#root/graphql/mutations"

const difficulties = ['beginner', 'intermediate', 'advanced']
const resourceTypes = ['Video', 'Article', 'Blog Post', 'Research Paper']
// const resourceTypes = ['Video', 'Article', 'Blog Post', 'Research Paper']

let newLearningPath = {}
let newLearningResources = []


const LearningPathCreate = ({ }) => {
  const [newData, setNewData] = useState(false)
  const [complete, setComplete] = useState(false)
  const [createLearningPath, {
    data: newLearningPath,
    error: learningPathError }] = useMutation(CREATE_LEARNING_PATH, { onCompleted: (data) => setNewData(true) });
  const [createLearningPathResource, {
    data: newLearningPathResource,
    error: learningPathResourceError }] = useMutation(CREATE_LEARNING_PATH_RESOURCE, { onCompleted: (data) => setNewData(true) });
  const [visible, setVisible] = useState(false);
  const { user } = useSelector(state => state.user);

  const [form] = Form.useForm();



  if (newLearningPath) {
    console.log('reload component');
  }

  const onSubmit = async (values) => {
    console.log("user", user)
    console.log("values", values)
    try {
      // create the learning path as a shell to add the resources to later.
      let pathResult = await createLearningPath({
        variables: {
          userId: user.id,
          name: values.path_name,
          description: values.path_description,
          tags: values.path_tags ? values.path_tags.split(',') : [],
          difficulty: values.path_difficulty,
        }
      });

      let resources = []

      // loop through and add all the resources
      if (values.learning_path_resources) {
        values.learning_path_resources.forEach(async r => {
          let resourceResult = await createLearningPathResource({
            variables: {
              learningPathId: pathResult.data.createLearningPath.newLearningPath.id,
              url: r.resource_url,
              description: r.resource_description,
              topic: r.resource_topic,
              type: r.resource_types,
              sequenceNumber: parseInt(r.resource_sequence_number),
            }
          });

          resources.push(resourceResult)
        })
      }

      console.log("path result", pathResult);
      console.log("path resources", resources);
      form.resetFields();
    } catch (error) {
      console.log("some errors", error)
    }

  };

  useEffect(() => {
    if (newLearningPath && newLearningPath.createLearningPath) {
      form.resetFields();
      SmallSuccess("Learning Path created successfully!")

      console.log("successfully created: ", newLearningPath)
    }

    if (learningPathError) {
      console.log("error", learningPathError)
      SmallError(learningPathError.message)
    }
  }, [newLearningPath, learningPathError])

  return (
    <>
      <Title level={3}>Create a new Learning Path</Title>
      <Form
        form={form}
        onFinish={onSubmit}
        name="learning_path_form"
        className="learning-path-form"
        initialValues={{
          difficulty: "intermediate",
        }}
      >
        <Form.Item
          name="path_name"
          label="Path Name"
          rules={[
            {
              required: true,
              message: "Please enter a Learning Path Name!",
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          name="path_description"
          label="Description"
          rules={[
            {
              required: true,
              message: "Please enter a description!",
            },
          ]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item
          name="path_tags"
          label="Tags"
          rules={[
            {
              required: true,
              message: "Please enter some tags!",
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item name="path_difficulty" label="Difficulty">
          <Radio.Group>
            {difficulties.map(d => (<Radio.Button value={d}>{d}</Radio.Button>))}
          </Radio.Group>
        </Form.Item>

        <LearningPathResource />


        <Form.Item wrapperCol={{ span: 24 }}>
          <Button type="primary" htmlType="submit">
            Submit
              </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default LearningPathCreate


const LearningPathResource = ({ }) => {
  return (
    <>
      <Form.List name="learning_path_resources">
        {(fields, { add, remove }) => {
          return (
            <div>
              {fields.map(field => (
                <Space key={field.key} direction="vertical" style={{ marginBottom: 8 }} align="start">

                  <Form.Item
                    {...field}
                    name={[field.name, 'resource_url']}
                    fieldKey={[field.fieldKey, 'resource_url']}
                    label="URL"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your url!",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                  <Form.Item
                    {...field}
                    name={[field.name, 'resource_description']}
                    fieldKey={[field.fieldKey, 'resource_description']}
                    label="Description"
                    rules={[
                      {
                        required: true,
                        message: "Please enter a description!",
                      },
                    ]}
                  >
                    <TextArea rows={4} />
                  </Form.Item>
                  <Form.Item
                    {...field}
                    name={[field.name, 'resource_topic']}
                    fieldKey={[field.fieldKey, 'resource_topic']}
                    label="Topic"
                    rules={[
                      {
                        required: true,
                        message: "Please enter a topic for this resource!",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                  <Form.Item
                    {...field}
                    name={[field.name, 'resource_sequence_number']}
                    fieldKey={[field.fieldKey, 'resource_sequence_number']}
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
                  <Form.Item
                    {...field}
                    label="Resource Type"
                    name={[field.name, 'resource_types']}
                    fieldKey={[field.fieldKey, 'resource_types']}
                  >
                    <Radio.Group>
                      {resourceTypes.map(d => (<Radio.Button value={d}>{d}</Radio.Button>))}
                    </Radio.Group>
                  </Form.Item>

                  <MinusCircleOutlined
                    onClick={() => {
                      console.log(field)
                      remove(field.name);
                    }}
                  />
                </Space>
              ))}

              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => {
                    add();
                  }}
                  block
                >
                  <PlusOutlined /> Add new Resource!
              </Button>
              </Form.Item>
            </div>
          );
        }}
      </Form.List >
    </>)
}
