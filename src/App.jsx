import { Routes, Route } from "react-router-dom";

import Main from "./components/Main";
import Auth from "./components/Auth";
import HistoryPage from "./Pages/HistoryPage";

function App() {

  return (
    <div className="pt-6">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/authorization" element={<Auth />} />
        <Route path="/users/:id/transactions" element={<HistoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
