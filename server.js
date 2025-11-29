import express from "express";
import sum from "./sum.js";
const app = express();
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.json({
    msg: "Hello World!",
  });
});
app.get("/getSum/:a/:b", async (req, res) => {
  const { a, b } = req.params;
  const result = sum(parseInt(a), parseInt(b));
  res.json({
    sum: result,
  });
});
