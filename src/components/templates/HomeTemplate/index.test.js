import React from 'react'
import { mount, shallow } from 'enzyme'
import HomeTemplate from '.'

const wrap = (props = {}) => shallow(<HomeTemplate {...props}>test</HomeTemplate>)

it('mounts', () => {
  mount(<HomeTemplate>test</HomeTemplate>)
})

it('renders children when passed in', () => {
  const wrapper = wrap()
  expect(wrapper.contains('test')).toBe(true)
})
