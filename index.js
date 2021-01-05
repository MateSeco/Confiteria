require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const routes = require("./routes/routes");
/* const seeder = require("./seeders"); */

const port = process.env.PORT;

app.set("views", path.join(__dirname, "views")); //Setting up default view path
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

//seeder();
routes(app);

app.listen(port, () => console.log(`Servidor escuchado en puerto: ${port}`));
