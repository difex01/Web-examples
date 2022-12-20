import { Request, Response } from "express";
import { Student } from "../models/Student";

const studentController = {
  getStudents: async (_req: Request, res: Response) => {
    try {
      const students = await Student.findAll();

      if (!students) {
        return res.status(404).json({
          message: 'students not found',
        });
      }

      res.status(200).json(students);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Server error'
      });
    }
  },
};

export default studentController;
