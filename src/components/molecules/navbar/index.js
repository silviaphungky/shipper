import React from 'react'
import { Nav, Navbar as RsNavbar, NavbarBrand, NavItem } from 'reactstrap'
import { useSidebar } from '../../../context/sidebar-provider'

const Navbar = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useSidebar()

  return(
    <>
      <RsNavbar className='navbar position-sticky top-0 bg-light'>
        <div>
          <i 
            className={ `${isMobileMenuOpen ? 'd-none' : 'd-block'} fas fa-bars` }
            onClick={ () => setIsMobileMenuOpen(true) }
          />
          <i 
            className={ `${isMobileMenuOpen ? 'd-block' : 'd-none'} fas fa-times` }
            onClick={ () => setIsMobileMenuOpen(false) }
          />
        </div>
        <NavbarBrand href="/">
          <img 
            src='/logo-shipper.png' 
            alt='logo shipper' 
            style={{ width: '8rem' }}
          />
        </NavbarBrand>
        <Nav>
          <NavItem className='d-flex align-items-center'>
            <span className='navbar__text'>Hello, <span className='text-primary'>Shipper User</span></span>
            <i className="fas fa-user-circle fa-2x ml-2 text-secondary"></i>
          </NavItem>
        </Nav>
      </RsNavbar>
    </>
  )
}

export default Navbar