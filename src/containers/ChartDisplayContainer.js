import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { CurrencyChart } from 'components'
import styled from 'styled-components'
import { Button } from 'reactstrap'
import { fetchRateHistory } from 'store/actions'

const Heading = styled.h1`
  margin-bottom: 20px;
`

class ChartDisplayContainer extends React.Component {
  static propTypes = {
    rates: PropTypes.array,
    isLoading: PropTypes.bool,
    dispatch: PropTypes.func,
  }

  static defaultProps = {
    rates: [],
    isLoading: false,
  }

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    this.setState({
      isLoading: true,
    })

    this.props.dispatch(fetchRateHistory('ohlcv/BITSTAMP_SPOT_BTC_USD/latest', {
      period_id: '1DAY',
      limit: 30,
    }))
  }

  componentWillMount() {
    this.setState({
      isRateLoaded: false,
      isLoading: false,
      rates: [],
    })
  }

  componentWillReceiveProps({ rates, isLoading }) {
    console.log('propsChanged ', rates)
    this.setState({
      ...this.state,
      isLoading,
    })

    if (!isLoading && rates && rates.length > 0) {
      this.setState({
        ...this.state,
        rates: rates,
        isLoading,
        isRateLoaded: true,
      })
    }
  }

  render() {
    console.log('new render', this)

    if (this.state.isLoading) {
      return (
        <div>Loading Rates...</div>
      )
    }

    if (!this.state.isRateLoaded) {
      return (
        <div>No Data Found <Button onClick={this.handleClick} color="info">Reload</Button></div>
      )
    }

    return (
      <div>
        <Heading>Chart Container <Button onClick={this.handleClick} color="info">Reload</Button> </Heading>
        <CurrencyChart data={this.state.rates} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  rates: state.rates.data,
  isLoading: state.rates.isLoading,
})

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartDisplayContainer)
