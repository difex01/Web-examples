import { Project } from "./Project";
import { Todo } from "./Todo";
import { Student } from "./Student";
import { Class } from "./Class";

// * Project - Todo *

Project.hasMany(Todo, {
  foreignKey: 'project_id', // field from Todo
  sourceKey: 'project_id', // field from Project
});

Todo.belongsTo(Project, {
  foreignKey: 'project_id', // field from Todo
  targetKey: 'project_id', // field from Project
});

// * Student - Class *
Student.belongsToMany(Class, {
  through: 'Enrollment',
});

Class.belongsToMany(Student, {
  through: 'Enrollment',
});
