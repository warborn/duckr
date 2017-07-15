import React from 'react'
import PropTypes from 'prop-types'
import { FacebookAuthButton, GoogleAuthButton } from 'components'
import { centeredContainer, largeHeader, errorMsg } from 'shared/styles.css'

Authenticate.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  onAuth: PropTypes.func.isRequired,
}

export default function Authenticate ({ isFetching, error, onAuth }) {
  // Control what auth methods are available
  const facebookAuthentication = false
  const googleAuthentication = true

  return (
    <div className={centeredContainer}>
      <h1 className={largeHeader}>Authenticate</h1>
      {facebookAuthentication && 
        <FacebookAuthButton
          isFetching={isFetching}
          onAuth={onAuth} />}
      {googleAuthentication && 
        <GoogleAuthButton
          isFetching={isFetching}
          onAuth={onAuth} />}
      {error && <p className={errorMsg}>{error}</p>}
    </div>
  )
}
