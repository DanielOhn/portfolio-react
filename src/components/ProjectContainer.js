import React from 'react'
import styled from 'styled-components'

const Name = styled.h1``

const Img = styled.img``

function ProjectContainer({ name, img, url, desc }) {
  return (
    <Content>
      <Name>{name}</Name>
      <Img></Img>
    </Content>
  )
}