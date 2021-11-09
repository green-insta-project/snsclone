
import {HashRouter, Switch, Route, Link} from 'react-router-dom'
import './App.css';
import Home from './component/Home';
import Login from './component/Login';
import Img from './component/Img';


function App() {
  return (
    <HashRouter>


      <Switch>
        <Route exact path="/"><Login /></Route>
        <Route path="/Home"><Home /></Route>
        <Route path="/Img"><Img /></Route>
      </Switch>


    </HashRouter>
  );
}

export default App;
