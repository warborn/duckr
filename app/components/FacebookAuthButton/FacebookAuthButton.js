import React from 'react'
import PropTypes from 'prop-types'
import { button } from './styles.css'

FacebookAuthButton.propTypes = {
  onAuth: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

export default function FacebookAuthButton ({ onAuth, isFetching }) {
  return (
    <button className={button} onClick={onAuth}>
      {isFetching === true
        ? 'Loading'
        : 'Login with facebook'}
    </button>
  )
}
