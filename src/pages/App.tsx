import style from "./App.module.scss";
import Formulario from "../components/Formulario/Formulario";
import Lista from "../components/Lista/Lista";
import Cronometro from "../components/Cronometro/Cronometro";
import { useState } from "react";
import { ITarefa } from "../types/tarefa";

export default function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  return (
    <>
      <div className={style.AppStyle}>
        <Formulario setTarefas={setTarefas} />
        <Lista tarefas={tarefas} />
        <Cronometro />
      </div>
    </>
  );
}
