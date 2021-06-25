import React from 'react'
import { Navbar, Sidebar } from '../../molecules'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.element
}

const defaultProps = {
  children: <></>
}

const Layout = ({ children }) => (
  <>
    <Navbar />
    <div className='d-flex'>
      <Sidebar />
      { children }
    </div>
  </>
)

Layout.propTypes = propTypes
Layout.defaultProps = defaultProps

export default Layout
