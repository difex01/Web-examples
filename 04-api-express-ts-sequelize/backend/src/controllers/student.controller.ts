import { Request, Response } from "express";
import { Student } from "../models/Student";
import { Course } from "../models/Course";

const getStudents = async (_req: Request, res: Response) => {
  try {
    const students = await Student.findAll();

    if (!students) {
      return res.status(404).json({
        message: 'students not found',
      });
    }

    res.status(200).json({
      students,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Server error'
    });
  }
}

const getStudentById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { "get-courses": getCourses } = req.query;

    const student = await Student.findByPk(Number(id));

    if (!student) return res.status(404).json({
      message: "Student does not exists",
    })

    let response: {student: Student, courses?: Course[]} = { student };

    if (getCourses) {
      let courses = await student.getCourses();
      response.courses = courses;
    }

    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Server error'
    });
  }
}

const createStudent = async (req: Request, res: Response) => {
  try {
    const { name, age } = req.body;
    
    const newStudent = await Student.create({
      name,
      age,
    });

    res.status(200).json({
      newStudent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Server error'
    });
  }
}

const createStudentWithCoursesIds = async (req: Request, res: Response) => {
  try {
    const {
      name,
      age,
      coursesIds
    }: Student & {coursesIds: number[]} = req.body;

    const coursesToAdd: Course[] = [];

    coursesIds.forEach(async(courseId) => {
      const currentCourse = await Course.findOne({
        where: { course_id: courseId }
      });
      if (currentCourse) coursesToAdd.push(currentCourse);
    });
    
    const newStudent = await Student.create({
      name,
      age
    });

    coursesToAdd.forEach(course => newStudent.addCourse(course));

    res.status(200).json({
      newStudent,
      coursesToAdd,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Server error'
    });
  }
}

const createStudentWithCoursesNames = async (req: Request, res: Response) => {
  try {
    const {
      name,
      age,
      coursesNames
    }: Student & {coursesNames:string[]} = req.body;

    const coursesToAdd: Course[] = [];
    const coursesNotFound: string[] = [];

    coursesNames.forEach(async(courseName) => {
      const currentCourse = await Course.findOne({
        where: { name: courseName }
      });
      if (currentCourse) return coursesToAdd.push(currentCourse);
      coursesNotFound.push(courseName);
    });
    
    const newStudent = await Student.create({
      name,
      age
    });

    coursesToAdd.forEach(async(course) => await newStudent.addCourse(course));

    coursesNotFound.forEach(async(name) => await newStudent.createCourse({name}));

    res.status(200).json({
      newStudent,
      coursesToAdd,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Server error'
    });
  }
}

const updateStudentById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, age } = req.body;

    const student = await Student.findByPk(id);

    if (!student) return res.status(404).json({
      message: "Student does not exist",
    })

    student.update({
      name,
      age,
    });

    res.status(200).json({
      message: 'Student updated succesfully',
      student,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Server error'
    });
  }
}

const deleteStudentById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const studentDeleted = await Student.destroy({
      where: {
        student_id: id,
      }
    });

    if (!studentDeleted) return res.status(404).json({
      message: 'Student does not exists'
    })

    res.status(200).json({
      message: 'Student deleted succesfully',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Server error'
    });
  }
}

export default {
  getStudents,
  getStudentById,
  createStudent,
  createStudentWithCoursesIds,
  createStudentWithCoursesNames,
  updateStudentById,
  deleteStudentById,
};
