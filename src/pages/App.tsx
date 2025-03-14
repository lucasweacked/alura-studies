import style from "./App.module.scss";
import Formulario from "../components/Formulario/Formulario";
import Lista from "../components/Lista/Lista";
import Cronometro from "../components/Cronometro/Cronometro";

export default function App() {
  return (
    <>
      <div className={style.AppStyle}>
        <Formulario />
        <Lista />
        <Cronometro />
      </div>
    </>
  );
}
