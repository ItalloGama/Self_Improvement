import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Comments from './pages/Comments'
import Home from './pages/Home'
import Nav from './components/Nav'
import './App.css'
function App() {

  
  return (
    <div className="App">
      <Nav />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/comments" component={Comments} />
          {/* <Route exact path="/comments" component={Comments} /> */}
        </Switch>
      </main>
    </div>
  )
}

export default App

 