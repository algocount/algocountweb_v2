import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import People from './pages/People';
import Research from './pages/Research';
import Materials from './pages/Materials';
import Article from './pages/Article';

import materialsList from "./materials.json";
import Events from './pages/Events';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/people' element={<People />} />
          <Route path='/research' element={<Research />} />
          <Route exact path='/materials' element={<Materials />} />
          {materialsList.map( 
            (item) => (
              <Route exact path={`/materials/${item.title.toLowerCase().replace(/ /g, "-").replace(/\n|\r/g, "")}`} element={<Article {...item}/>} key={item.key} />
              ) 
          )}
          <Route path='/events' element={<Events />} />
        </Routes>
    </Router>

  );
}

export default App;