import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card.js';
import MessageComponent from './components/MessageComponent.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <h2>From task 3 changes</h2>

        <h2>Task5 part 1</h2>
        <h2>Task5 part 2</h2>
        <h2>Task5 part 3</h2>

        <h2>From task 4 changes</h2>
        <h2>From task 4 changes</h2>
        <h2>From task 4 changes</h2>
        <h2>From task 4 changes</h2>
        <h2>From task 4 changes</h2>
        <MessageComponent />
        <Card />
        <MessageComponent />
      </header>
      <MessageComponent />
      <Card />
    </div>
  );
}

export default App;
