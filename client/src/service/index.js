import axios from "axios";

const getAllProject = () => {
  return axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/get-project`);
};
const uploadProject = (projectName, base64Images) => {
  return axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/upload-project`, {
    data: {
      name: projectName,
      images: base64Images,
    },
  });
};
const deleteProject = (id) => {
  return axios.delete(
    `${process.env.REACT_APP_BACKEND_URL}/api/delete-project/${id}`
  );
};
const getProjectId = (id) => {
  return axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/api/get-project-id/${id}`
  );
};
export { getAllProject, uploadProject, deleteProject, getProjectId };
