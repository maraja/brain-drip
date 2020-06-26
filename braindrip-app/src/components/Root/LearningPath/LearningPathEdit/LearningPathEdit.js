import React from "react";

import LearningPathEditContent from "#root/components/bd-components/LearningPathEdit.js";

import Layout from "#root/components/Root/Layout";
import Container from "#root/components/bd-components/Container";

const LearningPathEdit = (props) => {

  return (
    <Layout>
      <Container>
        <LearningPathEditContent id={props.match.params.id} />
      </Container>
    </Layout>
  );
};
export default LearningPathEdit;
