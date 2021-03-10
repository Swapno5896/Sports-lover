import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound'
import ShowteamDetal from './components/ShowTeamDetail/ShowTeamDetail'
const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/ShowTeamDetail/:idLeague'>
            <ShowteamDetal></ShowteamDetal>
          </Route>
          <Route path='*'>
              <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
     
    </div>
  );
};

export default App;