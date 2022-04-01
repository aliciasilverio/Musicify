import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Welcome from './topSection/home';
import Login from './signIn/login';

import NavBarComponent from './topSection/navbar';

function App() {
  return (
    <div>
      <NavBarComponent></NavBarComponent>
    </div>
      
    
  )
}

export default App;
