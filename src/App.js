import './App.css';

import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

// Add proper headers
// Add this to css when I understand it:
// .Wordwrap {
//  inline-size: changelater500pxw;
//  overflow-wrap: changelaterbreak-word;
//}

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <button className="Fancy-button" onClick={() => navigate('/website')}>
        Home Page
      </button>
      <button
        className="Fancy-button"
        onClick={() => navigate('/website/about')}
      >
        About Me
      </button>
      <button
        className="Fancy-button"
        onClick={() => navigate('/website/projects')}
      >
        My Projects
      </button>
      <header className="App-header">
        <Routes>
          <Route path="website/about" element={<About />} />
          <Route path="website/projects" element={<Projects />} />
          <Route path="/website" element={<Home />} />
        </Routes>
      </header>
    </div>
  );
}
export default App;
