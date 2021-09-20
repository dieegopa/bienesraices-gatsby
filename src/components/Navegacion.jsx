import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    padding-bottom: 0;
  }
`
const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  padding: 0.5rem;
  margin-right: 0;
  width: fit-content;
  transition: all 0.3s ease-in-out;

  &:last-of-type {
    margin-right: 0;
  }

  &.pagina-actual {
    border-bottom: 2px solid white;
  }

  &:hover {
    color: #75ab00;
  }

  @media (min-width: 768px) {
    margin-right: 1rem;
  }
`

const Navegacion = () => {
  return (
    <Nav>
      <NavLink to="/" activeClassName="pagina-actual">
        Inicio
      </NavLink>
      <NavLink to="/propiedades" activeClassName="pagina-actual">
        Propiedades
      </NavLink>
      <NavLink to="/nosotros" activeClassName="pagina-actual">
        Nosotros
      </NavLink>
    </Nav>
  )
}

export default Navegacion
