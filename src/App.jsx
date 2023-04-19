import { Routes, Route } from "react-router-dom";

import Main from "./components/Main";
import Auth from "./components/Auth";

function App() {

  return (
    <div className="px-4 pt-4">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/authorization" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
