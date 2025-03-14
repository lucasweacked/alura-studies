import Botao from "../Botao/Botao";
import style from "./Cronometro.module.scss";
import Relogio from "./Relogio/Relogio";

export default function Cronometro() {
  return (
    <>
      <div className={style.cronometro}>
        <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>

        <div className={style.relogioWrapper}>
          <Relogio />
        </div>
        <Botao>Começar</Botao>
      </div>
    </>
  );
}
