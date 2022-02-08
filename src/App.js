//import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';
import Consortium from './pages/Consortium';
import Methodology from './pages/Methodology';
import News from './pages/News'

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/project' element={<Project />} />
          <Route path='/consortium' element={<Consortium />} />
          <Route path='/methodology' element={<Methodology />} />
          <Route path='/news' element={<News />} />
        </Routes>
    </Router>
  );
}

export default App;