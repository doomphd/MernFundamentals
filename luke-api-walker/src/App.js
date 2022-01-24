import './App.css';
import HeaderForm from './components/HeadForm';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Planet from './views/Planet';
import Person from './views/Person';

function App() {
  return (
    <BrowserRouter>
      <HeaderForm/>
      <Switch>
        <Route path ="/planet/:id">
          <Planet/>
        </Route>
        <Route path ="/person/:id">
          <Person/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
