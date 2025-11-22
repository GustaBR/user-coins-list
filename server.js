import express from 'express';
import {promises as fs} from 'fs';
import cors from 'cors';

const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use(cors());

const PORT = 3000;

app.get("/levels", async (req, res) => {
    try {
        const data = await fs.readFile("levels.json", "utf-8");
        const levels = JSON.parse(data);
        res.status(200).json(levels);

    } catch (err) {
        console.error("Error reading file:", err);
    }
});

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});