import { Clipboard } from "phosphor-react";
import "./styles.css";

export function Empty() {
  return (
    <section className="container">
      <Clipboard size={58} className="clipboard" />
      <h2>Você ainda não tem tarefas cadastradas</h2>
      <h2>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </h2>
    </section>
  );
}
