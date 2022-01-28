import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from "./views/Main"
import Detail from "./views/Detail"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route path= "/products/:id">
            <Detail/>
          </Route>

          <Route exact path= "/">
            <Main/>
          </Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
