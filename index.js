const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();   // ✅ THIS LINE WAS MISSING

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve frontend
app.use(express.static(path.join(__dirname, "frontend")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

// routes
app.use("/api/animal", require("./routes/animal"));
app.use("/api/auth", require("./routes/authentication"));
app.use("/api/customer", require("./routes/customer"));
// add other routes if present

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
