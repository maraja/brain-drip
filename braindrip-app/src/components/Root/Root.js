import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import gql from "graphql-tag";
import { useQuery } from "react-apollo";

import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import LearningPaths from "./LearningPath/LearningPathList";
import LearningPathDetails from "./LearningPath/LearningPathDetails";
import UserHome from "./UserHome";
// import LearningPaths from "./LearningPath/LearningPaths";

// import 'antd/dist/antd.css'
import "./app.less";

const Wrapper = styled.div`
  box-sizing: border-box;
  height: 100%;
  padding: 1rem;
  width: 100%;
`;

const query = gql`
  {
    user_list {
      id
      firstName
      lastName
      learningPaths {
        name
        description
        tags
        difficulty
        learningPathResources {
          id
          learningPathId
          description
        }
      }
    }
  }
`;

function About() {
  return (
    <Wrapper>
      <Container>
        <h1>This is my about page.</h1>
        <Button type="primary" htmlType="submit">
          确定
        </Button>
      </Container>
      {/* <LearningPaths /> */}
    </Wrapper>
  );
}

// const LearningPaths = () => {
//   const { data, loading, refetch } = useQuery(query);

//   if (loading || !data) return "Loading...";

//   return (
//     <Wrapper>
//       <div>
//         {data.user_list.map((user) => (
//           <div key={user.id}>
//             <h2 className="text-gray-500">{user.firstName}</h2>
//             <h4>{user.lastName}</h4>
//             {user.learningPaths &&
//               user.learningPaths.map((lp) => (
//                 <div key={lp.id}>
//                   <h2>{lp.name}</h2>
//                   <h4>{lp.description}</h4>
//                 </div>
//               ))}
//           </div>
//         ))}
//       </div>
//       {/* <AddListing
//             onAddListing={() => {
//             refetch();
//             }}
//         /> */}
//     </Wrapper>
//   );
// };

function Root() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} />{" "}
      <Route path="/signup" component={Register} />{" "}
      <Route path="/home" component={UserHome} />{" "}
      <Route path="/learning-path/id/:id" component={LearningPathDetails} />{" "}
      <Route path="/learning-path" component={LearningPaths} />{" "}
      {/* <Route path="/shop" component={Shop} /> */}{" "}
    </Switch>
  );
}

export default Root;
