import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Sub from './components/Sub';

function App() {
  return (
    <div className="App">
      <Main/>
      <h2>Things I need to do: </h2>
      <Sub/>
    </div>
  );
}

export default App;
