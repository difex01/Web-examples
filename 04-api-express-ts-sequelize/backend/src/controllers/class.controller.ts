import { Request, Response } from "express";
import { Class } from "../models/Class";

const classController = {
  getClasses: async (_req: Request, res: Response) => {
    try {
      const classes = await Class.findAll();

      if (!classes) {
        return res.status(404).json({
          message: 'Classes not found',
        });
      }

      res.status(200).json(classes);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Server error'
      });
    }
  },
};

export default classController;
