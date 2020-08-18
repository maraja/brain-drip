import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import { Card, Row, Col, Typography, List, Space } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined, DislikeOutlined, EditOutlined } from '@ant-design/icons';

import { GET_LEARNING_BUCKETS_BY_USER } from "#root/graphql/queries"

import LearningBucketSmall from "#root/components/bd-components/views/LearningBucketSmall"

const { Paragraph } = Typography;

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const LearningBucketList = () => {
  const { user } = useSelector(state => state.user);
  const { data, loading, error, refetch } = useQuery(GET_LEARNING_BUCKETS_BY_USER, {})

  if (loading) return <Paragraph>Loading ...</Paragraph>;
  if (data && user.id) {
    data.learningBuckets = data.userLearningBuckets;
    console.log(data.learningBuckets);
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
    dataSource={data.learningBuckets}
    renderItem={item => (
      <List.Item
        actions={[
          <Link to={`/learning-bucket/edit/${item.id}`} key="list-loadmore-edit"><IconText icon={EditOutlined} text="edit" key="list-vertical-edit" /></Link>
        ]}
      >
        <LearningBucketSmall learningBucket={item} />
      </List.Item>
    )} />
  );
};

export default LearningBucketList;
