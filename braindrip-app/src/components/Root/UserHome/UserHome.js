import React from "react";
import UserContent from "#root/components/Root/UserHome/UserContent.js";

import Layout from "#root/components/Root/Layout";
import Container from "#root/components/bd-components/Container";


const UserHome = () => {
  return (

    <Layout>
      <Container>
        <UserContent />
      </Container>
    </Layout>
  );

};

export default UserHome;