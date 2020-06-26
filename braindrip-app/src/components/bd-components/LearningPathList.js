import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import { Card, Row, Col, Typography, List, Space } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined, DislikeOutlined, EditOutlined } from '@ant-design/icons';

import { GET_LEARNING_PATHS_BY_USER, GET_LEARNING_PATHS_ALL } from "#root/graphql/queries"


import LearningPathSmall from "#root/components/bd-components/views/LearningPathSmall"

const { Paragraph } = Typography;

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);


const LearningPathList = ({ newData, isUser = false, rowSpan = 8 }) => {
  const { user } = useSelector(state => state.user);
  const { data, loading, error, refetch } = user.id ? 
    useQuery(GET_LEARNING_PATHS_BY_USER, {variables: {userId: user.id}}) : 
    useQuery(GET_LEARNING_PATHS_ALL)

  if (loading) return <Paragraph>Loading ...</Paragraph>;
  if (data && user.id) {
    data.learningPaths = data.userLearningPaths;
  }

  if (newData) {
    refetch();
  }

  return (
      <List
      itemLayout="vertical"
      size="large"
      pagination={{
        style: { textAlign: 'center'},
        size: "small",
        onChange: page => {
          console.log(page);
        },
        pageSize: 10,
      }}
    dataSource={data.learningPaths}
    renderItem={item => (
      <List.Item
        actions={[
          <IconText icon={DislikeOutlined} text={item.downVotes} key="list-vertical-dislike-o" />,
          <IconText icon={LikeOutlined} text={item.upVotes} key="list-vertical-like-o" />,
          <Link to={`/learning-path/edit/${item.id}`} key="list-loadmore-edit"><IconText icon={EditOutlined} text="edit" key="list-vertical-edit" /></Link>
        ]}
      >
        <LearningPathSmall learningPath={item} />
      </List.Item>
    )} />
      // <Row>
      //   {data &&
      //     data.learningPaths.map((r) => (
      //       <Col key={r.id} span={rowSpan}>
      //         <Card
      //           title={r.name}       
      //           extra={<Link to={`/learning-path/id/${r.id}`}>Details</Link>}
      //         >
      //           {r.description}
      //         </Card>
      //       </Col>
      //     ))}
      // </Row>
  );
};

LearningPathList.propTypes = {};

export default LearningPathList;
