import React from 'react'

import { Container, Grid, GridColumn } from 'semantic-ui-react'

import GitIcon from './GitIcon'
import EmailIcon from './EmailIcon'


function Contact() {
  return (
    <Container>
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column>
            <GitIcon />
          </Grid.Column>
          <Grid.Column>
            <EmailIcon />
          </Grid.Column>
        </Grid.Row> 
      </Grid>
    </Container>
  )
}

export default Contact