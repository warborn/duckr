import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { 
  MainContainer, HomeContainer, AuthenticateContainer, 
  FeedContainer, LogoutContainer, UserContainer, DuckDetailsContainer } from 'containers'

export default function getRoutes (checkAuth) {
  return (
    <Router>
      <MainContainer>
        <Switch>
          <Route exact={true} path='/' component={checkAuth(HomeContainer)} />
          <Route path='/login' component={checkAuth(AuthenticateContainer)} />
          <Route path='/feed' component={checkAuth(FeedContainer)} />
          <Route path='/duck-detail/:duckId' component={checkAuth(DuckDetailsContainer)}/>
          <Route path='/:uid' component={checkAuth(UserContainer)}/>
          <Route path='/logout' component={LogoutContainer} />
        </Switch>
      </MainContainer>
    </Router>
  )
}
