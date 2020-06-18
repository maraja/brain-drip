import React from "react";
import { Divider } from "antd";
import HomeBanner from "./HomeBanner";
import PopularPaths from "./PopularPaths";
import BrainDripGoals from "./BrainDripGoals";

const BrainDripContent = () => {

  return (
    <>
      <HomeBanner />
      <Divider />
      <BrainDripGoals />
      <Divider />
      <PopularPaths />
    </>
  );
}


export default BrainDripContent;
