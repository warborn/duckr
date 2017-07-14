import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { MainContainer, HomeContainer } from 'containers'

const routes = (
  <Router>
    <MainContainer>
      <Route exact={true} path='/' component={HomeContainer} />
    </MainContainer>
  </Router>
)

export default routes
