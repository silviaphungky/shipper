import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSidebar } from '../../../context/sidebar-provider'

const sidebarMenus = [
  {
    name : 'Beranda',
    icon : <i className="fas fa-home"></i>,
    slug : '/'
  },
  {
    name : 'Driver Management',
    icon : <i className="fas fa-user-circle"/>,
    slug : '/driver-management'
  },
  {
    name : 'Pickup',
    icon : <i className="far fa-calendar-alt"></i>,
    slug : '/pickup'
  }
]

const Sidebar = () => {

  const { isMobileMenuOpen } = useSidebar()

  const location = useLocation()
  const slug = location.pathname
  
  return(
    <ul className={ `sidebar__menu ${isMobileMenuOpen ? 'show' : 'hide'}` }>
      {
        sidebarMenus.map((menu) => (
          <Link 
            to={ menu.slug }
            key={ menu.name } 
          >
            <li 
              className={ `text-${slug.toLowerCase() === menu.slug.toLowerCase() ? 'primary active' : 'dark'}` }
            >
              { menu.icon }
              { menu.name }
            </li>
          </Link>
        ))
      }
    </ul>
  )
}

export default Sidebar
