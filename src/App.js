import './App.css';
import {BottomReiniciar} from './components/BottomReiniciar';
import Contador from './components/Contador';
import { Table } from './components/Table';

function App() {
  return (
    <div className="App">
     <Contador/>
     <Table/>
     <BottomReiniciar/>
    </div>
  );
}

export default App;
