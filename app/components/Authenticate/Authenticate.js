import React from 'react'
import PropTypes from 'prop-types'
import { FacebookAuthButton } from 'components'
import { centeredContainer, largeHeader, errorMsg } from 'shared/styles.css'

Authenticate.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  onAuth: PropTypes.func.isRequired,
}

export default function Authenticate ({ isFetching, error, onAuth }) {
  return (
    <div className={centeredContainer}>
      <h1 className={largeHeader}>Authenticate</h1>
      <FacebookAuthButton
        isFetching={isFetching}
        onAuth={onAuth} />
      {error && <p className={errorMsg}>{error}</p>}
    </div>
  )
}
