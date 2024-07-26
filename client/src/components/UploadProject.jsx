import imageCompression from "browser-image-compression";
import moment from "moment";
import { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import { toast } from "react-toastify";
import { deleteProject, getAllProject, uploadProject } from "service";
import imageNull from "../assets/3.jpg";

const UploadProject = () => {
  const [projectName, setProjectName] = useState("");
  const [base64Images, setBase64Images] = useState([]);
  const [dataProject, setDataProject] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(false);

  const handleGetAllProject = async () => {
    setLoadingData(true);
    try {
      const response = await getAllProject();
      if (response.status === 200) {
        setDataProject(response.data.data);
        setLoadingData(false);
      }
    } catch (error) {
      console.error("GetAllProject ~ error:", error);
    }
  };

  useEffect(() => {
    handleGetAllProject();
  }, []);

  const handleProjectName = (event) => {
    setProjectName(event.target.value);
  };

  const handleFileChange = async (event) => {
    const files = Array.from(event.target.files);

    const compressedFiles = await Promise.all(
      files.map(async (file) => {
        try {
          const compressedFile = await imageCompression(file);
          const reader = new FileReader();
          return new Promise((resolve, reject) => {
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(compressedFile);
          });
        } catch (error) {
          console.error("Error while compressing image:", error);
        }
      })
    );

    setBase64Images((prevBase64Images) => [
      ...prevBase64Images,
      ...compressedFiles,
    ]);
  };

  const handleUpload = async () => {
    setLoading(true);
    try {
      const response = await uploadProject(projectName, base64Images);

      if (response.status === 200) {
        setProjectName("");
        setBase64Images([]);

        toast.success("Nhập thành công");
        handleGetAllProject();
      }
    } catch (error) {
      toast.error("Nhập khong thành công");
      console.error("UploadProject ~ error:", error);
    }
    setLoading(false); // Stop loading
  };

  const handleDeleteProject = async (id) => {
    try {
      await deleteProject(id);
      toast.success("Xóa thành công");
      handleGetAllProject();
    } catch (error) {
      toast.error("Xóa không thành công: " + error.message);
    }
  };

  return (
    <section
      className="w-100 px-4 py-5"
      style={{
        backgroundColor: "#9de2ff",
        minHeight: "100vh",
      }}
    >
      <Row className="justify-content-md">
        <Col sm={8}>
          <Form.Group className="mb-3">
            <Form.Label>Project Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter project name"
              onChange={handleProjectName}
              value={projectName}
            />
          </Form.Group>
        </Col>
        <Form.Label>Multiple files input</Form.Label>
        <Col sm={8}>
          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Control type="file" multiple onChange={handleFileChange} />
          </Form.Group>
        </Col>
        <Col sm={4}>
          <Button variant="primary" onClick={handleUpload} disabled={loading}>
            {loading ? (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            ) : (
              "Upload"
            )}
          </Button>
        </Col>
      </Row>
      <div>
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "0.5rem 0",
          }}
        >
          <div>Images: {base64Images.length}</div>
          <Button onClick={() => setBase64Images([])}>Reset</Button>
        </Col>
        {base64Images.length > 0 && (
          <div
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            {base64Images.map((base64, index) => (
              <div key={index}>
                <img
                  src={base64}
                  alt={`upload-${index}`}
                  width="auto"
                  height="100px"
                  style={{ marginRight: "5px", marginBottom: "5px" }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <Form.Label>PROJECT</Form.Label>{" "}
      {loadingData ? (
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
      ) : (
        <div>
          {dataProject.length > 0 && (
            <Accordion defaultActiveKey="0">
              {dataProject.map((item, index) => (
                <Accordion.Item eventKey={`${index}`} key={index}>
                  <Accordion.Header>
                    #{item.id} Project Name: {item.name}
                  </Accordion.Header>
                  <Accordion.Body>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                        padding: "10px",
                        backgroundColor: "#f1f1f1",
                      }}
                    >
                      <img
                        src={
                          item?.thumbnail === null ? imageNull : item?.thumbnail
                        }
                        alt={`upload-${index}`}
                        width="auto"
                        height="100px"
                        style={{
                          marginRight: "5px",
                          marginBottom: "5px",
                        }}
                      />
                      Created At:{" "}
                      {moment(item.createdAt).utc().format("DD-MM-YYYY")}
                      <Button
                        variant="primary"
                        onClick={() => handleDeleteProject(item.id)}
                        disabled={loadingData}
                      >
                        Delete Project
                      </Button>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          )}
        </div>
      )}
    </section>
  );
};

export default UploadProject;
