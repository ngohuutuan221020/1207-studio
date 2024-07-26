"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    static associate(models) {
      Project.hasMany(models.Image, { foreignKey: "projectId" });
    }
  }
  Project.init(
    {
      name: DataTypes.STRING,
      thumbnail: DataTypes.STRING,
      cloudinary_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Project",
    }
  );
  return Project;
};
