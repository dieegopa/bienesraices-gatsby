import React from "react"
import { css } from "@emotion/react"
import usePropiedades from "../hooks/usePropiedades"
import PropiedadPreview from "./PropiedadPreview"
import * as listadoPropiedadesCss from "../css/listadoPropiedades.module.css"
import useFiltro from "../hooks/useFiltro"

const ListadoPropiedades = () => {
  const resultado = usePropiedades()

  const [propiedades] = React.useState(resultado)
  const [filtradas, setFiltradas] = React.useState([])

  const { categoria, FiltroUI } = useFiltro()

  React.useEffect(() => {
    if (categoria) {
      const filtro = propiedades.filter(
        item => item.categorias.nombre === categoria
      )
      setFiltradas(filtro)
    } else {
      setFiltradas(propiedades)
    }

    //eslint-disable-next-line
  }, [categoria])

  return (
    <>
      <h2
        css={css`
          margin-top: 4rem;
        `}
      >
        Nuestras propiedades
      </h2>
      {FiltroUI()}
      <ul className={listadoPropiedadesCss.propiedades}>
        {filtradas.map(item => (
          <PropiedadPreview key={item.id} propiedad={item} />
        ))}
      </ul>
    </>
  )
}

export default ListadoPropiedades
