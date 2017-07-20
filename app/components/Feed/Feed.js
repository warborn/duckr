import React from 'react'
import PropTypes from 'prop-types'
import { newDuckContainer, header } from './styles.css'
import { errorMsg } from 'shared/styles.css'
import { DuckContainer } from 'containers'

function NewDucksAvailable ({ handleClick }) {
  return (
    <div className={newDuckContainer} onClick={handleClick}>
      New Ducks Available
    </div>
  )
}

NewDucksAvailable.propTypes = {
  handleClick: PropTypes.func.isRequired
}

Feed.propTypes = {
  duckIds: PropTypes.array.isRequired,
  newDucksAvailable: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  resetNewDucksAvailable: PropTypes.func.isRequired
}

export default function Feed (props) {
  return props.isFetching === true
    ? <h1 className={header}>Fetching</h1>
    : <div>
        {props.newDucksAvailable && 
          <NewDucksAvailable handleClick={props.resetNewDucksAvailable} />}
        {props.duckIds.length === 0
          && <p className={header}>This is unfortunate. <br /> It appears there are no ducks yet.</p>}
        {props.duckIds.map((id) => (
          <DuckContainer 
            duckId={id}
            key={id} />
        ))}
        {props.error && <p className={errorMsg}>{props.error}</p>}
      </div>
} 
