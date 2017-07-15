import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { 
  MainContainer, HomeContainer, AuthenticateContainer, 
  FeedContainer, LogoutContainer } from 'containers'

export default function getRoutes (checkAuth) {
  return (
    <Router>
      <MainContainer>
        <Switch>
          <Route exact={true} path='/' component={checkAuth(HomeContainer)} />
          <Route path='/login' component={checkAuth(AuthenticateContainer)} />
          <Route path='/feed' component={checkAuth(FeedContainer)} />
          <Route path='/logout' component={LogoutContainer} />
        </Switch>
      </MainContainer>
    </Router>
  )
}
