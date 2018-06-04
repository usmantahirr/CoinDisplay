import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { CurrencyChart, Select } from 'components'
import styled from 'styled-components'
import { Button, Row } from 'reactstrap'
import { fetchRateHistory } from 'store/actions'

const Heading = styled.h1`
  margin-bottom: 20px;
`

const PERIODS = {
  D1: '1DAY',
  D2: '2DAY',
  D3: '3DAY',
  D7: '7DAY',
  M1: '1MTH',
}

const CURRENCIES = {
  BTC: 'BTC',
  ETH: 'ETH',
}

const CONFIG = {
  period_id: PERIODS.D1,
  currency: CURRENCIES.BTC,
  limit: 30,
}

class ChartDisplayContainer extends React.Component {
  static propTypes = {
    rates: PropTypes.array,
    isLoading: PropTypes.bool,
    query: PropTypes.object,
    dispatch: PropTypes.func,
  }

  static defaultProps = {
    rates: [],
    isLoading: false,
    query: {
      period_id: CONFIG.period_id,
      limit: CONFIG.limit,
    },
  }

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)

    // TODO: Change this ETH to constant coming from shared
    this.state = {
      currencySelection: 'BTC',
      period: '1DAY',
      isRateLoaded: false,
    }
  }

  componentWillMount() {
    this.setState({
      ...this.state,
      query: this.props.query,
      isLoading: this.props.isLoading,
      rates: this.props.rates,
    })
  }

  componentWillReceiveProps({ rates, isLoading }) {
    this.setState({
      ...this.state,
      isLoading,
    })

    if (!isLoading && rates && rates.length > 0) {
      this.setState({
        ...this.state,
        rates,
        isLoading,
        isRateLoaded: true,
      })
    }
  }

  handleClick(e) {
    e.preventDefault()
    this.setState({
      ...this.state,
      isLoading: true,
    })

    this.props.dispatch(fetchRateHistory('ohlcv/BITSTAMP_SPOT_BTC_USD/latest', {
      period_id: '1DAY',
      limit: 30,
    }))
  }

  handleChange(e) {
    e.preventDefault()
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>Loading Rates...</div>
      )
    }

    if (!this.state.isRateLoaded) {
      return (
        <div>No Data Found <Button onClick={this.handleClick} color="info">Load Rates</Button></div>
      )
    }

    return (
      <div>
        <Heading>Chart Container <Button onClick={this.handleClick} color="info">Reload Rates</Button></Heading>
        <Row>
          <Select
            label="Source Currency"
            id="currency"
            columns="6"
            name="currencySelection"
            value={this.state.currencySelection}
            handleChange={this.handleChange}
          >
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
          </Select>

          <Select
            label="Time Interval"
            id="period"
            columns="6"
            name="period"
            value={this.state.period}
            handleChange={this.handleChange}
          >
            <option value="1DAY">1 Day</option>
            <option value="3DAY">3 Days</option>
            <option value="7DAY">7 Days</option>
            <option value="1MTH">1 Month</option>
          </Select>
        </Row>
        <Row>
          <CurrencyChart data={this.state.rates} />
        </Row>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  rates: state.rates.data,
  isLoading: state.rates.isLoading,
  query: state.rates.query,
})

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartDisplayContainer)
