
import {HashRouter, Switch, Route, Link} from 'react-router-dom'

import './App.css';
import Home from './component/Home';
import Login from './component/Login';

function App() {
  return (
    <HashRouter>


      <Switch>
        <Route exact path="/"><Login /></Route>
        <Route path="/Home"><Home /></Route>
      </Switch>


    </HashRouter>
  );
}

export default App;
