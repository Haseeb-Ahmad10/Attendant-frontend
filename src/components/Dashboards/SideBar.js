import { useState } from 'react'
import classes from './SideBar.module.css'

const SideBar = () => {
    const [activeNav, setActiveNav] = useState('dashboard')
    const [sidebarOpen, setSidebarOpen] = useState('false')

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    const handleNavClick = (navItem) => {
        setActiveNav(navItem)
    }
    return (
        <div className={classes[`sidebar ${sidebarOpen ? 'open' : ''}`]}>
        <div className={classes['sidebar-header']}>
          <h3 className={classes['sidebar-title']}>Subheader</h3>
          <button className={classes['sidebar-close']} onClick={toggleSidebar}>
            {/* <X /> */}
          </button>
        </div>

        <nav className={classes['sidebar-nav']}>
          <button 
            className={classes[`nav-item ${activeNav === 'dashboard' ? 'active' : ''}`]}
            onClick={() => handleNavClick('dashboard')}
          >
            {/* <Home /> */}
            <span>Dashboard</span>
          </button>
          <button 
            className={classes[`nav-item ${activeNav === 'users' ? 'active' : ''}`]}
            onClick={() => handleNavClick('users')}
          >
            {/* <Users /> */}
            <span>Users</span>
          </button>
          <button 
            className={classes[`nav-item ${activeNav === 'settings' ? 'active' : ''}`]}
            onClick={() => handleNavClick('settings')}
          >
            {/* <Settings /> */}
            <span>Settings</span>
          </button>
        </nav>
        {sidebarOpen && <div className={classes['sidebar-overlay']} onClick={toggleSidebar}></div>}
      </div>

    )
}

export default SideBar;