import React, { Component } from "react";
import HomeContent from "#root/components/Root/Home/HomeContent";

import Layout from "#root/components/Root/Layout";
import Container from "#root/components/bd-components/Container";

function Home() {
  return (
    <Layout>
      <Container>
        <HomeContent />
      </Container>
    </Layout>
  )
}

export default Home;
