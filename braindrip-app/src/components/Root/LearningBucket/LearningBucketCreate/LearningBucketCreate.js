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


import { CREATE_LEARNING_BUCKET, CREATE_LEARNING_BUCKET_RESOURCE } from "#root/graphql/mutations"



let newLearningBucket = {}
let newLearningResources = []


const LearningBucketCreate = ({ }) => {
  const [newData, setNewData] = useState(false)
  const [complete, setComplete] = useState(false)
  const [createLearningBucket, { 
    data: newLearningBucket, 
    error: learningBucketError }] = useMutation(CREATE_LEARNING_BUCKET, { onCompleted: (data) => setNewData(true) });
  const [createLearningBucketResource, { 
    data: newLearningBucketResource, 
    error: learningBucketResourceError }] = useMutation(CREATE_LEARNING_BUCKET_RESOURCE, { onCompleted: (data) => setNewData(true) });
  const [visible, setVisible] = useState(false);
  const { user } = useSelector(state => state.user);

  const [form] = Form.useForm();



  if (newLearningBucket) {
    console.log('reload component');
  }

  const onSubmit = async (values) => {
    console.log("user", user)
    console.log("values", values)
    try {
      // create the learning path as a shell to add the resources to later.
      let bucketResult = await createLearningBucket({
        variables: {
          userId: user.id, 
          name: values.path_name,
          description: values.path_description,
          tags: values.path_tags,
        }
      });

      let resources = []

      // loop through and add all the resources
      if (values.learning_bucket_resources) {
        values.learning_bucket_resources.forEach(async r => {
          let resourceResult = await createLearningBucketResource({
            variables: {
              learningBucketId: bucketResult.data.createLearningBucket.newLearningBucket.id, 
              url: r.resource_url,
              description: r.resource_description,
              topic: r.resource_topic,
            }
          });

          resources.push(resourceResult)
        })
      }

      console.log("bucket result", bucketResult);
      console.log("bucket resources", resources);
      form.resetFields();
    } catch (error) {
      console.log("some errors", error)
    }
    
  };

  useEffect(() => {
      if (newLearningBucket && newLearningBucket.createLearningBucket) {
        form.resetFields();
        SmallSuccess("Learning Bucket created successfully!")

        console.log("successfully created: ", newLearningBucket)
      }
  
      if (learningBucketError) {
        console.log("error", learningBucketError)
        SmallError(learningBucketError.message)
      }
    }, [newLearningBucket, learningBucketError])

  return (
      <>
          <Title level={3}>Create a new Learning Bucket</Title>
          <Form
          form={form}
          onFinish={onSubmit}
          name="learning_bucket_form"
          className="learning-bucket-form"
          >
          <Form.Item
              name="path_name"
              label="Bucket Name"
              rules={[
              {
                  required: true,
                  message: "Please enter a Learning Bucket Name!",
              },
              ]}
          >
              <Input size="large"/>
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
              <TextArea rows={4}/>
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

          <LearningBucketResource />
          
          
          <Form.Item wrapperCol={{ span:24 }}>
              <Button type="primary" htmlType="submit">
              Submit
              </Button>
          </Form.Item>
          </Form>
      </>
  )
}

export default LearningBucketCreate


const LearningBucketResource = ({}) => {
  return (
  <>
  <Form.List name="learning_bucket_resources">
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
                      <Input size="large"/>
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
                      <TextArea rows={4}/>
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
                      <Input size="large"/>
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
