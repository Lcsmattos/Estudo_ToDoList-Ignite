import { useState } from "react";
import { PlusCircle } from "phosphor-react";
import { v4 as uuid } from "uuid";

import { Header } from "./components/Header";
import { Empty } from "./components/Empty";
import { Task } from "./components/Task";

export type TaskType = {
  taskId: string;
  message: string;
  isDone: boolean;
};

import "./App.css";

function App() {
  const [taskList, setTaskList] = useState<TaskType[]>([]);
  const [taskMessage, setTaskMessage] = useState<string>("");

  function handleCreateTask() {
    const newTask = {
      taskId: uuid(),
      message: taskMessage,
      isDone: false,
    };

    setTaskList([...taskList, newTask]);
    setTaskMessage("");
  }

  function handleDeleteTask(taskId: string) {
    const newArray = taskList.filter((task) => task.taskId !== taskId);

    setTaskList(newArray);
  }

  function handleChangeTaskStatus(taskId: string, value: boolean) {
    const newArray = taskList.map((task) => {
      if (task.taskId === taskId) {
        return {
          ...task,
          isDone: !value,
        };
      }
      return { ...task };
    });

    setTaskList(newArray);
  }

  const TasksCreatedCounter = taskList.length;

  const TasksDoneCounter = taskList.filter(
    (task) => task.isDone === true
  ).length;

  return (
    <>
      <Header />
      <main>
        <section className="addNewTask">
          <input
            onChange={(event) => setTaskMessage(event.target.value)}
            type="text"
            value={taskMessage}
            placeholder="Adicione uma nova tarefa"
          />
          <button
            onClick={() => handleCreateTask()}
            disabled={taskMessage.length === 0}
          >
            Criar{" "}
            <PlusCircle size={16} weight="regular" style={{ marginLeft: 5 }} />
          </button>
        </section>

        <section className="tasksInfo">
          <div className="tasksCreated">
            <h3>Tarefas Criadas</h3>
            <div className="counter">{TasksCreatedCounter}</div>
          </div>

          <div className="tasksDone">
            <h3>Concluídas</h3>
            <div className="counter">{TasksDoneCounter}</div>
          </div>
        </section>

        <section className="tasksList">
          {taskList.length > 0 ? (
            taskList.map((task) => (
              <Task
                key={task.taskId}
                taskInfo={task}
                deleteFunction={handleDeleteTask}
                changeTaskStatus={handleChangeTaskStatus}
              />
            ))
          ) : (
            <Empty />
          )}
        </section>
      </main>
    </>
  );
}

export default App;
