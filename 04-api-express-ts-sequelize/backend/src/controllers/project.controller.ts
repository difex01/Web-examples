import { Request, Response } from "express";
import { Project } from "../models/Project";
import { Todo } from "../models/Todo";

const projectsController = {
  getProjects: async (_req: Request, res: Response) => {
    try {
      const projects = await Project.findAll();

      if (!projects) {
        return res.status(404).json({
          message: 'There are no projects yet',
        })
      }

      res.status(200).json({
        projects,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Server error'
      });
    }
  },
  getProjecById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const project = await Project.findByPk(id);

      if (!project) {
        return res.status(404).json({
          message: 'Project not found',
        });
      }

      res.status(200).json({
        project,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Server error'
      });
    }
  },
  getProjectTodos: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const project = await Project.findByPk(id);

      if (!project) {
        return res.status(404).json({
          message: 'Project not found',
        });
      }

      const todos = await Todo.findAll({
        where: {
          project_id: id,
        },
        attributes: [
          'title',
          'description',
          'is_completed',
        ]
      });

      if (!todos) {
        return res.status(404).json({
          message: 'Project does not have todos',
        });
      }

      res.status(200).json(todos);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Server error'
      });
    }
  },
  createProject: async (req: Request, res: Response) => {
    try {

      const { title } = req.body;
      const newProject = await Project.create({
        title,
      });

      res.status(201).json({
        message: 'Project created',
        project: newProject,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Server error'
      });
    }
  }
};

export default projectsController;