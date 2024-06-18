import { Trash } from "phosphor-react";
import "./styles.css";

type Props = {
  message: string;
  isDone: boolean;
};

export function Task({ isDone, message }: Props) {
  return (
    <div className="taskContainer">
      <input type="checkbox" id="scales" name="isTaskDone" checked={isDone} />
      <div className="messageContainer">
        <h3>{message}</h3>
      </div>
      <button title="Deletar">
        <Trash size={24} />
      </button>
    </div>
  );
}
