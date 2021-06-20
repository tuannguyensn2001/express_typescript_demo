import {Model, DataTypes, Sequelize} from "sequelize";

const sequelize = new Sequelize('mysql://root:=u2PohGBTO;e@localhost:3306/node');

export interface CourseInstance extends Model {
    id: number,
    name: string,
    // slug: string,
    // description: string,
    // price: number,
    // level: string,
    // media_id: number,
    // tag_id: number,
    // status: string,
}

const CourseModel = sequelize.define<CourseInstance>("courses", {
    id: {
        primaryKey: true,
        type: DataTypes.BIGINT
    },
    name: {
        type: DataTypes.STRING
    },
})

export default CourseModel;