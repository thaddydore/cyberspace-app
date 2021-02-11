import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from './screens/LandingPage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={LandingPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
