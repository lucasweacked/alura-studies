import style from "./App.module.scss";
import Formulario from "../components/Formulario/Formulario";
import Lista from "../components/Lista/Lista";
import Cronometro from "../components/Cronometro/Cronometro";
import { useState } from "react";
import { ITarefa } from "../types/tarefa";

export default function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.map((tarefa) => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
      }))
    );
  }

  function finalizarTarefas() {
    if (selecionado) {
      setSelecionado(undefined);
      setTarefas((tarefasAnteriores) =>
        tarefasAnteriores.map((tarefa) => {
          if (tarefa.id === selecionado.id) {
            return {
              ...tarefa,
              selecionado: false,
              completado: true,
            };
          }
          return tarefa;
        })
      );
    }
  }
  return (
    <>
      <div className={style.AppStyle}>
        <Formulario setTarefas={setTarefas} />
        <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
        <Cronometro
          selecionado={selecionado}
          finalizarTarefas={finalizarTarefas}
        />
      </div>
    </>
  );
}
