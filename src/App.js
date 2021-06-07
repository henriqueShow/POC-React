import { Header } from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from './views/Home';
import { About } from './views/About';
import { MovieDetail } from './views/MovieDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/movie/:id">
            <MovieDetail />
          </Route>          
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
