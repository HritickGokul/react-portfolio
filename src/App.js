import Home from './Home';
import Nav from './components/Nav';
import Foot from './components/Foot';
// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Nav />
      {/* <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/contact' component={Contact} />
      </Switch> */}
      <Home />
      <Foot />
    </div>
  );
}

export default App;
