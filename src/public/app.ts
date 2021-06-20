import express, {Application} from "express";
import {Sequelize} from "sequelize";
import RouteCourse from "../modules/Course/api";

const app: Application = express();




app.use(RouteCourse);

app.listen(3000, async () => {
    try {

    } catch (e) {
        console.log(e);
    }
})
