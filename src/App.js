import logo from './logo.svg';
import './App.css';
import Coordinate from './components/Coordinate/Coordinate';
import 'bootstrap/dist/css/bootstrap.css';
import Temperature from './components/Teperature/Temperature';
import Barometer from './components/Barometer/Barometer';

function App() {
  return (
    <div className="App">
      <Coordinate></Coordinate>
      <Temperature></Temperature>
      <Barometer></Barometer>
    </div>
  );
}

export default App;
