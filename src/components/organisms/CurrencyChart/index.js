import React from 'react'
import PropTypes from 'prop-types'
import { AreaChart, Area, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const CurrencyChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="time_close"/>
        <YAxis/>
        <Tooltip/>
        <Area type='monotone' dataKey='price_close' stroke='#8884d8' fill='#8884d8' />
      </AreaChart>
    </ResponsiveContainer>
  )
}

CurrencyChart.propTypes = {
  rates: PropTypes.array,
}

export default CurrencyChart

