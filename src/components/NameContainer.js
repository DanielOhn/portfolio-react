import React from 'react'

import { Container, Header, Image, Grid } from 'semantic-ui-react'

function NameContainer({ name, title, img, desc }) {
  return (
    <Container fluid>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <Header as="h1">{name}</Header>
            <Header as="h2">{title}</Header>
            <p>{desc}</p>
          </Grid.Column>
          <Grid.Column>        
            <Image src={img} size="small" circular />
          </Grid.Column>
        </Grid.Row>        
     </Grid>
    </Container>
  )
}

export default NameContainer