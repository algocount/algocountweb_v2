import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import slugify from "./components/slugify";
import eventsList from "./events.json";
import materialsList from "./materials.json";
import Events from "./pages/Events";
import EventsArticle from "./pages/EventsArticle";
import Home from "./pages/Home";
import Materials from "./pages/Materials";
import MaterialsArticle from "./pages/MaterialsArticle";
import People from "./pages/People";
import Research from "./pages/Research";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Routes>
        <Route index path="/" exact element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/research" element={<Research />} />
        <Route path="/materials" exact element={<Materials />} />
        {materialsList.map((item) => (
          <Route
            path={`/materials/${slugify(item.title)}`}
            element={<MaterialsArticle {...item} />}
            key={item.key}
          />
        ))}
        {eventsList.map((item) => (
          <Route
            path={ `/events/${item.customUrl != undefined ? item.customUrl : slugify(item.title)}`}
            element={<EventsArticle {...item} />}
            key={item.key}
          />
        ))}
        <Route path="/events" exact element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;
