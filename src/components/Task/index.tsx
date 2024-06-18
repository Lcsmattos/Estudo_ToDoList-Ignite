import { TaskType } from "../../App";
import { Trash } from "phosphor-react";
import "./styles.css";

type Props = {
  taskInfo: TaskType;
  deleteFunction: (taskId: string) => void;
  changeTaskStatus: (taskId: string, value: boolean) => void;
};

export function Task({ taskInfo, deleteFunction, changeTaskStatus }: Props) {
  return (
    <div className="taskContainer">
      <input
        type="checkbox"
        checked={taskInfo.isDone}
        onClick={() => changeTaskStatus(taskInfo.taskId, taskInfo.isDone)}
        readOnly
      />
      <div className="messageContainer">
        <h3 className={taskInfo.isDone ? "paragraph-checked" : ""}>
          {taskInfo.message}
        </h3>
      </div>
      <button title="Deletar" onClick={() => deleteFunction(taskInfo.taskId)}>
        <Trash size={24} />
      </button>
    </div>
  );
}
