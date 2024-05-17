import React, { useEffect, useState } from "react";
import TopComponent from "./TopComponent";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FetchData from "./FetchData";
import { HashLink } from "react-router-hash-link";

const Projects = () => {
  const imagesData = FetchData();

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="project-container">
      <TopComponent />
      <nav className="navbar navbar-light">
        <div
          className="container-fluid"
          style={{
            justifyContent: "flex-end",
          }}
        >
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => handleSearch(e)}
            />
          </form>
        </div>
      </nav>
      <Row xs={1} md={3} className="g-4 m-3">
        {imagesData
          .filter((item) => {
            return search === "" || item.id.toString().includes(search);
          })
          .map((item, index) => (
            <Col key={index}>
              <Card>
                <Card.Img
                  variant="top"
                  style={{
                    height: "20rem",
                    objectFit: "cover",
                    objectPosition: "center",
                    borderRadius: "0.5rem",
                  }}
                  src={`https://www.1207studio.com/images/1207/${item.id}/1.jpg`}
                />
                <Card.Body>
                  <Card.Title>Project {item.id}</Card.Title>
                  <Card.Text>
                    <HashLink
                      to={`/home/#${item.id}`}
                      style={{
                        color: "black",
                        textDecoration: "none",
                        letterSpacing: "0.05rem",
                        cursor: "pointer",
                      }}
                    >
                      View
                    </HashLink>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Projects;
