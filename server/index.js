const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./src/config/connectDB");

const projectsRoutes = require("./src/routes/projects");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

app.use("/api", projectsRoutes);

app.get("/", (req, res) => res.send("1207studio"));

connectDB();

const PORT = process.env.PORT || 1207;
app.listen(PORT, () => console.log(`Server ready on port ${PORT}.`));
