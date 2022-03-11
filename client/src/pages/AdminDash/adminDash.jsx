import React from 'react'
import './adminDash.css'
import {Switch , BrowserRouter as Router , Route} from 'react-router-dom'

import Sidebar from '../../components/SideBar/sidebar'

import Dashboard from '../Dashboard/dashboard'
import Profile from '../Profile/profile'
import Training from '../Training/training'

export default function AdminDash() {
  return (
        <div className='adminDash'>
            <Router>
                <Sidebar />   
                <Switch>
                    <Route exact  path={'/adminDash'} component={Dashboard} />
                    <Route exact path={'/adminDash/profile'} component={Profile} />
                    <Route exact path={'/adminDash/training'} component={Training} />
                </Switch>
            </Router>
        
        
        </div>


                
  )
}



