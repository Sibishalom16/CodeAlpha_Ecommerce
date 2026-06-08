require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);

// Routes
app.use("/api/products", productRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");

    // Database name check
    console.log(
      "📦 Database Name:",
      mongoose.connection.db.databaseName
    );
  })
  .catch((err) => {
    console.error("❌ MongoDB Error:", err);
  });

// Test Route
app.get("/", (req, res) => {
  res.send("E-Commerce API Running");
});

// Server Start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});