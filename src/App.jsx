import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import TestConfig from './pages/TestConfig';
import SimulacroConfig from './pages/SimulacroConfig';
import TestRunner from './pages/TestRunner';
import Results from './pages/Results';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/config" element={<TestConfig />} />
          <Route path="/simulacro" element={<SimulacroConfig />} />
          <Route path="/test" element={<TestRunner />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
