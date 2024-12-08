import express from "express";
import routes from "./routes/index";
import logger from "./utilities/logger";
import validateQuery from "./utilities/validateQuery";

const app = express();
const port = 3000;
const middleware = [logger, validateQuery];
app.use(middleware);
app.use("/api", routes);

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});

export default app;
