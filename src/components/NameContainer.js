import React from 'react'

import { Header, Image, Grid } from 'semantic-ui-react'

function NameContainer({ name, title, img, desc }) {
  return (
    <Grid centered columns={2}>
      <Grid.Row>
        <Grid.Column width={10}>
          <Header as="h1">{name}</Header>
          <Header as="h2">{title}</Header>
          <p>{desc}</p>
        </Grid.Column>
        <Grid.Column width={6}>        
          <Image centered src={img} size="small" circular />
        </Grid.Column>
      </Grid.Row>        
    </Grid>
  )
}

export default NameContainer