import "reflect-metadata";
import express from "express";
import currencyRoutes from "./routes/CurrencyRoute";
import "../src/providers/CurrencyProvider";

const app = express();
app.use(express.json());
app.use(currencyRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
