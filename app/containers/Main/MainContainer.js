import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Navigation } from 'components'
import { container, innerContainer } from './styles.css'

class MainContainer extends Component {
  render () {
    return (
      <div className={container}>
        <Navigation isAuthed={true}/>
        <div className={innerContainer}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

MainContainer.propTypes = {
  children: PropTypes.any,
}

export default MainContainer
