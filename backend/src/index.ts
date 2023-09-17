import express from "express";
import usersRoutes from "./routes/users";

const app = express();
const PORT = 5000;
app.use(express.json());

app.use("/users/", usersRoutes);
app.get("/", (req, res) => {
  res.send("Hello from server!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
