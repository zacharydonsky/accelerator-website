import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import breakpoints from "styled-components-breakpoints"
import GlobalStyle from "../styles/GlobalStyle"


import Header from "../components/header.js"
import Mission from "../components/mission.js"
class IndexPage extends React.Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Accelerator Project</title>
          <meta
            name="description"
            content="Gatsby example site using Styled Components"
          />
          <meta name="referrer" content="origin" />
        </Helmet>
        <GlobalStyle />
        <Header/>
        <Mission />
      </Fragment>
    )
  }
}

export default IndexPage
