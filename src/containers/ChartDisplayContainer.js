import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

const ChartDisplayContainer = (props) => {
  return (
    <h1>Chart Container {props.rates}</h1>
  )
}

ChartDisplayContainer.propTypes = {
  rates: PropTypes.array,
}

const mapStateToProps = state => ({
  rates: state.rates,
})

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChartDisplayContainer))
