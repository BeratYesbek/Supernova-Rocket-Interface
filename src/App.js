import logo from './logo.svg';
import './App.css';
import Coordinate from './components/Coordinate/Coordinate';
import 'bootstrap/dist/css/bootstrap.css';
import Rocket from './pages/Rocket';
import Start from './pages/Start';
import { Routes, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path='/rocket' element={<Rocket />} />
      </Routes>

    </div>
  );
}

export default App;
