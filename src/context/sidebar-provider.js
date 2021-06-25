import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.element
}

const defaultProps = {
  children: <></>
}

const SidebarContext = createContext()

export const SidebarProvider = ({ children }) => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <SidebarContext.Provider value={{
      isMobileMenuOpen    : isMobileMenuOpen,
      setIsMobileMenuOpen : setIsMobileMenuOpen 
    }}
    >
      { children }
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => {
  const context = useContext(SidebarContext)
  if (context === undefined) {
    throw new Error('useSidebar must be used within an SidebarProvider')
  }
  return context
}


SidebarContext.propTypes = propTypes
SidebarContext.defaultProps = defaultProps