import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { CurrencyChart } from 'components'
import styled from 'styled-components'

const Heading = styled.h1`
  margin-bottom: 20px;
`

const ChartDisplayContainer = (props) => {
  return (
    <div>
      <Heading>Chart Container {props.rates}</Heading>
      <CurrencyChart />
    </div>
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
