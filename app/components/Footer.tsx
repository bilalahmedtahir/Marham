import React from 'react';
import { Row, Col, Layout, Divider } from 'antd';

const FooterComponent: React.FC = () => {
  return (
    <div style={{ background: '#76bc21', padding: '72px 0' }}>
      <Row justify={'center'} align={'middle'} gutter={16}>
        <Col xs={24} sm={12} md={6}>
          <h3>Categories</h3>
          <ul>
            <li><a href="#">Category 1</a></li>
            <li><a href="#">Category 2</a></li>
            <li><a href="#">Category 3</a></li>
          </ul>
        </Col>
        <Col xs={24} sm={12} md={4}>
          <h3>Contact Us</h3>
          <p>Phone: +1234567890</p>
          <p>Email: example@example.com</p>
        </Col>
        <Col xs={24} sm={12} md={4}>
          <h3>Policies</h3>
          <p>Privacy Policy</p>
          <p>Quality Policy</p>
          <p>Patient Rights & Responsibilities</p>
        </Col>
      </Row>
      <Divider />
      <p style={{ textAlign: 'center', margin: 0 }}>
        © {new Date().getFullYear()} Your Website Name
      </p>
    </div>
  );
};

export default FooterComponent;
