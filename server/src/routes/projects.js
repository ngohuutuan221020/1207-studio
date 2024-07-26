const express = require("express");
const router = express.Router();
const db = require("../models/index");

const cloudinary = require("cloudinary").v2;
const upload = require("../middleware/multer");

require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const compressImage = (img) => cloudinary.url(img, { quality: 60 });

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

router.post("/upload-project", upload.array("images"), async (req, res) => {
  const { data } = req.body;
  try {
    const images = data.images;

    const imageURL = [];
    for (const image of images) {
      const result = await cloudinary.uploader.upload(image, {
        resource_type: "auto",
      });
      imageURL.push(result.secure_url);
    }
    const createdProject = await db.Project.create({
      name: data.name,
      thumbnail: imageURL[0],
    });
    if (createdProject) {
      const dataImage = imageURL.map((image) => ({
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
      } else {
        res.status(500).json({
          status: 500,
          message: "Failed to create images",
        });
      }
    }
  } catch (error) {
    console.error("Error uploading project:", error);
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error.message,
    });
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
