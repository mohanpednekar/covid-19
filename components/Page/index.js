import React from 'react'
import PropTypes from 'prop-types'

const Page        = props => {
  const {children} = props
  return (
      <div style={{width: 600, margin: '0 auto'}}>{children}</div>
  )
}
Page.propTypes    = {
  children: PropTypes.element,
}
Page.defaultProps = {
  children: null,
}
export default Page
