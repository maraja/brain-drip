import React from "react";

import LearningPathCreateContent from "#root/components/bd-components/LearningPathCreate";

import Layout from "#root/components/Root/Layout";
import Container from "#root/components/bd-components/Container";

const LearningPathCreate = () => {

  return (
    <Layout>
      <Container>
        <LearningPathCreateContent />
      </Container>
    </Layout>
  );
};
export default LearningPathCreate;
