import React from 'react'
import PropTypes from 'prop-types'
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const CurrencyChart = ({ data }) => {
  const tickFormatter = (time) => {
    return new Date(time).toLocaleString()
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis tickFormatter={tickFormatter} dataKey="time_close" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" height={36} />
        <Area type="monotone" dataKey="price_close" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  )
}

CurrencyChart.propTypes = {
  data: PropTypes.array,
}

export default CurrencyChart

