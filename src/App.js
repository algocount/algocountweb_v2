//import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';
import Consortium from './pages/Consortium';
import Methodology from './pages/Methodology';
import Materials from './pages/Materials';
import News from './pages/News'
import materialsList from "./materials.json";

import Article from './components/Article';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/project' element={<Project />} />
          <Route path='/consortium' element={<Consortium />} />
          <Route path='/methodology' element={<Methodology />} />
          <Route exact path='/materials' element={<Materials />} />
          {materialsList.map( 
            (item) => (
              <Route exact path={`/materials/${item.title.toLowerCase().replace(/ /g, "-").replace(/\n|\r/g, "")}`} element={<Article {...item}/>} key={item.key} />
              ) 
          )}
          <Route path='/news' element={<News />} />
        </Routes>
    </Router>

  );
}

export default App;