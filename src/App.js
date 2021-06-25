import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { SidebarProvider } from './context/sidebar-provider'
import DriverManagementPage from './pages/driver-management'
import HomePage from './pages/home'
import PickupPage from './pages/pickup'

function App() {
  return (
    <SidebarProvider>
      <Router>
        <Route 
          exact
          path='/' 
          component={ HomePage }
        />
        <Route 
          exact
          path='/driver-management' 
          component={ DriverManagementPage } 
        />
        <Route 
          exact
          path='/pickup' 
          component={ PickupPage }
        />
      </Router>
    </SidebarProvider>
  )
}

export default App
