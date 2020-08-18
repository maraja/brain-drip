import React from "react";
import { Anchor, Row, Col } from "antd";
const { Link } = Anchor;

const ImportantLinks = () => {
  return (
    <div>
      <Row>
        <Col span={6} order={1}>
          <Anchor>
            <Link
              href="/about"
              title="About us"
            />
            <Link
              href="/blog"
              title="Blog"
            />
            <Link
              href="/help"
              title="Help and Support"
            />
            <Link
              href="/contact"
              title="Contact"
            />
          </Anchor>
        </Col>
        <Col span={6} order={2}>
          <Anchor>
            <Link
              href="/terms"
              title="Terms"
            />
            <Link
              href="/policies"
              title="Privacy policy and cookie policy"
            />
            <Link
              href="/sitemap"
              title="Sitemap"
            />
            <Link
              href="/affiliate"
              title="Affiliate"
            />
          </Anchor>
        </Col>
      </Row>
    </div>
  );
}

export default ImportantLinks;
