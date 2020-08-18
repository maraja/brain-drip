import React from "react";
import UserNavigation from "./UserNavigation";
import { Typography } from "antd";
const { Title } = Typography;

const UserContent = () => {

  return (
    <>
      <Title level={2}>My BrainDrip</Title>
      <UserNavigation />
    </>
  );
}


export default UserContent;
