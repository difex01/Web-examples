import { Project } from "./Project";
import { Todo } from "./Todo";
import { Student } from "./Student";
import { Course } from "./Course";
import { Grade } from "./Grade";

// * Project - Todo *

Project.hasMany(Todo, {
  foreignKey: 'project_id', // field from Todo
  sourceKey: 'project_id', // field from Project
});

Todo.belongsTo(Project, {
  foreignKey: 'project_id', // field from Todo
  targetKey: 'project_id', // field from Project
});

// * Student - Course *

Student.belongsToMany(Course, {
  through: 'student_course',
  foreignKey: 'student_id'
});

Course.belongsToMany(Student, {
  through: 'student_course',
  as: 'students',
  foreignKey: 'course_id',
});

// * Student - Grade *

Student.belongsTo(Grade, {
  foreignKey: 'grade_id',
  targetKey: 'grade_id',
});

Grade.hasMany(Student, {
  foreignKey: 'grade_id',
  sourceKey: 'grade_id',
});
