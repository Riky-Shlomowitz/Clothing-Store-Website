import logo from './logo.svg';
import './App.css';
import { Routing } from './components/routing';
import { Nav } from './components/nav';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './redax/stor'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
        <Nav></Nav>
        <Routing></Routing>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
