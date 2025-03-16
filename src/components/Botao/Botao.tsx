import React from "react";
import style from "./Botao.module.scss";

interface BotaoProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
}

export default class Botao extends React.Component<BotaoProps> {
  render() {
    return (
      <>
        <button type={this.props.type} className={style.botao}>
          {this.props.children}
        </button>
      </>
    );
  }
}
