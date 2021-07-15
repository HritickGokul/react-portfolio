import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Home from './Home';
import Nav from './components/Nav';
import Foot from './components/Foot';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/contact' component={Contact} />
        </Switch>
        <Foot />
      </div>
    </Router>
      );
}

export default App;
