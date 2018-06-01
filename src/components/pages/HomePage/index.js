import React from 'react'
import { HomeTemplate } from 'components'
import { ChartDisplayContainer } from 'containers'
import { Button } from 'reactstrap'

const HomePage = () => {
  return (
    <HomeTemplate>
      <ChartDisplayContainer />
      <Button color="danger">Danger!</Button>
    </HomeTemplate>
  )
}

export default HomePage
