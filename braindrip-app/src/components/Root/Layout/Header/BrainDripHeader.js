import React, { Component, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import {
  Layout,
  Avatar,
  Input,
  Row,
  Col,
  Space,
  Menu,
  Dropdown,
  Card,
} from "antd";
const { Meta } = Card;
import { UserOutlined, DownOutlined } from "@ant-design/icons";
const { Header } = Layout;
const { Search } = Input;
import logo from "#root/logo.png";
import Logo from "#root/components/bd-components/Logo";

import { logoutUser } from "#root/actions/userActions";

import { Button } from "antd";

function BrainDripHeader() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();

  let headerRight;

  useEffect(() => {
    console.log(isLoggedIn)
    console.log(user)
    setIsLoggedIn(user ? true : false)
  }, [user])

  if (!isLoggedIn) {
    headerRight = (
      <>
        <Button href="/login">Log In</Button>
        <Button href="/signup" type="primary">
          Sign Up
        </Button>
      </>
    );
  } else {
    const data = [
      {
        author: "Jose Portilla",
        title: "The Complete SQL Guide 2020",
        img: "https://img-a.udemycdn.com/course/240x135/762616_7693_3.jpg",
        path: "/path",
      },
      {
        author: "Chris Haroun",
        title: "The Complete Financial Analyst Path",
        img: "https://img-a.udemycdn.com/course/480x270/637930_9a22_19.jpg",
        path: "/path",
      },
      {
        author: "Kirill Eremenko",
        title: "Beginner to Pro in Excel 2020",
        img: "https://img-a.udemycdn.com/course/240x135/321410_d9c5_4.jpg",
        path: "/path",
      },
      {
        author: "Joseph Phillips",
        title: "Tableau 2020 A-Z:Hands-On Tableau",
        img: "https://img-a.udemycdn.com/course/240x135/937678_abd2_2.jpg",
        path: "/path",
      },
    ];
    const paths = (
      <Menu style={{ width: 256 }}>
        {data.map(function (data, idx) {
          return (
            <Menu.Item key={idx}>
              <Card style={{}}>
                <Meta
                  avatar={<Avatar shape="square" src={data.img} />}
                  title={data.title}
                  description={data.author}
                />
              </Card>
            </Menu.Item>
          );
        })}
      </Menu>
    );
    const menu = (
      <Menu style={{ width: 256 }}>
        <Menu.Item key="edit">
          <a href="/edit">Edit Profile</a>
        </Menu.Item>
        <Menu.Item key="account">
          <a href="/account">Account</a>
        </Menu.Item>
        <Menu.Item key="notifications">
          <a href="/notifications">Notifications</a>
        </Menu.Item>
        <Menu.Item key="help">
          <a href="/help">Help</a>
        </Menu.Item>
        <Menu.Item key="signout">
          <a onClick={() => dispatch(logoutUser())}>Sign Out</a>
        </Menu.Item>
      </Menu>
    );
    headerRight = (
      <>
        <Dropdown overlay={paths}>
          <a
            className="ant-dropdown-link"
            onClick={(e) => e.preventDefault()}
          >
            My paths <DownOutlined />
          </a>
        </Dropdown>
        <Dropdown overlay={menu}>
          <Avatar size={64} icon={<UserOutlined />} />
        </Dropdown>
      </>
    );
  }

  return (
    <div className="header">
        {/* Replace backgroundColor with proper theme */}
        <Header style={{ height: '70px', padding: "0px 5%", backgroundColor: "white" }}>
          <Row>
            <Col span={18} order={1}>
              <Logo />
            </Col>
            {/* <Col span={12} order={3}>
              <Search
                style={{ verticalAlign: "middle" }}
                placeholder="Search your path"
                enterButton
              />
            </Col> */}
            <Col span={6} order={4}>
              <Space style={{ float: "right" }}>{headerRight}</Space>
            </Col>
          </Row>
        </Header>
      </div>
  )
}

export default BrainDripHeader
