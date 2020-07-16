import React, { Component, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from 'react-router-dom';
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
import Logo from "#root/components/bd-components/Logo";
import { useLazyQuery } from "@apollo/client";


import { GET_LEARNING_PATHS_BY_USER } from "#root/graphql/queries"
import { useAuthToken } from "#root/auth/authToken";
import { logoutUser } from "#root/actions/userActions";

import { Button } from "antd";

let userId = ""
const MAX_LP_TO_SHOW = 10

function BrainDripHeader() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  // const [learningPaths, setLearningPaths] = useState([]);
  const [_fetchPaths, { loading, learningPaths, error }] = useLazyQuery(GET_LEARNING_PATHS_BY_USER, { variables: { userId } })
  const [ , , removeAuthToken] = useAuthToken();
  let headerRight;


  const fetchPaths = (e) => {
    e.preventDefault();
    console.log(user)
    userId = user.id
    _fetchPaths()
  }

  const logout = (e) => {
    e.preventDefault();
    removeAuthToken();
    dispatch(logoutUser());
    history.push("/login");
  }

  useEffect(() => {
    console.log(isLoggedIn)
    console.log(user)
    setIsLoggedIn(user ? true : false)
  }, [user])
  console.log(learningPaths);
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
    const paths = (
      <Menu style={{ width: 256 }}>
        {data && data.userLearningPaths.slice(0, MAX_LP_TO_SHOW).map(function (p, idx) {
          return (
            <Menu.Item key={idx}>
              <Link to={`/learning-path/id/${p.id}`}>{p.name}</Link>
            </Menu.Item>
          );
        })}
        <Menu.Divider />
        <Menu.Item>
          <Link to={`/user/learning-paths`}>View All</Link>
        </Menu.Item>
      </Menu>
    );
    const menu = (
      <Menu style={{ width: 256 }}>
        <Menu.Item key="home">
          <Link to='/home'>Home</Link>
        </Menu.Item>
        <Menu.Item key="account">
          <Link to='/account'>Account</Link>
        </Menu.Item>
        <Menu.Item key="notifications">
          <Link to='/notifications'>Notifications</Link>
        </Menu.Item>
        <Menu.Item key="help">
          <Link to='/help'>Help</Link>
        </Menu.Item>
        <Menu.Item key="signout">
          <Link to='/logout' onClick={logout}>Sign Out</Link>
        </Menu.Item>
      </Menu>
    );
    headerRight = (
      <>
        <Dropdown
          overlay={paths}
          trigger={['click']}
        >
          <a
            className="ant-dropdown-link"
            onClick={fetchPaths}
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
