import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import Contact from './Contact'

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

function App() {
  return ( 
    <Content>
      <Header />
      <Contact />
    </Content>
  )
}

export default App;
