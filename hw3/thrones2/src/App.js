import './App.css';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Search from './Search';
import Houses from './Houses';
import Home from './Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/search" element={<Search/>} />
        <Route path="/houses" element={<Houses/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;



