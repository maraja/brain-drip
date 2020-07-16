import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import gql from "graphql-tag";

import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import LearningPaths from "./LearningPath/LearningPathList";
import LearningPathDetails from "./LearningPath/LearningPathDetails";
import LearningPathEdit from "./LearningPath/LearningPathEdit";
import LearningPathCreate from "./LearningPath/LearningPathCreate";
import LearningPathsSearchResult from "./LearningPath/LearningPathsSearchResult";
import UserHome from "./UserHome";
import UserLearningPaths from "./UserHome/LearningPaths";

import NotFound from '#root/components/bd-components/views/NotFound'
// import LearningPaths from "./LearningPath/LearningPaths";

// import 'antd/dist/antd.css'
import "./app.less";

function Root() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} />{" "}
      <Route path="/signup" component={Register} />{" "}
      <Route path="/home" component={UserHome} />{" "}

      <Route path="/user/learning-paths" component={UserLearningPaths} />{" "}


      <Route path="/learning-path" component={LearningPaths} exact />{" "}
      <Route path="/learning-path/search/:searchString" component={LearningPathsSearchResult} />{" "}
      <Route path="/learning-path/id/:id" component={LearningPathDetails} />{" "}
      <Route path="/learning-path/edit/:id" component={LearningPathEdit} />{" "}
      <Route path="/learning-path/create" component={LearningPathCreate} />{" "}
      <Route component={NotFound} />
    </Switch>
  );
}

export default Root;
