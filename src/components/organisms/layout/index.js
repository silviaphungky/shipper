import React from 'react'
import { Navbar, Sidebar } from '../../molecules'

const Layout = ({ children }) => (
  <>
    <Navbar />
    <div className='d-flex'>
      <Sidebar />
      { children }
    </div>
  </>
)

export default Layout
