import "dotenv/config";
import express from "express";
import cors from "cors";
import util from "util";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// DB config
const db = require("./config/keys").mongoURI;

// Connect to mongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch(err => {
    console.log(err);
  });

app.listen(process.env.SHADOW_PORT, () => {
  console.log(
    util.format("Example app listening on port %s!", process.env.SHADOW_PORT)
  );
});
