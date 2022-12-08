import { Request, Response } from "express";
import { Todo } from "../models/Todo";

const todoController = {
  getTodos: async (_req: Request, res: Response) => {
    try {
      const todos = await Todo.findAll();

      if (!todos) {
        return res.status(404).json({
          message: 'Todos not found',
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
  getTodo: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const todo = await Todo.findByPk(id);

      if (!todo) {
        return res.status(404).json({
          message: 'Todo not found',
        });
      }

      res.status(200).json(todo);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Server error'
      });
    }
  },
  createTodo: async (req: Request, res: Response) => {
    try {
      const { title, description, project_id } = req.body;

      const newTodo = await Todo.create({
        title,
        description,
        project_id,
      });

      res.status(201).json({
        message: 'Todo created',
        todo: newTodo,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Server error'
      });
    }
  }
};

export default todoController;