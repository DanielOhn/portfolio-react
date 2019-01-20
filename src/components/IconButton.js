import React from 'react'
import styled from 'styled-components'

const Content = styled.div``

const Name = styled.h1``

const Icon = styled.div``

function IconButton({ name, children }) {
  return ( 
    <Content>
      <Name>{name}</Name>
      <Icon>{children}</Icon>
    </Content>
  )
}

export default IconButton