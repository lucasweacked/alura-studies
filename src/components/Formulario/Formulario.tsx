import { useState } from "react";
import Botao from "../Botao/Botao";
import style from "./Formulario.module.scss";

export default function Formulario() {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00");

  function adicionarTarefa(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("State: ", { tarefa, tempo });
  }
  return (
    <>
      <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            value={tarefa}
            onChange={(e) => {
              setTarefa(e.target.value);
            }}
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            value={tempo}
            onChange={(e) => {
              setTempo(e.target.value);
            }}
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Botao>Adicionar</Botao>
      </form>
    </>
  );
}
