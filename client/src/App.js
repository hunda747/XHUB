
import './App.css';
import {Routes, BrowserRouter,Route} from 'react-router-dom'

import Home from './pages/Home/home';

function App() {
  return (
    // <div className="App">
    //   hello world
    // </div>
    <BrowserRouter>
      <main>
        <Routes>
          <Route exact path='/' element={<Home/>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
