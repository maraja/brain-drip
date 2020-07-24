import React, { useState, useEffect, useCallback, Component } from "react";
import { Redirect, Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

import LearningPathList from "#root/components/Root/LearningPath/LearningPathList";

import Layout from "#root/components/Root/Layout";
import Container from "#root/components/bd-components/Container";
import { Card, Typography, Modal, Form, Input, Radio, Button } from "antd";
const { Title } = Typography;
const { TextArea } = Input;

import { CREATE_LEARNING_PATH } from "#root/graphql/mutations"

const difficulties = ['beginner', 'intermediate', 'advanced']

const LearningPaths = (props) => {

  const { user } = useSelector(state => state.user);

  return (
    <Layout>
    <Container>

      <h1>My Learning Paths</h1>
      <Link to="/learning-path/create" >+ Create Learning Path</Link>

      <LearningPathList />
    </Container>
    </Layout>
  );
};

export default LearningPaths;
