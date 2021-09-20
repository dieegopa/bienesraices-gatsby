import { graphql, useStaticQuery } from "gatsby"

const useInicio = () => {
  const resultado = useStaticQuery(graphql`
    {
      allStrapiPaginas(filter: { nombre: { eq: "Inicio" } }) {
        nodes {
          nombre
          imagen {
            localFile {
              sharp: childImageSharp {
                fluid(
                  maxWidth: 1800
                  duotone: {
                    highlight: "#222222"
                    shadow: "#192550"
                    opacity: 30
                  }
                ) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          contenido
        }
      }
    }
  `)

  return resultado.allStrapiPaginas.nodes.map(item => ({
    nombre: item.nombre,
    contenido: item.contenido,
    imagen: item.imagen,
  }))
}

export default useInicio
