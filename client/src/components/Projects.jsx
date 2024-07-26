import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { HashLink } from "react-router-hash-link";
import TopComponent from "./TopComponent";
// import { getAllProject } from "service";
import { useSelector } from "react-redux";
import imageNull from "../assets/3.jpg";
const Projects = () => {
  // const [dataProject, setDataProject] = useState([]);

  const [search, setSearch] = useState("");

  // const handleGetAllProject = useCallback(async () => {
  //   try {
  //     const response = await getAllProject();
  //     if (response.status === 200) {
  //       setDataProject(response.data.data);
  //     }
  //   } catch (error) {
  //     console.error("UploadProject ~ error:", error);
  //   }
  // }, []);

  const removeAccents = (str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // useEffect(() => {
  //   handleGetAllProject();
  // }, [handleGetAllProject]);

  const dataProject = useSelector((state) => state.global.dataProject);

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
        {dataProject
          .filter((item) => {
            return (
              search === "" ||
              removeAccents(item.name.toString()).includes(
                removeAccents(search)
              ) ||
              item.id.toString().includes(search)
            );
          })
          .map((item, index) => (
            <Col key={index}>
              <HashLink
                to={`/home/#${item.id}`}
                style={{
                  color: "black",
                  textDecoration: "none",
                  letterSpacing: "0.05rem",
                  cursor: "pointer",
                }}
              >
                <Card>
                  <Card.Img
                    variant="top"
                    style={{
                      height: "20rem",
                      objectFit: "cover",
                      objectPosition: "center",
                      borderRadius: "0.5rem",
                    }}
                    src={item?.thumbnail === null ? imageNull : item?.thumbnail}
                  />
                  <Card.Body>
                    <Card.Title>
                      #{item.id} {item.name}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </HashLink>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Projects;
