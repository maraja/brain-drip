import React, { useState, useEffect, useCallback, Component } from "react";
import { Redirect, Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

import LearningBucketList from "#root/components/Root/LearningBucket/LearningBucketList";

import Layout from "#root/components/Root/Layout";
import Container from "#root/components/bd-components/Container";
import { Card, Typography, Modal, Form, Input, Radio, Button } from "antd";
const { Title } = Typography;
const { TextArea } = Input;

const LearningBuckets = (props) => {
  return (
    <>

      <h1>My Learning Bucket</h1>
      <Link to="/learning-bucket/create" >+ Create Learning Bucket</Link>

      <LearningBucketList />
    </>
  );
};

export default LearningBuckets;
