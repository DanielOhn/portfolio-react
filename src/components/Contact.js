import React from 'react'
import styled from 'styled-components'

import IconButton from './IconButton'

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
      <IconButton />
    </Container>
  )
}

export default Contact