import React from 'react';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom" ;

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <h1>This is the search page</h1>

          </Route>
          <Route path="/">
            <Home/>

          </Route>
        </Switch>
    
      </Router>
      
    </div>
  );
}

export default App;
