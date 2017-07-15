import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { checkIfAuthed } from './auth'

export default (BaseComponent, store) => {
  class Restricted extends Component {
    componentWillMount() {
      this.checkAuthentication(this.props);
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.location !== this.props.location) {
        this.checkAuthentication(nextProps);
      }
    }

    checkAuthentication(props) {
      const { history } = props;
      const nextPathName = history.location.pathname
      const isAuthed = checkIfAuthed(store)
      if(nextPathName === '/' || nextPathName === '/login') {
        if(isAuthed === true) {
          history.replace({ pathname: '/feed' })
        }
      } else {
        if(isAuthed !== true) {
          history.replace({ pathname: '/login' })
        }
      }
    }

    render() {
      return <BaseComponent {...this.props} />;
    }
  }

  return withRouter(Restricted);
}