import React, { useEffect, useRef } from "react";
import "./Contact.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import TopComponent from "./TopComponent";
import IMG from "../images/75/3.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_cok05ap", "template_6x43ct9", form.current, {
        publicKey: "3UIfrNwJYSuDhUsGF",
      })
      .then(
        () => {
          toast.success("SEND SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <TopComponent />
      <Container className="py-3">
        <Row>
          <Col lg={6} className="m-auto">
            <Image src={IMG} thumbnail />
          </Col>
          <Col lg={6}>
            <div className="contact-box ml-3">
              <h1 className="font-weight-light mt-2">Quick Contact</h1>
              <Form ref={form} onSubmit={sendEmail}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Name"
                    name="user_name"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="name@example.com"
                    name="user_email"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Phone"
                    name="user_phone"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    rows={3}
                    placeholder="Message"
                    name="message"
                  />
                </Form.Group>
                <Button type="submit">Submit</Button>
              </Form>
            </div>
          </Col>
          <Col lg={12}>
            <Card className="mt-4 border-0 mb-4">
              <Row>
                <Col lg={4} md={3}>
                  <div className="card-body d-flex align-items-center c-detail">
                    <div className="mx-3 align-self-center">
                      <img
                        src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png"
                        alt="address"
                      />
                    </div>
                    <div className="">
                      <h6 className="font-weight-medium">Address</h6>
                      <p>HCM City I</p>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={3}>
                  <div className="card-body d-flex align-items-center c-detail">
                    <div className="mx-3 align-self-center">
                      <img
                        src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png"
                        alt="phone"
                      />
                    </div>
                    <div className="">
                      <h6 className="font-weight-medium">Phone</h6>
                      <p>0939 0444 79</p>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={6}>
                  <div className="card-body d-flex align-items-center c-detail">
                    <div className="mx-3 align-self-center">
                      <img
                        src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png"
                        alt="email"
                      />
                    </div>
                    <div className="">
                      <h6 className="font-weight-medium">Email</h6>
                      <p>nguyencongminh.arch @gmail.com</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
