import React from 'react'
import { shallow } from 'enzyme'
import CurrencyChart from '.'

const wrap = (props = {}) => shallow(<CurrencyChart {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ data: [{ price_close: '11', time_close: '12' }] })
  expect(wrapper.find({ data: [{ price_close: '11', time_close: '12' }] })).toHaveLength(1)
})
