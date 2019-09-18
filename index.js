const express = require("express");
const router1 = require("./router");
const countriesRouter = require("./countriesRouter");
const languagesRouter = require("./languages");
const studentRouter = require("./studentRouter");
const app = express();
app.use(router1);
app.use(countriesRouter);
app.use(languagesRouter);
app.use(studentRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Example app listening on port: ${port}`));
