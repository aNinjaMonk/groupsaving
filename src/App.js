import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Group from './Group';
import Home from './Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/group">
          <Group />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
