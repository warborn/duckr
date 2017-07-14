import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { MainContainer, HomeContainer, AuthenticateContainer } from 'containers'

const routes = (
  <Router>
    <MainContainer>
      <Route exact={true} path='/' component={HomeContainer} />
      <Route path='/login' component={AuthenticateContainer} />
    </MainContainer>
  </Router>
)

export default routes
