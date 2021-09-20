import { graphql, useStaticQuery } from "gatsby"

const usePropiedades = () => {
  const resultado = useStaticQuery(graphql`
    {
      allStrapiPropiedades {
        nodes {
          nombre
          descripcion
          id
          wc
          precio
          estacionamiento
          habitaciones
          categorias {
            nombre
          }

          agentes {
            nombre
            telefono
            email
          }
          imagen {
            localFile {
              sharp: childImageSharp {
                fluid(maxWidth: 600, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  return resultado.allStrapiPropiedades.nodes.map(item => ({
    nombre: item.nombre,
    descripcion: item.descripcion,
    precio: item.precio,
    wc: item.wc,
    id: item.id,
    estacionamiento: item.estacionamiento,
    habitaciones: item.habitaciones,
    imagen: item.imagen,
    agentes: item.agentes,
    categorias: item.categorias,
  }))
}

export default usePropiedades
