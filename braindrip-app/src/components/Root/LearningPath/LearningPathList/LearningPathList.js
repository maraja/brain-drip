import React from "react";

import LearningPathContent from "#root/components/bd-components/LearningPathList.js";
import Layout from "#root/components/Root/Layout";
import Container from "#root/components/bd-components/Container";

const LearningPathList = () => {
  return (
    <Layout>
      <Container>
        <LearningPathContent />
      </Container>
    </Layout>
  );
};

export default LearningPathList;
