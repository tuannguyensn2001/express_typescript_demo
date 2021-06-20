import {Request, Response} from "express";
import CourseModel, {CourseInstance} from "../Models";

class CourseController {
    public async index(request: Request, response: Response): Promise<Response<CourseInstance[]>> {
        const courses = await CourseModel.findAll({
            where: {
                id: 2
            }
        });
        return response.json(courses).status(200);
    }
}

export default new CourseController();