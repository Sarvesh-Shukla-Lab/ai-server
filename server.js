const express = require("express");
const app = express();

// VERY IMPORTANT (Render fix)
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("AI Server Running");
});

app.post("/chat", (req, res) => {

    console.log("BODY:", req.body); // debug

    const userMessage = req.body?.message || "kuch nahi mila";

    res.json({
        reply: "Tumne bola: " + userMessage
    });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log("Server started on " + PORT));
