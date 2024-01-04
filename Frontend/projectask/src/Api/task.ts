import axios from "axios";

const URL: string = "http://localhost:1200";

export const createTask = async (projectID: any, data: any) => {
  try {
    const response = await axios.post(
      `${URL}/api/v1/create-task/${projectID}`,
      data
    );
    console.log(response);
    return response.data.data;
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
};

export const getTasksById = async (taskId: any) => {
  try {
    await axios.get(`${URL}/api/v1/get-task/${taskId}`).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.error("Error getting task:", error);
    throw error;
  }
};
export const getTask = async () => {
  try {
    const response = await axios.get(`${URL}/api/v1/get-task`);
    return response.data.data;
  } catch (error) {
    console.error("Error getting task:", error);
    throw error;
  }
};
