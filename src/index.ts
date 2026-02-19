import express, { json } from "express";

const PORT = 8080;

const app = express();

app.use(json());

const COLORS = ["red", "blue", "green"];

app.get("/colors", (req, res) => {
  res.json(
    COLORS.map((color, index) => ({
      id: index + 1,
      color,
    })),
  );
});

app.listen(PORT, () => {
  console.log("Server has been started on", PORT);
});
