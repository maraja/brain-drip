import React, { Component } from "react";
import { Layout, Card, Typography, Modal, Form, Input, Radio } from "antd";
const { Content } = Layout;
const { Title } = Typography;
const { TextArea } = Input;

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

class LearningPaths extends Component {
  constructor(props) {
    super(props);
    this.state = { modalVisible: false };
  }
  setModalVisible(modalVisible) {
    this.setState({ modalVisible });
  }
  render() {
    const gridStyle = {
      width: "25%",
      float: "left",
      marginTop: "5px",
    };
    const data = [
      {
        title: "The Complete SQL Guide 2020",
        img: "https://img-a.udemycdn.com/course/240x135/762616_7693_3.jpg",
        path: "/path",
      },
      {
        title: "The Complete Financial Analyst Path",
        img: "https://img-a.udemycdn.com/course/480x270/637930_9a22_19.jpg",
        path: "/path",
      },
      {
        title: "Beginner to Pro in Excel 2020",
        img: "https://img-a.udemycdn.com/course/240x135/321410_d9c5_4.jpg",
        path: "/path",
      },
      {
        title: "Tableau 2020 A-Z:Hands-On Tableau",
        img: "https://img-a.udemycdn.com/course/240x135/937678_abd2_2.jpg",
        path: "/path",
      },
      {
        title: "Tableau 2020 A-Z:Hands-On Tableau",
        img: "https://img-a.udemycdn.com/course/240x135/937678_abd2_2.jpg",
        path: "/path",
      },
      {
        title: "Tableau 2020 A-Z:Hands-On Tableau",
        img: "https://img-a.udemycdn.com/course/240x135/937678_abd2_2.jpg",
        path: "/path",
      },
    ];
    return (
      <Content>
        <Modal
          title="New Learning Path"
          style={{ top: 20 }}
          visible={this.state.modalVisible}
          okText="Create"
          onOk={() => this.setModalVisible(false)}
          onCancel={() => this.setModalVisible(false)}
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
              <Radio.Group value="intermediate">
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
            <a onClick={() => this.setModalVisible(true)} href="#">
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
}

export default LearningPaths;
