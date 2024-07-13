import React, { useState } from "react";
import { Form, Input, Button, Row, Col, Typography } from "antd";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
import "./contact.css";

const { Title, Paragraph } = Typography;

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send the data to a server)
    console.log(formData);
    // Clear the form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-container">
      <Row gutter={16}>
        <Col span={12} className="contact-details">
          <Title level={2}>Customer Care</Title>
          <Paragraph>
            <PhoneOutlined /> Phone Numbers:
          </Paragraph>
          <ul>
            <li>+1 234 567 890</li>
            <li>+1 987 654 321</li>
          </ul>
          <Paragraph>
            <MailOutlined /> Email IDs:
          </Paragraph>
          <ul>
            <li>support@example.com</li>
            <li>info@example.com</li>
          </ul>
        </Col>
        <Col span={12} className="contact-form-container">
          <Title level={1}>Contact Us</Title>
          <Form
            className="contact-form"
            layout="vertical"
            onFinish={handleSubmit}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item
              label="Message"
              name="message"
              rules={[
                { required: true, message: "Please enter your message" },
              ]}
            >
              <Input.TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
