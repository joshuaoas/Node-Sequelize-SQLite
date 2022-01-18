const path = require("path");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const { sequelize } = require("./models");
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));


app.use(helmet());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));


const memberRoutes = require("./routes/member");
app.use(memberRoutes);



sequelize.sync().then(function () {
    app.listen(3000, () =>
        console.log("Backend listening on port 3000")
    );
});