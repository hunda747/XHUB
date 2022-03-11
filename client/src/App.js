
import './App.css';
import {Switch, BrowserRouter,Route} from 'react-router-dom'

import Home from './pages/Home/home';

function App() {
  return (
    // <div className="App">
    //   hello world
    // </div>
    <BrowserRouter>
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
