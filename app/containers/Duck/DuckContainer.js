import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Duck } from 'components'

class DuckContainer extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  goToProfile (e) {
    e.stopPropagation()
    this.context.router.history.push(`/${this.props.duck.uid}`)
  }

  handleClick (e) {
    e.stopPropagation()
    this.context.router.push(`/duck-detail/${this.props.duck.duckId}`)
  }

  render () {
    return (
      <Duck 
        goToProfile={this.goToProfile}
        onClick={this.props.hideReplyBtn === true ? null : this.props.handleClick}
        {...this.props} />
    )
  }
}

DuckContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

DuckContainer.propTypes = {
  duckId: PropTypes.string.isRequired,
  numberOfLikes: PropTypes.number,
  isLiked: PropTypes.bool.isRequired,
  hideLikeCount: PropTypes.bool.isRequired,
  hideReplyBtn: PropTypes.bool.isRequired,
  handleDeleteLike: PropTypes.func.isRequired,
  addAndHandleLike: PropTypes.func.isRequired
}

DuckContainer.defaultProps = {
  hideReplyBtn: false,
  hideLikeCount: true,
}

function mapStateToProps ({ ducks, likeCount, usersLikes }, props) {
  return {
    duck: ducks[props.duckId],
    hideLikeCount: props.hideLikeCount,
    hideReplyBtn: props.hideReplyBtn,
    isLiked: usersLikes[props.duckId] === true,
    numberOfLikes: likeCount[props.duckId]
  }
}

export default connect(
  mapStateToProps
)(DuckContainer)