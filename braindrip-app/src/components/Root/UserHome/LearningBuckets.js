import React, {useState} from "react";
import { Layout, Card, Typography, Modal, Form, Input } from "antd";
const { Content } = Layout;
const { TextArea } = Input;
const { Title } = Typography;
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const LearningBuckets = () => {

  const [visible, setVisible] = useState(false);


  const gridStyle = {
    width: "25%",
    float: "left",
    marginTop: "5px",
  };
  const data = [
    {
      title: "SQL Bucket",
      img: "https://img-a.udemycdn.com/course/240x135/762616_7693_3.jpg",
      path: "/path",
    },
    {
      title: "Financial Analyst Bucket",
      img: "https://img-a.udemycdn.com/course/480x270/637930_9a22_19.jpg",
      path: "/path",
    },
    {
      title: "Bucket 1",
      img: "https://img-a.udemycdn.com/course/240x135/321410_d9c5_4.jpg",
      path: "/path",
    },
    {
      title: "Bucket 2",
      img: "https://img-a.udemycdn.com/course/240x135/937678_abd2_2.jpg",
      path: "/path",
    },
    {
      title: "Bucket 3",
      img: "https://img-a.udemycdn.com/course/240x135/937678_abd2_2.jpg",
      path: "/path",
    },
  ];
  return (
    <Content>
      <Modal
        title="New Learning Buckets"
        style={{ top: 20 }}
        visible={visible}
        okText="Create"
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Please enter a Bucket Name!",
              },
            ]}
          >
            <Input size="large" placeholder="Bucket Name" />
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
        </Form>
      </Modal>
      <Card
        title="My Learning Buckets"
        extra={
          <a onClick={() => setVisible(true)} href="#">
            New
            </a>
        }
      >
        {data.map(function (data, idx) {
          return (
            <Card
              key={idx}
              style={gridStyle}
              cover={<img src={data.img} />}
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Title level={4}>{data.title} </Title>
            </Card>
          );
        })}
      </Card>
    </Content>
  );
}

export default LearningBuckets;
