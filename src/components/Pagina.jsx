import React from "react"
import styled from "@emotion/styled"
import Image from "gatsby-image"
import Layout from "./Layout"
import { graphql } from "gatsby"
import ListadoPropiedades from "./ListadoPropiedades"

export const query = graphql`
  query ($id: String!) {
    allStrapiPaginas(filter: { id: { eq: $id } }) {
      nodes {
        nombre
        contenido
        imagen {
          localFile {
            sharp: childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

const ContenidoPagina = styled.div`
  width: 1200px;
  max-width: 95%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 5rem;
  }
`

const Pagina = ({
  data: {
    allStrapiPaginas: { nodes },
  },
}) => {
  const { nombre, contenido, imagen } = nodes[0]

  return (
    <Layout>
      <main className="contenedor">
        <h1>{nombre}</h1>
        <ContenidoPagina>
          <Image fluid={imagen.localFile.sharp.fluid} />
          <p>{contenido}</p>
        </ContenidoPagina>
      </main>
      {nombre === "Propiedades" ? <ListadoPropiedades /> : null}
    </Layout>
  )
}

export default Pagina
