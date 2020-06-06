import React, { Component } from "react";
import { Typography, Row, Col, Card } from "antd";
const { Title } = Typography;

class PopularPaths extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = [
      {
        author: "Jose Portilla",
        title: "The Complete SQL Guide 2020",
        img: "https://img-a.udemycdn.com/course/240x135/762616_7693_3.jpg",
        path: "/path",
      },
      {
        author: "Chris Haroun",
        title: "The Complete Financial Analyst Path",
        img: "https://img-a.udemycdn.com/course/480x270/637930_9a22_19.jpg",
        path: "/path",
      },
      {
        author: "Kirill Eremenko",
        title: "Beginner to Pro in Excel 2020",
        img: "https://img-a.udemycdn.com/course/240x135/321410_d9c5_4.jpg",
        path: "/path",
      },
      {
        author: "Joseph Phillips",
        title: "Tableau 2020 A-Z:Hands-On Tableau",
        img: "https://img-a.udemycdn.com/course/240x135/937678_abd2_2.jpg",
        path: "/path",
      },
    ];
    return (
      <section className="popular">
        <div className="site-card-wrapper">
          <div>
            <Title level={2}>Popular Learning Paths</Title>
          </div>
          <Row gutter={16}>
            {data.map(function (data, idx) {
              return (
                <Col span={6} key={idx}>
                  <a href={data.path}>
                    <Card
                      style={{
                        height: 300,
                      }}
                      cover={<img src={data.img} />}
                    >
                      <Title level={4}>{data.title} </Title>
                      <p>{data.author}</p>
                    </Card>
                  </a>
                </Col>
              );
            })}
          </Row>
        </div>
        ,
      </section>
    );
  }
}

export default PopularPaths;
