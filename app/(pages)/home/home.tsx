import React from "react";
import "../../App.css";
import banner from "../../../public/Med-Bank-Discount-web.webp";
import maleImage from "../../../public/ali.png";
import femaleImage from "../../../public/asma.png";
import groupImage from "../../../public/group.jpeg";
import article1 from "../../../public/article1.jpeg";
import article2 from "../../../public/article2.jpeg";
import article3 from "../../../public/article3.png";
import {
  FileSearchOutlined,
  AuditOutlined,
  FileProtectOutlined,
  CalendarOutlined,
  ClockCircleOutlined
} from "@ant-design/icons";
import Image from "next/image";
import { Carousel, Card, Row, Col, Divider } from "antd";

const contentStyle: React.CSSProperties = {
  width: "80%",
  height: "600px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
};

const HomeScreen: React.FC = () => {
  return (
    <div className="home">
      <Carousel>
        <div>
          <Image src={banner} alt="image 1" style={contentStyle} />
        </div>
      </Carousel>
      <Divider orientation="center"><h1>Our Specialist</h1></Divider>
      <Row justify="center" gutter={16}>
        <Col span={4}>
          <Card
            style={{ width: 300 }}
            cover={
              <>
                <Image src={maleImage} alt="image 1" style={{ height: 200 }} />
                <div>
                  <h1>Orthopedic</h1>
                  <div style={{ fontWeight: 'bold' }}>Dr. Mohammad Ahmed</div>
                  <div style={{}}>MBBS, MCPS, MSc</div>
                  <span>
                    <CalendarOutlined /> Not Available
                  </span>
                </div>
              </>
            }
          ></Card>
        </Col>
        <Col span={4}>
        <Card
          style={{ width: 300 }}
          cover={
            <>
            <Image src={femaleImage} alt="image 1" style={{height:200}}  />
            <div> 
              <h1>Orthpedic</h1>
              <div style={{fontWeight:'bold'}}>Dr. Mohammad Ahmed</div>
              <div style={{}}>MBBS, MCPS, MSc</div>
              <span>
              <CalendarOutlined /> Not Available
              </span>
            </div>
            </>
          }
        ></Card>
      </Col>
      <Col span={4}>
        <Card
          style={{ width: 300 }}
          cover={
            <>
            <Image src={maleImage} alt="image 1" style={{height:200}}  />
            <div> 
              <h1>Orthpedic</h1>
              <div style={{fontWeight:'bold'}}>Dr. Mohammad Ahmed</div>
              <div style={{}}>MBBS, MCPS, MSc</div>
              <span>
              <CalendarOutlined /> Not Available
              </span>
            </div>
            </>
          }
        ></Card>
      </Col>
      <Col span={4}>
        <Card
          style={{ width: 300 }}
          cover={
            <>
            <Image src={femaleImage} alt="image 1" style={{height:200}}  />
            <div> 
              <h1>Neurology</h1>
              <div style={{fontWeight:'bold'}}>Dr. Fatima Ahmed</div>
              <div style={{}}>MBBS, MCPS, MSc</div>
              <span>
              <CalendarOutlined /> Not Available
              </span>
            </div>
            </>
          }
        ></Card>
      </Col>
      </Row>
      <Row justify={"center"} style={{marginTop:"20px"}} align="middle" gutter={16}>
      <Col span={4}>
        <Card
          style={{ width: 300 }}
          cover={
            <Image src={groupImage} alt="image 1" style={{height:200}}  />
          }
        ></Card>
      </Col>
      <Col span={4}>
        <div>
          <h1 style={{ color: "GrayText", fontWeight: "bold" }}>
            Hospital Karachi
          </h1>

          <div style={{ color: "GrayText" }}>
            In the process of internal desktop applications development, many
            different design specs and implementations would be involved,
            which might cause designers and developers difficulties and
            duplication and reduce the efficiency of development.
          </div>
        </div>
      </Col>
    </Row>
    <Divider orientation="center">We made it simple
   <div>
    how it <span style={{color:'blue', fontWeight:'bold'}}>WORKS</span>
    </div> 
    </Divider>
    <Row justify={"center"} align="middle" style={{padding:48}} gutter={16}>
      <Col span={4}>
        <span
         key={"/doctors"} 
        // onClick={handleClick}
        >
          <FileSearchOutlined
            twoToneColor="#eb2f96"
            style={{ color: "blue", fontSize: "50px" }}
          />
          <div style={{ color: "black" }}>
            Search
            <div style={{ fontWeight: "bold", fontSize: "20PX" }}>Doctor</div>
          </div>
        </span>
      </Col>
      <Col span={4}>
        <span key={"/contact"} 
        // onClick={handleClick}
        >
          <AuditOutlined
            twoToneColor="#eb2f96"
            style={{ color: "blue", fontSize: "50px" }}
          />
          <div style={{ color: "black" }}>
          Get Instant
            <div style={{ fontWeight: "bold", fontSize: "20PX" }}>Appointment</div>
          </div>
        </span>
      </Col>
      <Col span={4}>
        <span key={"/contact"} //onClick={handleClick}
        >
          <FileProtectOutlined
            twoToneColor="#eb2f96"
            style={{ color: "blue", fontSize: "50px" }}
          />
          <div style={{ color: "black" }}>
          Leave Your
            <div style={{ fontWeight: "bold", fontSize: "20PX" }}>Feedback</div>
          </div>
        </span>
      </Col>
    </Row>
    <Divider orientation="center">Latest Article</Divider>
    <Row justify={"center"} align="middle" style={{padding:48}} gutter={16}>
      <Col span={4}>
      <Card
          style={{ width: 300 }}
          cover={<>
            <Image src={article1} alt="image 1" style={{height:200}}  />
            <div> 
              <h3 style={{color:"green"}}>Family Medicine</h3>
              <div style={{}}>World Childrens Day Celebration At Our Hospital</div>
              <span>
              <ClockCircleOutlined /> 20 Dec 2023
              </span>

            </div>
            </>
          }
        ></Card>
      </Col>
      <Col span={4}>
      <Card
          style={{ width: 300 }}
          cover={
            <>
            <Image src={article2} alt="image 1" style={{height:200}}  />
            <div> 
            <h3 style={{color:"green"}}>Blog</h3>
              <div style={{}}>Blood Donation For Thelesimia Patiant</div>
              <span>
              <ClockCircleOutlined /> 20 Dec 2023
              </span>

            </div>
            </>
          }
        ></Card>
      </Col>
      <Col span={4}>
      <Card
          style={{ width: 300 }}
          cover={
            <>
            <Image src={article3} alt="image 1" style={{height:200}}  />
            <div> 
            <h3 style={{color:"green"}}>Default</h3>
              <div style={{}}>Laproscopic Surgery</div>
              <span>
              <ClockCircleOutlined /> 20 Dec 2023
              </span>

            </div>
            </>
          }
        ></Card>
      </Col>
    </Row>
    </div>
  );
}

export default HomeScreen;
