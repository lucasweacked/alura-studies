import { useState } from "react";
import Item from "./Item/Item";
import style from "./Lista.module.scss";

export default function Lista() {
  const [tarefas, setTarefas] = useState([
    { tarefa: "React", tempo: "02:00:00" },
    { tarefa: "JavaScript", tempo: "01:00:00" },
    { tarefa: "TypeScript", tempo: "03:00:00" },
  ]);
  return (
    <>
      <aside className={style.listaTarefas}>
        <h2
          onClick={() => {
            console.log("h2 clicado!");
            setTarefas([
              ...tarefas,
              { tarefa: "Estudar estado", tempo: "05:00:50" },
            ]);
          }}
        >
          Estudos do dia
        </h2>
        <ul>
          {tarefas.map((item, index) => (
            <Item key={index} {...item} />
          ))}
        </ul>
      </aside>
    </>
  );
}
