import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react';
import Welcome from './topSection/welcome';
import Artists from './middleSection/artists';
import Songs from './middleSection/songs';

import NavBarComponent from './topSection/navbar';

function App() {
  return (
    <section className="App">
        <NavBarComponent>
          {/* <BrowserRouter>
          <Switch>
            <Route exact path="/middleSection/artists.jsx" Artists={Artists} />
            <Route exact path="/middleSection/songs.jsx" Songs={Songs} />
          </Switch>
          </BrowserRouter> */}
        </NavBarComponent>
      <div className="welcome-section">
        <Welcome></Welcome>
      </div>
      <Artists></Artists>
      <Songs></Songs>
    </section>
  )
}

export default App;
