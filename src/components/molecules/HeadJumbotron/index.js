import React from 'react'
import { Jumbotron } from 'reactstrap'

const jumbotronStyle = {
  marginBottom: '0px',
}
const HeadJumbotron = () => {
  return (
    <Jumbotron style={jumbotronStyle}>
      <h1>BTC/ETH Exchange Rates</h1>
    </Jumbotron>
  )
}

HeadJumbotron.propTypes = {}

export default HeadJumbotron
