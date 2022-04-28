import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/Counter';
import Todos from './components/todo/Todos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Counter/>
       <Todos/>
      </header>
    </div>
  );
}

export default App;
