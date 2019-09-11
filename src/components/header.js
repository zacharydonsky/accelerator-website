import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import breakpoints from "styled-components-breakpoints"

const Wrapper = styled.section`
  text-align: center;
  width: 100vw;
  height: 100vh;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
`
const TitleWrapper = styled.h1`
  color: white;
`

class Header extends React.Component {
  render() {
    return (
      <Wrapper>
        <TitleWrapper>
          Fart!
        </TitleWrapper>
      </Wrapper>
    )
  }
}

export default Header
