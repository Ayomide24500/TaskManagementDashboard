import { Request, Response } from "express";
import taskModel from "../model/taskmodel";
import { Types } from "mongoose";
import projectModel from "../model/projectModel";

// Create Task
export const createTask = async (req: Request, res: Response) => {
  try {
    const { projectID } = req.params;
    const { name, description } = req.body;

    const find = await projectModel.findById(projectID);
    const project = await taskModel.create({
      name,
      description,
    });

    find?.tasks.push(new Types.ObjectId(project._id));
    find?.save();

    res.status(201).json({
      message: "Task created",
      data: project,
    });
  } catch (error: any) {
    console.log(error);

    res.status(404).json({
      message: "Error creating task",
      error: error.message,
    });
  }
};

// Get Tasks
export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await taskModel.find();

    res.status(200).json({
      message: "Tasks retrieved",
      data: tasks,
    });
  } catch (error: any) {
    res.status(404).json({
      message: "Error getting tasks",
      error: error.message,
    });
  }
};

export const getTasksById = async (req: Request, res: Response) => {
  try {
    const { taskId } = req.params;

    const find = await taskModel.findById(taskId);

    res.status(200).json({
      message: "Tasks retrieved",
      data: find,
    });
  } catch (error: any) {
    res.status(404).json({
      message: "Error getting tasks",
      error: error.message,
    });
  }
};

// Update Task
export const updateTask = async (req: Request, res: Response) => {
  try {
    const { taskId } = req.params;
    const updatedData = req.body;

    const updatedTask = await taskModel.findByIdAndUpdate(taskId, updatedData, {
      new: true,
    });

    res.status(200).json({
      message: "Task updated",
      data: updatedTask,
    });
  } catch (error: any) {
    res.status(404).json({
      message: "Error updating task",
      error: error.message,
    });
  }
};

// Delete Task
export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { taskId } = req.params;

    const deletedTask = await taskModel.findOneAndDelete({ _id: taskId });

    if (!deletedTask) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.status(200).json({
      message: "Task deleted",
      data: deletedTask,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Error deleting task",
      error: error.message,
    });
  }
};
