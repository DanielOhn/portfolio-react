import React from 'react'
import styled from 'styled-components'

const Content = styled.div``

const Name = styled.h1``

const Icon = styled.div``

function IconButton({ name, icon, url }) {
  return ( 
    <Content>
      <Name>{name}</Name>
      <Icon>{icon}</Icon>
    </Content>
  )
}

export default IconButton