import { Request, Response } from "express";
import { Course } from "../models/Course";
import { Student } from "../models/Student";

const courseController = {
  getCourses: async (_req: Request, res: Response) => {
    try {
      const courses = await Course.findAll();

      if (!courses) {
        return res.status(404).json({
          message: 'courses not found',
        });
      }

      res.status(200).json(courses);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Server error'
      });
    }
  },
  getCourseById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const course = await Course.findByPk(Number(id));

      if (!course) return res.status(404).json({
        message: "Course does not exists",
      });

      res.status(200).json(course);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Server error'
      });
    }
  },
  getCourseStudentsById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const course = await Course.findByPk(id, {
        include: [{
          model: Student,
          as: 'students'
        }],
      });

      if (!course) return res.status(404).json({
        message: "Course does not exists",
      });

      res.status(200).json(course);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Server error'
      });
    }
  },
  createCourse: async (req: Request, res: Response) => {
    try {
      const { name } = req.body;

      const newCourse = await Course.create({ name });
      
      res.status(200).json(newCourse);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Server error'
      });
    }
  },
  deleteCourse: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const courseDeleted = await Course.destroy({
        where: {
          course_id: id,
        }
      });

      if (!courseDeleted) return res.status(404).json({
        message: 'Course does not exists'
      })
      
      res.status(200).json(courseDeleted);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Server error'
      });
    }
  },
};

export default courseController;
