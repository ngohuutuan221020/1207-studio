import imageCompression from "browser-image-compression";
import TopComponent from "components/TopComponent";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import { toast } from "react-toastify";
import { deleteProject, getAllProject, uploadProject } from "service";

const UploadProject = () => {
  const [projectName, setProjectName] = useState("");
  const [base64Images, setBase64Images] = useState([]);
  const [dataProject, setDataProject] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(false);

  const [validated, setValidated] = useState(false);
  const fileInputRef = useRef(null);

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
    setLoadingData(false);
  };

  useEffect(() => {
    handleGetAllProject();
  }, []);

  const handleProjectName = (event) => {
    setProjectName(event.target.value);
  };

  const handleFileChange = async (event) => {
    setLoading(true);
    const files = Array.from(event.target.files);

    const compressedFiles = await Promise.all(
      files.map(async (file) => {
        const options = {
          maxSizeMB: 1,
          useWebWorker: true,
        };
        try {
          const compressedFile = await imageCompression(file, options);
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
    setLoading(false);
  };

  const handleUpload = async () => {
    setLoading(true);
    try {
      const response = await uploadProject(projectName, base64Images);

      if (response.status === 200) {
        toast.success("Success");
        handleResetFileInput();
        handleGetAllProject();
      }
    } catch (error) {
      toast.error("Error");
      console.error("UploadProject ~ error:", error);
    }
    setLoading(false);
  };

  const handleDeleteProject = async (id) => {
    try {
      await deleteProject(id);
      toast.success("Success");
      handleGetAllProject();
    } catch (error) {
      toast.error("Error" + error.message);
    }
  };
  const handleResetFileInput = () => {
    setBase64Images([]);
    setProjectName("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      handleUpload();
    }
    setValidated(true);
  };
  return (
    <div className="manage-container">
      <TopComponent />
      <section
        className="w-100 px-4 py-5"
        style={{
          backgroundColor: "#9de2ff",
          minHeight: "100vh",
        }}
      >
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3" style={{ alignItems: "flex-end", gap: "1rem" }}>
            <Form.Group as={Col} md={3}>
              <Form.Label>Project Name</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Enter project name"
                onChange={handleProjectName}
                value={projectName}
              />
            </Form.Group>

            <Form.Group as={Col} md={6}>
              <Form.Label>Multiple files input</Form.Label>
              <Form.Control
                required
                type="file"
                accept="image/*"
                ref={fileInputRef}
                multiple
                onChange={handleFileChange}
              />
            </Form.Group>

            <Form.Group as={Col} md={2}>
              <Button type="submit" variant="primary" disabled={loading}>
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
            </Form.Group>
          </Row>
        </Form>
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
            <Button onClick={handleResetFileInput}>Reset</Button>
          </Col>
          {base64Images.length > 0 && (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
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
        <Form.Label>PROJECT</Form.Label>
        {loadingData ? (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        ) : null}
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
                        src={item?.thumbnail}
                        alt={`upload-${index}`}
                        width="auto"
                        height="100px"
                        style={{
                          marginRight: "5px",
                          marginBottom: "5px",
                        }}
                      />
                      <div>Images: {item.Images.length}</div>
                      <div>
                        Created At:{" "}
                        {moment(item.createdAt).utc().format("DD-MM-YYYY")}
                      </div>
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
      </section>
    </div>
  );
};

export default UploadProject;
