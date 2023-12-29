"use client"
import { Menu, Row, Col, Space } from "antd";
import "../App.css";
import Image from "next/image";
import image from "../../public/logo.jpeg";
import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  AppstoreOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { useRouter } from 'next/navigation'; // Change from 'next/navigation' to 'next/router'

interface MenuItem {
  label: string;
  key: string;
  icon: JSX.Element;
}

const items: MenuItem[] = [
  {
    label: "Home",
    key:"/",
    icon: <MailOutlined />,
  },
  {
    label: "About Us",
    key: "/about",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Pharmacy",
    key: "/pharmacy",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Search Doctors",
    key: "/doctor",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Contact us",
    key: "/contact",
    icon: <AppstoreOutlined />,
  },
];

const Header: React.FC = () => {
  const router = useRouter();

  const handleClick = (e: any) => {
    const key = e.key;
    router.push(key);
  };

  return (
    <>
      <Row
        style={{
          backgroundColor: "#7A7A7A",
          display: "flex",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Col span={12}>
          Emergency Help!
          <p style={{ color: "#1d9dd9" }}>++92 21 349991-4</p>
        </Col>
        <Col span={12}>
          <Space>
            <HomeOutlined />
            <SettingFilled />
            <SmileOutlined />
            <SyncOutlined spin />
            <SmileOutlined rotate={180} />
            <LoadingOutlined />
          </Space>
        </Col>
      </Row>
      <Row
        style={{
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          padding: 30,
        }}
      >
        <Col span={6}>
          <Image src={image} alt="Logo" className="logo" />
        </Col>
        <Col span={18}>
          <Menu mode="horizontal" onClick={handleClick}>
            {items.map(item => (
              <Menu.Item key={item.key} icon={item.icon}>
                {item.label}
              </Menu.Item>
            ))}
          </Menu>
        </Col>
      </Row>
    </>
  );
};

export default Header;
