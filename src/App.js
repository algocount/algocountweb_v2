import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import People from './pages/People';
import Research from './pages/Research';
import Materials from './pages/Materials';
import MaterialsArticle from './pages/MaterialsArticle';
import EventsArticle from './pages/EventsArticle';

import eventsList from "./events.json";
import materialsList from "./materials.json";
import Events from './pages/Events';

import slugify from './components/slugify';

function App() {
  return (
    <Router  basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/people' element={<People />} />
          <Route path='/research' element={<Research />} />
          <Route exact path='/materials' element={<Materials />} />
          {materialsList.map( 
            (item) => (
              <Route exact path={`/materials/${slugify(item.title)}`} element={<MaterialsArticle {...item}/>} key={item.key} />
              ) 
          )}
          {eventsList.map( 
            (item) => (
              <Route exact path={`/events/${slugify(item.title)}`} element={<EventsArticle {...item}/>} key={item.key} />
              ) 
          )}
          <Route path='/events' element={<Events />} />
        </Routes>
    </Router>

  );
}

export default App;