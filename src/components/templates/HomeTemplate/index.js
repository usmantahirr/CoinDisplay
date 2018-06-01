import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Navigation, HeadJumbotron } from 'components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3.75rem;
  min-height: 100vh;
  box-sizing: border-box;
`

const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
  margin: 2rem auto;
  max-width: 920px;
`

const HomeTemplate = ({ children, ...props }) => {
  return (
    <div>
      <Navigation />
      <HeadJumbotron />
      <Wrapper {...props}>
        <Content>{children}</Content>
      </Wrapper>
    </div>
  )
}

HomeTemplate.propTypes = {
  children: PropTypes.any.isRequired,
}

export default HomeTemplate
