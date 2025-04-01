import e from "express";
import cors from "cors";
import router from "./routes/likeMe.routes.js";

const app = e();
const PORT = 5501;

app.use(e.json());
app.use(cors());

app.use("/", router);

app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
