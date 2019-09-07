import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import breakpoints from "styled-components-breakpoints"

const Wrapper = styled.section`
  text-align: center;
  /* border-radius: 10px; */
  /* padding: 5.5rem; */
  /* background-image: "url()" */
  /* margin: 3rem auto 0 auto; */
  width: 100vw;
  height: 10vh;
  background: papayawhip;
`

class Header extends React.Component {
  render() {
    return (
      <Wrapper />
    )
  }
}

export default Header
