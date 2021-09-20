import React from "react"
import { Helmet } from "react-helmet"
import { Global, css } from "@emotion/react"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }

          body {
            font-size: 1.6rem;
            line-height: 2;
            font-family: "Lato", sans-serif;
          }

          h1,
          h2,
          h3 {
            margin: 0;
            line-height: 1.5;
          }

          h1,
          h2 {
            text-align: center;
            font-family: "Lato", sans-serif;
            font-weight: 400;
          }

          h3 {
            font-family: "Roboto", sans-serif;
          }

          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }

          .contenedor {
            max-width: 1200px;
            margin: 0 auto;
            width: 95%;
          }

          img {
            max-width: 100%;
          }
        `}
      />
      <Helmet>
        <title>Bienes Raices Gatsby</title>
        <meta
          name="description"
          content="sitio web de bienes raices en gatsby"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,900&family=Roboto:ital,wght@0,400;0,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      {children}
    </>
  )
}

export default Layout
