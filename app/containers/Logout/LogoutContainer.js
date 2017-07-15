import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Logout } from 'components'
import { logoutAndUnauth } from 'redux/modules/users'

class LogoutContainer extends Component {
  componentDidMount () {
    this.props.dispatch(logoutAndUnauth())
  }

  render () {
    return (
      <Logout />
    )
  }
}

LogoutContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(LogoutContainer)