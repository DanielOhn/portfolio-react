import React from 'react'

import 'semantic-ui-css/semantic.min.css'

import { Grid } from 'semantic-ui-react'

import Header from './Header'
// import Contact from './Contact'
// import Projects from './Projects'

function App() {
  return ( 
      <Grid columns='equal'>
        <Grid.Row stretched>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column width={9}>
            <Header />
            {/* <Contact />
            <Projects /> */}
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
        </Grid.Row>
      </Grid>
  )
}

export default App;
