import express from "express";
import * as dotenv from "dotenv";
import { PrismaClient } from '@prisma/client'
dotenv.config();

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello from Node.js with TypeScript!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
