import React from 'react'
import styled from 'styled-components'

import GitIcon from './GitIcon'
import EmailIcon from './EmailIcon'

const Container = styled.section`
  border: solid;
  padding: 4em;
  background: papayawhip;
  display: flex;
  flex-direction: row;
`

function Contact() {
  return (
    <Container>
      Hello
      <GitIcon />
      <EmailIcon />
    </Container>
  )
}

export default Contact