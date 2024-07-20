const express = require("express");
const router = express.Router();
const db = require("../models/index");
const { where } = require("sequelize");

router.get("/get-project", async (req, res) => {
  try {
    let projects = await db.Project.findAll({
      order: [["id", "DESC"]],
    });

    res.json({
      status: 200,
      message: "Get all projects successfully",
      data: projects,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Server error",
      error: error.message,
    });
  }
});

router.post("/upload-project", async (req, res) => {
  try {
    const { data } = req.body;
    const createdProject = await db.Project.create({
      name: data.name,
      thumbnail: data.images[0],
    });
    if (createdProject) {
      const dataImage = data.images.map((image) => ({
        projectId: createdProject.id,
        image,
      }));
      const createdImages = await db.Image.bulkCreate(dataImage);
      if (createdImages) {
        res.json({
          status: 200,
          message: "Project created successfully",
          data: createdProject,
        });
      }
    }
  } catch (error) {
    res.status(500).send({ message: "Upload failed" });
  }
});

router.delete("/delete-project/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let deleteProject = await db.Project.destroy({
      where: {
        id: id,
      },
    });
    if (deleteProject) {
      try {
        await db.Image.destroy({
          where: {
            projectId: id,
          },
        });
        res.json({
          status: 200,
          message: "Delete project successfully",
        });
      } catch (error) {
        res.json({
          status: 500,
          message: "Delete project failed",
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Server error",
      error: error.message,
    });
  }
});

router.get("/get-project-id/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let project = await db.Image.findAll({
      where: {
        projectId: id,
      },
      raw: true,
      nest: true,
    });
    console.log("🚀 ~ router.get ~ project:", project);
    if (project) {
      res.json({
        status: 200,
        message: "Get project successfully",
        data: project,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Server error",
      error: error.message,
    });
  }
});

module.exports = router;
