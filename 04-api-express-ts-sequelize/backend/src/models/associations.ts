import { Project } from "./Project";
import { Todo } from "./Todo";

Project.hasMany(Todo, {
  foreignKey: 'project_id',
  sourceKey: 'id',
});

Todo.belongsTo(Project, {
  foreignKey: 'project_id',
  targetKey: 'id',
});
