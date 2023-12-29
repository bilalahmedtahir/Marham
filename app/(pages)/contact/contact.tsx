"use client"
import React from 'react';
import { Row, Col, Divider, Input, Form, Button } from 'antd';
import {
  PushpinOutlined,
  MailOutlined,
  PhoneOutlined,
} from '@ant-design/icons';

// const onFinish = (values: any) => {
//   console.log('Success:', values);
// };

// const onFinishFailed = (errorInfo: any) => {
//   console.log('Failed:', errorInfo);
// };

const Contact: React.FC = () => {
  return (
    <div className="home">
      <Row justify={'center'} align="middle" style={{ padding: 48 }} gutter={16}>
        <Divider style={{ fontSize: 36, fontWeight: 'bold' }}>
          Always Get In Touch Our Contact Details
        </Divider>

        <Col span={4}>
          <span
            style={{
              display: 'block',
              outline: '1px solid grey',
              padding: 20,
            }}
          >
            <PushpinOutlined
              twoToneColor="#eb2f96"
              style={{ color: 'blue', fontSize: '50px' }}
            />
            <p style={{ color: 'black' }}>ST 2/2، Block 5 Gulshan-e-Iqbal</p>
          </span>
        </Col>
        <Col span={4}>
          <span
            style={{
              display: 'block',
              outline: '1px solid grey',
              padding: 20,
            }}
          >
            <MailOutlined
              twoToneColor="#eb2f96"
              style={{ color: 'blue', fontSize: '50px' }}
            />
            <p style={{ color: 'black' }}>info@childrenhospitalkarachi.com</p>
          </span>
        </Col>
        <Col span={4}>
          <span
            style={{
              display: 'block',
              outline: '1px solid grey',
              padding: 20,
            }}
          >
            <PhoneOutlined
              twoToneColor="#eb2f96"
              style={{ color: 'blue', fontSize: '50px' }}
            />
            <p style={{ color: 'black' }}>+92 213 4999181</p>
          </span>
        </Col>
      </Row>

      <Row justify={'center'} align="middle" style={{ padding: 48 }} gutter={16}>
        <Divider style={{ fontSize: 36, fontWeight: 'bold' }}>
          Have A Query? Ask For Free Online Help
        </Divider>

        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Any Query"
            name="query"
            rules={[
              {
                required: true,
                message: 'Please input your query!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Row>
    </div>
  );
};

export default Contact;
