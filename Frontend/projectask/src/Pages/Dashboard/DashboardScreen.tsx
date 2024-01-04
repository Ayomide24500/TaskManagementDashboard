import { useEffect, useState } from "react";
import Calendar from "../../components/Calender";
import { createProject, deletedProject, getProject } from "../../Api/Project";
import TaskManagementContainer from "./TaskBox";
import { Scrollbars } from "react-custom-scrollbars";
import { createTask } from "../../Api/task";
import CreateTaskview from "./CreateTaskview";
import AllTaskView from "./AllTaskView";
import { useDispatch } from "react-redux";
import { addProjectID } from "../../global/reduxState";

const DashboardScreen = () => {
  const [selectedProjectId, setSelectedProjectId]: any = useState([]);
  const [state, setState]: any = useState([]);
  const [description, setDescription]: any = useState("");
  const [toggle, setToggle] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [taskName, setTaskName] = useState("");
  const [showRecently, setShowRecently] = useState(true);
  const [showToday, setShowToday] = useState(false);
  const [viewTask, setViewTask] = useState(false);
  const [showTask, setShowTask] = useState(false);
  const [activeLink, setActiveLink] = useState("Recently");
  const [projectCount, setProjectCount] = useState(0);
  const dispatch = useDispatch();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleViewTask = (taskId: any) => {
    setSelectedProjectId(taskId);
    setShowRecently(false);
    setViewTask(true);
    setShowToday(false);
    setShowTask(false);
    setActiveLink("viewTask");
  };

  const handleShowRecently = () => {
    setShowRecently(true);
    setShowToday(false);
    setViewTask(false);
    setShowTask(false);
    setActiveLink("Recently");
  };

  const handleShowToday = () => {
    setShowRecently(false);
    setShowToday(true);
    setViewTask(false);
    setShowTask(false);
    setActiveLink("Today");
  };
  const handleShowTask = () => {
    setShowRecently(false);
    setViewTask(false);
    setShowToday(false);
    setShowTask(true);
    setActiveLink("Task");
  };

  const handleCreateProject = async () => {
    try {
      if (!projectName) {
        alert("Project name is required, please input it");
        return;
      }

      const projectData = { projectName };
      createdAt: new Date().toString();

      const response = await createProject(projectData);

      if (response.data) {
        const createdProject = response.data;

        setState((prevProjects: any) => [...prevProjects, createdProject]);

        setProjectCount((prevCount) => prevCount + 1);
      } else {
        console.error("Invalid response format:", response);
      }
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  const handleDeleteProject = (projectID: string) => {
    deletedProject(projectID).then(() => {
      getProject().then((res: any) => {
        setState(res.data);
      });
    });
  };

  useEffect(() => {
    getProject().then((res: any) => {
      setState(res.data);
    });
  }, [state]);

  const handlecreateTask = (projectID: any) => {
    createTask(projectID, { name: taskName, description }).then((res: any) => {
      setState(res?.data?.data);
      return res.data;
    });
  };

  const [ID, setID] = useState("");
  console.log(ID);

  return (
    <div>
      <div
        className="w-full flex justify-center items-center"
        style={{
          height: "calc(100vh - 50px)",
          borderRadius: "20px",
        }}
      >
        <div className="h-[100%] w-[40%] rounded-lg">
          <div className="w-[90%] h-[160px]">
            <p className="pl-10 pt-5 font-normal text-xl text-slate-400">
              Hello Ayomide
            </p>
            <h1 className="pl-10 pt-5 font-bold text-3xl">
              You've got <br />
              {state?.length} project(s) today
            </h1>
          </div>
          <div className="h-[80px] w-[80%] flex items-center justify-center">
            <input
              type="text"
              placeholder="search something"
              className="h-[50px] w-[60%] border-none outline-none bg-gray-200 pl-3"
            />
          </div>
          <div className="h-[72%] w-full rounded-lg">
            <h1 className="pl-10 pt-5 font-bold text-3xl">
              My Project And Your Task
            </h1>
            <div className="h-[50px] w-[95%] flex justify-around items-center gap-5 ml-5 mt-7">
              <div className="relative">
                <nav
                  className={`font-bold text-xl cursor-pointer ${
                    activeLink === "Today" ? "text-yellow-400" : ""
                  }`}
                  style={{
                    position: "relative",
                    marginBottom: "9px",
                    display: "inline-block",
                  }}
                  onClick={handleShowToday}
                >
                  Today
                </nav>
                {activeLink === "Today" && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "3px",
                      backgroundColor: "yellow",
                    }}
                  />
                )}
              </div>
              <nav
                className={`font-normal text-xl cursor-pointer ${
                  activeLink === "Recently" ? "text-slate-400" : ""
                }`}
                onClick={handleShowRecently}
              >
                Recently
              </nav>
              <nav
                className={`font-normal text-xl cursor-pointer ${
                  activeLink === "Task" ? "text-slate-700" : ""
                }`}
                onClick={handleShowTask}
              >
                Task
              </nav>
              <nav
                className={`font-normal text-xl cursor-pointer ${
                  activeLink === "viewTask" ? "text-slate-400" : ""
                }`}
                onClick={handleViewTask}
              >
                View Task
              </nav>
            </div>
            {showToday && (
              <div
                style={{
                  height: "78%",
                  overflowY: "auto",
                  scrollbarWidth: "thin",
                  background: "#e5e5e5",
                }}
              >
                {state &&
                  state?.map((project: any) => (
                    <div key={project._id}>
                      <div className="project-box mt-5 shadow-lg">
                        <div className="project-box-header flex items-center justify-between bg-gray-300 p-3">
                          <div className="flex items-center">
                            <span className="text-xl font-bold mr-3">
                              {project.projectName}
                            </span>
                            <span className="text-gray-500">
                              Due: 2023-12-31
                            </span>
                          </div>
                          <div className="flex items-center">
                            <button
                              className="bg-yellow-500 text-white px-3 py-1 rounded-md mr-3"
                              onClick={() => {
                                handleToggle();
                                dispatch(addProjectID(project?._id));
                              }}
                            >
                              Edit
                            </button>
                            <button
                              className="bg-black text-white px-3 py-1 rounded-md"
                              onClick={() => handleDeleteProject(project._id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                        <div className="project-box-body p-3">
                          <p className="text-gray-700 mb-4">
                            Project description goes here. You can add more
                            details about the project in this section.
                          </p>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center">
                              {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-green-500 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span className="text-green-500">Completed</span> */}
                            </div>
                            <div className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-yellow-500 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                />
                              </svg>
                              <span className="text-yellow-500">
                                In Progress
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="project-box-footer p-3">
                          <button
                            className="bg-black text-white font-bold px-3 py-1 rounded-md mr-3"
                            onClick={() => {
                              handleShowTask();

                              setID(project._id);
                            }}
                          >
                            Add Task to this project
                          </button>
                          <button
                            className="bg-yellow-500 text-white font-bold px-3 py-1 rounded-md"
                            onClick={() => handleViewTask(project._id)}
                          >
                            View Tasks
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}

            {showRecently && (
              <div
                style={{
                  height: "78%",
                  overflowY: "auto",
                  scrollbarWidth: "thin",
                }}
              ></div>
            )}

            {viewTask && (
              <div
                style={{
                  height: "78%",
                  overflowY: "auto",
                  scrollbarWidth: "thin",
                }}
              >
                <div className="flex flex-wrap">
                  <TaskManagementContainer />
                </div>
              </div>
            )}
            {showTask && (
              <div
                style={{
                  height: "78%",
                  overflowY: "auto",
                  scrollbarWidth: "thin",
                }}
              >
                <div className="h-[70%] w-[80%] flex items-center justify-center ml-10">
                  <div className="h-[100%] w-[100%] flex justify-center items-center gap-10 flex-col">
                    <div className="h-[600px] w-[100%] flex justify-center items-center flex-col gap-16 bg-yellow-500">
                      <input
                        type="text"
                        title="name"
                        onChange={(e) => setTaskName(e.target.value)}
                        placeholder="Enter the task title"
                        className="h-[50px] w-[60%] border-none outline-none bg-gray-200 pl-3"
                      />
                      <input
                        type="text"
                        title="description"
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter the description"
                        className="h-[100px] w-[60%] border-black outline-none bg-gray-200 pl-3 pb-10"
                      />
                      <button
                        className="h-[40px] w-[110px] bg-black rounded mr-9 ml-1 text-white font-bold"
                        onClick={() => {
                          handlecreateTask(ID);
                        }}
                      >
                        create Task
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="h-[100%] w-[60%] rounded-lg">
          <div className="h-[200px] w-full">
            <div className="h-[90px] w-[100%] flex justify-around items-center">
              <div className="h-[80px] w-[80%] flex items-center justify-center">
                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder="Enter the project title"
                  className="h-[50px] w-[60%] border-none outline-none bg-gray-200 pl-3"
                />
              </div>
              <div className="flex justify-end items-center">
                <button
                  className="h-[44px] w-[140px] bg-yellow-500 text-white rounded mr-9 font-bold"
                  onClick={handleCreateProject}
                >
                  Add Project
                </button>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                className="h-[44px] w-[140px] bg-black text-white font-bold mr-9 rounded"
                onClick={handleShowTask}
              >
                ➕ Add Task
              </button>
            </div>
          </div>
          <div>
            <div className="h-[300px] w-[100%] flex justify-end items-center flex-col">
              <Calendar />
            </div>
            <AllTaskView />
          </div>
        </div>
      </div>
      {toggle ? <CreateTaskview {...selectedProjectId} /> : null}
    </div>
  );
};

export default DashboardScreen;
