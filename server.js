const express = require("express");
const app = express();

app.use(express.json());

app.post("/chat", async (req, res) => {
    const userMessage = req.body.message;

    res.json({
        reply: "Tumne bola: " + userMessage
    });
});

app.get("/", (req, res) => {
    res.send("AI server is running 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
});
