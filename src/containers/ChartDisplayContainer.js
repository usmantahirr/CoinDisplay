import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { CurrencyChart } from 'components'
import styled from 'styled-components'
import { Button } from 'reactstrap'
import { fetchCoinDetails } from 'store/actions'

const Heading = styled.h1`
  margin-bottom: 20px;
`

class ChartDisplayContainer extends React.Component {
  static propTypes = {
    rates: PropTypes.object,
    dispatch: PropTypes.func,
  }

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    this.props.dispatch(fetchCoinDetails('resource', 'action state'))
  }

  render() {
    return (
      <div>
        <Heading>Chart Container <Button onClick={this.handleClick} color="info">Reload</Button> </Heading>
        <CurrencyChart />
      </div>
    )
  }
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
