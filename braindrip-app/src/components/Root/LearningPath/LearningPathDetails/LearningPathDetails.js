import React from "react";

import LearningPathDetailsContent from "#root/components/bd-components/LearningPathDetails.js";

import Layout from "#root/components/Root/Layout";
import Container from "#root/components/bd-components/Container";

const LearningPathDetails = (props) => {

  return (
    <Layout>
      <Container>
        <LearningPathDetailsContent id={props.match.params.id} />
      </Container>
    </Layout>
  );
};
export default LearningPathDetails;
