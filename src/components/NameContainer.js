import React from 'react'

import { Container, Header, Image } from 'semantic-ui-react'

function NameContainer({ name, title, children }) {
  return (
    <Container fluid>
      <Header as="h2">{name}</Header>
      <Image src="https://img.tutpad.com/tut/0/0/46/15-black-cat-character.jpg?size=%3C700x&dpr=2" />
      <Header as="h4">{title}</Header>
      <p>
        {children}
      </p>
    </Container>
  )
}

export default NameContainer