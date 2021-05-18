//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from "./pages/home.page";
import Timer from "./pages/timer.page";
import Clock from "./pages/clock.page";
import "./style.css";

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/timer/:work/:rest/:brief/:reps" component={Timer} />
          <Route exact path="/clock" component={Clock} />
        </Switch>
    </Router>
  );
}

export default App;
