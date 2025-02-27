// src/index.ts
import express from "express";
import currencyRoutes from "./routes/CurrencyRoute";

const app = express();
app.use(express.json());

// Usa as rotas
app.use(currencyRoutes);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
