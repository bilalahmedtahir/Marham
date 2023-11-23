'use client'
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Row, Col, Divider, Select, Form, Button, Card } from "antd";

const { Option } = Select;

// const handleChange = (value: string) => {
//   console.log(`selected ${value}`);
// };

const Doctors: React.FC = () => {
  return (
    <div className="home">
      <Row>
        <Col span={24}>
          <Divider>Make A Smart Choice</Divider>
        </Col>

        <Divider orientation="left">Find Doctor</Divider>
        <Col span={24}>
          <Form
            name="horizontal_login"
            layout="inline"
            //   onFinish={onFinish}
          >
            <Form.Item
              name="gender"
              label="Doctor List"
              rules={[{ required: true }]}
            >
              <Select
                placeholder="Select"
                //   onChange={onGenderChange}
                allowClear
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>

            <Form.Item shouldUpdate>
              {() => (
                <Button type="primary" htmlType="submit">
                  Log in
                </Button>
              )}
            </Form.Item>
          </Form>
        </Col>
      </Row>

      <Row justify={"center"} align="middle" style={{ padding: 48 }} gutter={16}>
        <Col span={4}>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src={
                  "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                }
              />
            }
          ></Card>
        </Col>
        <Col span={4}>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src={
                  "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                }
              />
            }
          ></Card>
        </Col>
        <Col span={4}>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src={
                  "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                }
              />
            }
          ></Card>
        </Col>
      </Row>
    </div>
  );
};

export default Doctors;
