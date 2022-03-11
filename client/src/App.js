import React from 'react';
import './App.css';
import AdminDash from './pages/AdminDash/adminDash';
import {BrowserRouter, Switch ,Route} from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
            <Route path={'/adminDash'} component={AdminDash} />
        </Switch>
      
      
      </BrowserRouter>
    
    </>
  )
}

export default App;
