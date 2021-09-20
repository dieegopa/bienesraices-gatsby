import React from "react"
import Iconos from "./Iconos"
import styled from "@emotion/styled"
import Image from "gatsby-image"
import Layout from "./Layout"
import { graphql } from "gatsby"

export const query = graphql`
  query ($id: String!) {
    allStrapiPropiedades(filter: { id: { eq: $id } }) {
      nodes {
        nombre
        descripcion
        wc
        habitaciones
        precio
        estacionamiento
        agentes {
          nombre
          telefono
          email
        }
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

const Contenido = styled.div`
  width: 1200px;
  max-width: 95%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 5rem;
  }
`
const Sidebar = styled.aside`
    .precio{
        font-size: 2rem;
        color:#75ab00;
    }

    .agente{
        margin-top: 4rem;
        border-radius: 2rem;
        background-color: #75ab00;
        padding: 3rem;
        color: white;
        margin-bottom: 4rem;

        p{
            margin: 0;
        }
    }
`

const Propiedad = ({
  data: {
    allStrapiPropiedades: { nodes },
  },
}) => {
  const {
    nombre,
    descripcion,
    wc,
    estacionamiento,
    habitaciones,
    agentes,
    imagen,
    precio,
  } = nodes[0]
  return (
    <Layout>
      <h1>{nombre}</h1>
      <Contenido>
        <main>
          <Image fluid={imagen.localFile.sharp.fluid} />
          <p>{descripcion}</p>
        </main>
        <Sidebar>
          <p className="precio">$ {precio}</p>
          <Iconos
            wc={wc}
            estacionamiento={estacionamiento}
            habitaciones={habitaciones}
          />
          <div className="agente">
            <h2>Vendedor:</h2>
            <p>{agentes.nombre}</p>
            <p>Telf: {agentes.telefono}</p>
            <p>Email: {agentes.email}</p>
          </div>
        </Sidebar>
      </Contenido>
    </Layout>
  )
}

export default Propiedad
