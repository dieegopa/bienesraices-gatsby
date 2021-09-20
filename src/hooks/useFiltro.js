import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"

const Formulario = styled.form`
  max-width: 95%;
  display: flex;
  margin-top: 2rem;
  border: 1px solid #e1e1e1;
  width: 1200px;
  margin: 2rem auto 0 auto;
`

const Select = styled.select`
  flex: 1;
  padding: 1rem;
  appearance: none;
  border: none;
  font-family: "Lato", sans-serif;
`

const useFiltro = () => {
  const [categoria, setCategoria] = React.useState("")

  const resultado = useStaticQuery(graphql`
    {
      allStrapiCategorias {
        nodes {
          nombre
          id
        }
      }
    }
  `)

  const categorias = resultado.allStrapiCategorias.nodes

  const FiltroUI = () => (
    <Formulario>
      <Select onChange={e => setCategoria(e.target.value)} value={categoria}>
        <option value="">Filtrar</option>
        {categorias.map(item => (
          <option value={item.nombre} key={item.id}>
            {item.nombre}
          </option>
        ))}
      </Select>
    </Formulario>
  )

  return {
    categoria,
    FiltroUI,
  }
}

export default useFiltro
