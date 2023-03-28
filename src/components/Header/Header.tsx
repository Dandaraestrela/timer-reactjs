import * as S from "./Header.styles";

import { Timer, Scroll } from "phosphor-react";

import logoIgnite from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <S.HeaderContainer>
      <span>
        <img src={logoIgnite} alt="imagem de logotipo" />
      </span>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </S.HeaderContainer>
  );
}
