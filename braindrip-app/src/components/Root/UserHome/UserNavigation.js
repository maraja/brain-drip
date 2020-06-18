import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  LikeOutlined,
  DislikeOutlined,
  HeartOutlined,
  BulbOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";
import LearningPaths from "./LearningPaths";
import LearningBuckets from "./LearningBuckets";
import Favorites from "./Favorites";
import Upvotes from "./Upvotes";
import Downvotes from "./Downvotes";
import SwitchComponents from "./SwitchComponents";

const { Content } = Layout;

const UserNavigation = () => {

  const [current, setTab] = useState("paths");

  const handleClick = value => setTab(value.key)

  return (
    <Content>
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Menu.Item key="paths" icon={<BulbOutlined />}>
          Learning Paths
          </Menu.Item>
        <Menu.Item key="buckets" icon={<DatabaseOutlined />}>
          Learning Buckets
          </Menu.Item>
        <Menu.Item key="favorites" icon={<HeartOutlined />}>
          Favorties
          </Menu.Item>
        <Menu.Item key="upvotes" icon={<LikeOutlined />}>
          Upvotes
          </Menu.Item>
        <Menu.Item key="downvotes" icon={<DislikeOutlined />}>
          Downvotes
          </Menu.Item>
      </Menu>

      <section style={{ marginTop: "20px" }}>
        <SwitchComponents active={current}>
          <LearningPaths name="paths" />
          <LearningBuckets name="buckets" />
          <Favorites name="favorites" />
          <Upvotes name="upvotes" />
          <Downvotes name="downvotes" />
        </SwitchComponents>
      </section>
    </Content>
  );
}


export default UserNavigation;
