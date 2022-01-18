import logo from './logo.svg';
import './App.css';
import Main from './components/Main';


  function App() {
    return (
      <div className="App">
          <Main firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
          <Main firstName="John" lastName="Smith" age={88} hairColor="Brown" />
      </div>
    );
  }

export default App;
