import "./App.css";
import Profile from "./pages/Profile.jsx";
import Project from "./pages/Project.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
