const express = require("express");
require("dotenv").config();

const bodyParser = require("body-parser");

const { City } = require("./models/index");
const { PORT } = require("./config/serverConfig");
const cityRepository = require("./repository/city-repository");

const setupAndStartServer = async () => {
    // create the express object
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(PORT, async () => {
        console.log(`Server running on port ${PORT}`);
        const repo = new cityRepository();
        repo.createCity({name:"Delhi"});
    });
};

setupAndStartServer();
