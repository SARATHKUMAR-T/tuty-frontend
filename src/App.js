import { Route, Routes } from "react-router-dom";
import "./App.css";

import SignupPage from "./Components/signupPage";
import Landing from "./Components/Landing";
import DashBoard from "./Components/dashBoard";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </div>
  );
}

export default App;
