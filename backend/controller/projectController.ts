import { Request, Response } from "express";
import projectModel from "../model/projectModel";

export const createProject = async (req: Request, res: Response) => {
  try {
    const { projectName } = req.body;
    const createproject = await projectModel.create({
      projectName,
      avatar: projectName.charAt(0),
    });
    console.log(createproject);

    res.status(201).json({
      message: "Project created",
      data: createproject,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
    });
  }
};

export const getProjectById = async (req: Request, res: Response) => {
  try {
    const { projectID } = req.params;
    const find = await projectModel.findById(projectID);

    return res.status(200).json({
      message: "project found",
      data: find,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
    });
  }
};

export const getProject = async (req: Request, res: Response) => {
  try {
    const find = await projectModel.find();

    return res.status(200).json({
      message: "project found",
      data: find,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
    });
  }
};

export const updateProject = async (req: Request, res: Response) => {
  try {
    const { projectID } = req.params;
    const { projectName } = req.body;

    const existingProject = await projectModel.findById(projectID);

    if (!existingProject) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    const result = await projectModel.findOneAndUpdate(
      { _id: projectID },
      { projectName }
    );

    if (result) {
      res.status(200).json({
        message: "Project updated",
        data: result,
      });
    } else {
      return res.status(404).json({
        message: "Error updating user",
      });
    }
  } catch (error: any) {
    res.status(404).json({
      message: "Error updating project",
      error: error.message,
    });
  }
};

export const deleteProject = async (req: Request, res: Response) => {
  try {
    const { projectID } = req.params;
    const deleted = await projectModel.findByIdAndDelete(projectID);

    return res.status(201).json({
      message: "Project deleted",
      data: deleted,
    });
  } catch (error) {
    return error;
  }
};
