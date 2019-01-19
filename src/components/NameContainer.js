import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  border: solid;
  padding: 4em;
  background papayawhip;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const Div = styled.div``

const Name = styled.h1`
  font-size: 1.5em;
  color: palevioletred;
  border-bottom: 4px solid;
  float: left;
`

const Title = styled.h2`
  font-size: 1 em;
  margin-top: -25px;

`

const Img = styled.img`
  height: 65px;
  width: 65px;
  float: right;
  margin-right: 200px;
  border-radius: 50%;
  border: .5px solid;
`

const Content = styled.div``

function NameContainer({ name, title, img, children }) {
  return (
    <Container>
      <Wrapper>
        <Div>
          <Name>{name}</Name>
        </Div>
        <Div>
          <Img src="https://img.tutpad.com/tut/0/0/46/15-black-cat-character.jpg?size=%3C700x&dpr=2" />
        </Div>
      </Wrapper>
      <Title>{title}</Title>
      <Content>
        {children}
      </Content>
    </Container>

  )
}

export default NameContainer