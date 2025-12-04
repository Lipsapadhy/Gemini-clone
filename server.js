import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/chat", async (req, res) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(req.body.prompt);

    res.json({ reply: result.response.text() });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.toString() });
  }
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
