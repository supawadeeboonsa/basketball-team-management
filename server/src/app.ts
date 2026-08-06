import express from "express";
import cors from "cors";
import testRoutes from "./routes/test.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", testRoutes);

app.get("/", (req, res) => {
    res.send("Basketball Management API Running 🏀");
});

export default app;