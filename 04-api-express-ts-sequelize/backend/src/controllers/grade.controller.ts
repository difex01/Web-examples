import { Request, Response } from "express";
import { Grade} from "../models/Grade";
import { Student } from "../models/Student";

const getGrades = async (_req: Request, res: Response) => {
  try {
    const grades = await Grade.findAll();

    if (!grades) {
      return res.status(404).json({
        message: 'No grades found',
      });
    }

    res.status(200).json(grades);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Server error'
    });
  }
}

const getGradeById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const grade = await Grade.findByPk(Number(id));

    if (!grade) return res.status(404).json({
      message: "Grade does not exists",
    });

    res.status(200).json(grade);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Server error'
    });
  }
}

const getGradeStudentsById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const grade = await Grade.findByPk(id);

    if (!grade) return res.status(404).json({
      message: "Grade does not exists",
    });

    const students = await Student.findAll({
      where: {
        grade_id: id
      }
    });

    if (!students) return res.status(404).json({
      message: "This grade has not students",
    });

    res.status(200).json(students);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Server error'
    });
  }
}

const createGrade = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    const newCourse = await Grade.create({ name });
    
    res.status(200).json(newCourse);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Server error'
    });
  }
}

const deleteGrade = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const gradeDeleted = await Grade.destroy({
      where: {
        grade_id: id,
      }
    });

    if (!gradeDeleted) return res.status(404).json({
      message: 'Grade does not exists'
    })
    
    res.status(200).json(gradeDeleted);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Server error'
    });
  }
}

export default {
  getGrades,
  getGradeById,
  getGradeStudentsById,
  createGrade,
  deleteGrade,
};
