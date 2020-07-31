import React from 'react';
import './App.css';
import { Route, BrowserRouter} from 'react-router-dom';
import Routes from '../../routes/Routes';
import History from '../../routes/History';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Route history={History}>{Routes}</Route>
      </div>
    </BrowserRouter>
  
  );
}

export default App;
