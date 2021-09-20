const urlSlug = require("url-slug")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
    {
      allStrapiPaginas {
        nodes {
          nombre
          id
        }
      }
      allStrapiPropiedades {
        nodes {
          nombre
          id
        }
      }
    }
  `)

  //console.log(resultado.data.allStrapiPropiedades)

  if (resultado.errors) {
    reporter.panic("No hubo resultados", resultado.errors)
  }

  const propiedades = resultado.data.allStrapiPropiedades.nodes
  const paginas = resultado.data.allStrapiPaginas.nodes

  paginas.forEach(item => {
    actions.createPage({
      path: urlSlug(item.nombre),
      component: require.resolve("./src/components/Pagina.jsx"),
      context: {
        id: item.id,
      },
    })
  })

  propiedades.forEach(item => {
    actions.createPage({
      path: urlSlug(item.nombre),
      component: require.resolve("./src/components/Propiedad.jsx"),
      context: {
        id: item.id,
      },
    })
  })
}
