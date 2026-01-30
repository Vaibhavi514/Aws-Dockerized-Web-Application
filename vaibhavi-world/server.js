const express = require("express");
const path = require("path");
const app = express();

const PORT = 3000;

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

// API example
app.get("/api", (req, res) => {
  res.json({ message: "Backend connected to RDS ✅" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});


const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "vaibhavi-rds.cbuwwe4yigx9.eu-north-1.rds.amazonaws.com",
  user: "admin",
  password: "Vaibhavi123",
  database: "vaibhavi_world"
});

db.connect(err => {
  if (err) {
    console.error("DB connection failed:", err);
  } else {
    console.log("MySQL connected ✅");
  }
});

