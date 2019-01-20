import React from 'react'

import IconButton from './IconButton'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function GitIcon() {
  return (
    <IconButton
      name="Github">
      <FontAwesomeIcon icon={['fab', 'github']} size="5x" />
      
    </IconButton>
  )
}

export default GitIcon