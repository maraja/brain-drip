import React from "react";
import UserContent from "#root/components/Root/UserHome/UserContent.js";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import Layout from "#root/components/Root/Layout";
import Container from "#root/components/bd-components/Container";


const UserHome = () => {
  const { user } = useSelector(state => state.user);
  
  if (!user) {
    return <Redirect to="/" />;
  }

  return (

    <Layout>
      <Container>
        <UserContent />
      </Container>
    </Layout>
  );

};

export default UserHome;