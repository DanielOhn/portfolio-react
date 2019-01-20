import React from 'react'
import styled from 'styled-components'

import IconButton from './IconButton'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Link = styled.a`
  color: black;
`

function GitIcon() {
  return (
    <IconButton
      name="Github">
      <Link href="https://github.com/DanielOhn" target="_blank">
        <FontAwesomeIcon icon={['fab', 'github']} size="5x" />
      </Link>
    </IconButton>
  )
}

export default GitIcon