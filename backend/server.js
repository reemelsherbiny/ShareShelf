
const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

// Health check endpoint
app.get("/api/health", (req, res) => {
    res.status(200).json({
        status: "ok"
    });
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`ShareShelf backend running on port ${PORT}`);
});
