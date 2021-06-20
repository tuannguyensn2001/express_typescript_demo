import express, {Router} from "express";
import CourseController from './Controllers/index';

const RouteCourse: Router = express.Router();

RouteCourse.get('/api/v1/courses', CourseController.index);

export default RouteCourse;