import React from 'react'
import styled from 'styled-components'

import Header from './Header'

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

function App() {
  return ( 
    <Content>
      <Header />
    </Content>
  )
}

export default App;
