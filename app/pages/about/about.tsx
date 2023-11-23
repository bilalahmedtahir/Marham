import React from "react";
import { Row, Col, Divider } from "antd";
import {
  FileSearchOutlined,
  AuditOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";

const About: React.FC = () => {
  return (
    <div className="home">
      <Row justify="center">
        <Col span={20}>
          <Divider>
            Make A Smart Choice
            <p style={{ fontWeight: "bold", fontSize: 20 }}>
              Take A Right Step{" "}
              <span style={{ color: "blue" }}> For Your Life </span>
            </p>
          </Divider>
          <p style={{ color: "grey", marginBottom: 20 }}>
          Children’s Hospital Karachi will provide compassionate, accessible,
            high quality, and cost-effective healthcare to the local community,
            Karachi city, Pakistan, as well as the neighboring countries; the
            hospital will particularly cater pediatric medicine, surgery, and
            sub-specialties under one roof. At Children’s Hospital Karachi, we
            place as much emphasis on a child’s emotional needs as we do on
            caring for a child’s illness. Children are cared for in a facility
            especially designed for the unique care of children. Reflecting the
            best practices in paediatric medicine, our inpatient units are
            organized to treat children with common conditions or illnesses.
            Each of our condition-specific specialty care units is staffed by
            expert physicians and nurses solely dedicated to the healthcare
            needs of their patients.
          </p>

          <b style={{ color: "black" }}>
            Greeting & Welcome
            <p style={{ fontWeight: "bold", fontSize: 20, marginBottom: 20 }}>
              Dr. Saqib Ansari
            </p>
          </b>
          <p style={{ color: "grey" }}>
          Children’s Hospital Karachi (CHK) is a state of the art 50 bed
            hospital specialized to provide comprehensive patient care and
            standardized treatment to its patients. The hospital is situated in
            the heart of Karachi city, Gulshan-e-Iqbal Block 5. Children’s
            Hospital Karachi offers services of all paediatric sub-specialties
            under one roof. CHK particularly has an objective to provide core
            expertise in the treatment of benign and malignant blood disorders
            including thalassemia, leukemia, lymphomas, aplastic anemia,
            bleeding disorders; in addition to the treatment of bone marrow
            transplant patients. We have a strong belief that prevention is
            better than cure, and Chorionic Villus Sampling is performed at
            Children’s Hospital Karachi by specialized and experienced
            consultants for earlier identification of genetic and chromosomal
            abnormalities in the fetus. Children’s Hospital Karachi laboratory
            system prides on its distinctive and reliable diagnostic services.
            Bone Marrow Testing and Genetic Testing are routinely performed at
            CHK. With over 60 faculty members representing a broad range of
            professional training and expertise, our dedicated team of
            professionals is committed to provide all-inclusive patient care. We
            are trained to provide the highest level of care to every patient
            and offer the highest level of clinical education to the next
            generation of doctors by excelling in patient examination,
            diagnostic services, clinical practices and research. We also pride
            ourselves in establishing evidence-based practices, research and
            innovation to improve national stature and recognition of our
            hospital. Children’s Hospital Karachi partners with patients and
            families to ensure patient and family centered healthcare delivery
            which begins from a child’s visit to the OPD. Continued support is
            provided throughout the admission and treatment process until the
            discharge. Effective and efficient communication of the follow up
            plan remains our forte. We strive to make Children’s Hospital a
            center of reference for Pediatric services and a reliable source for
            the community.
          </p>
        </Col>
      </Row>
      <Row justify={"center"} align="middle" style={{ padding: 48 }} gutter={16}>
        <Col span={4}>
          <span
            style={{
              display: "block",
              outline: "1px solid grey",
            }}
          >
            <FileSearchOutlined
              twoToneColor="#eb2f96"
              style={{ color: "blue", fontSize: "50px" }}
            />
            <p style={{ color: "black" }}>
              Search
              <p style={{ fontWeight: "bold", fontSize: "20px" }}>Doctor</p>
            </p>
          </span>
        </Col>
        <Col span={4}>
          <span
            style={{
              display: "block",
              outline: "1px solid grey",
            }}
          >
            <AuditOutlined
              twoToneColor="#eb2f96"
              style={{ color: "blue", fontSize: "50px" }}
            />
            <p style={{ color: "black" }}>
              Get Instant
              <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                Appointment
              </p>
            </p>
          </span>
        </Col>
        <Col span={4}>
          <span
            style={{
              display: "block",
              outline: "1px solid grey",
            }}
          >
            <FileProtectOutlined
              twoToneColor="#eb2f96"
              style={{ color: "blue", fontSize: "50px" }}
            />
            <p style={{ color: "black" }}>
              Leave Your
              <p style={{ fontWeight: "bold", fontSize: "20px" }}>Feedback</p>
            </p>
          </span>
        </Col>
      </Row>
    </div>
  );
};

export default About;
