import { PlusCircle } from "phosphor-react";
import { Header } from "./components/Header";
import "./App.css";
// import { Task } from "./components/Task";
// import { Empty } from "./components/Empty";
import { Task } from "./components/Task";

const TasksMock = [
  {
    message: "Primeira Tarefa do dia !",
    isDone: false,
  },
  {
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    isDone: false,
  },
  {
    message:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    isDone: false,
  },
];

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="addNewTask">
          <input type="" placeholder="Adicione uma nova tarefa" />
          <button>
            Criar{" "}
            <PlusCircle size={16} weight="regular" style={{ marginLeft: 5 }} />
          </button>
        </section>

        <section className="tasksInfo">
          <div className="tasksCreated">
            <h3>Tarefas Criadas</h3>
            <div className="counter">0</div>
          </div>

          <div className="tasksDone">
            <h3>Concluídas</h3>
            <div className="counter">0</div>
          </div>
        </section>

        <section className="tasksList">
          {TasksMock.map((task) => (
            <Task isDone={task.isDone} message={task.message} />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
