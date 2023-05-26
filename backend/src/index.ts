import express from "express";
import bodyParser from "body-parser";

var cors = require("cors");
const app = express();

import { loadMap } from "./loadMap";
import { saveMap } from "./saveMap";

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

loadMap(app);
saveMap(app);

const port = 5101;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
