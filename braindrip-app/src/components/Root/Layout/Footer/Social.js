import React from "react";
import { Space } from "antd";
import {
  FacebookFilled,
  LinkedinFilled,
  TwitterSquareFilled,
  InstagramFilled,
} from "@ant-design/icons";
const Social = () => {
  return (
    <div className="social">
      <Space>
        <a
          href="https://facebook.com/braindrip"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookFilled style={{ fontSize: "30px", color: "#555" }} />
        </a>
        <a
          href="https://linkedin.com/in/braindrip"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinFilled style={{ fontSize: "30px", color: "#555" }} />
        </a>
        <a
          href="https://twitter.com/braindrip"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterSquareFilled style={{ fontSize: "30px", color: "#555" }} />
        </a>
        <a
          href="https://instagram.com/braindrip"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramFilled style={{ fontSize: "30px", color: "#555" }} />
        </a>
      </Space>
    </div>
  );
}
export default Social;
