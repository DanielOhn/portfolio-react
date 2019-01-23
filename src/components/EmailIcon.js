import React from 'react'
import styled from 'styled-components'

import IconButton from './IconButton'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Link = styled.a`
  color: black;
`

function EmailIcon() {
  return (
    <IconButton
      name="Contact">
      <Link href="/">
        <FontAwesomeIcon icon={['far', 'envelope']} size="5x" />
      </Link>
    </IconButton>
  )
}

export default EmailIcon