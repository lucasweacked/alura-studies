import style from "./App.module.scss";
import Formulario from "../components/Formulario/Formulario";
import Lista from "../components/Lista/Lista";

export default function App() {
  return (
    <>
      <div className={style.AppStyle}>
        <Formulario />
        <Lista />
      </div>
    </>
  );
}
