import React from 'react'

import { Card, Placeholder } from 'semantic-ui-react'

function Projects() {
  return (
    <Card.Group itemsPerRow={3} className="cards">
      <Card raised>
        <Card.Content>
          <Placeholder>
            <Placeholder.Image rectangular />
          </Placeholder>
        </Card.Content>
      </Card>
      <Card raised>
        <Card.Content>
          <Placeholder>
            <Placeholder.Image rectangular />
          </Placeholder>
        </Card.Content>
      </Card>
      <Card raised>
        <Card.Content>
          <Placeholder>
            <Placeholder.Image rectangular />
          </Placeholder>
        </Card.Content>
      </Card>
    </Card.Group>
  )
}

export default Projects