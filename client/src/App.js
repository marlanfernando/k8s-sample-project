import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Route } from 'react-router-dom'
import otherpage from './otherpage';
import Fib from './fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Link to="/">Home</Link>
          <Link to="otherpage"> Other page</Link>
        </header>
        <body>
          <div>
            <Route exact path="/" component={Fib}/>
            <Route path="/otherpage" component={otherpage}/>
          </div>
        </body>
        
      </div>
    </Router>
  );
}

export default App;
