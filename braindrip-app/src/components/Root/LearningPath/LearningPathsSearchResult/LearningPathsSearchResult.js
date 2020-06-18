import React from "react";

import LearningPathsContent from "#root/components/bd-components/LearningPathsSearchResult.js";

import Layout from "#root/components/Root/Layout";
import Container from "#root/components/bd-components/Container";

const LearningPathsSearchResult = (props) => {
  return (

    <Layout>
      <Container>
        <LearningPathsContent searchString={props.match.params.searchString} />
      </Container>
    </Layout>
  );

};

export default LearningPathsSearchResult;
