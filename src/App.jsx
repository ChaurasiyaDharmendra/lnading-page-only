import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";

import Platform from "./components/navbar/Platform";
import Security from "./components/navbar/Security";
import Observability from "./components/navbar/Observability";
import Industries from "./components/navbar/Industries";
import Resources from "./components/navbar/Resources";
import Support from "./components/navbar/Support";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/platform" element={<Platform />} />
      <Route path="/security" element={<Security />} />
      <Route path="/observability" element={<Observability />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/Resources" element={<Resources />} />
      <Route path="/Support" element={<Support />} />

      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;