import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './views/AboutUs/AboutUs';
import Home from './views/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
