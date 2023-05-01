import { Routes, Route } from "react-router-dom";

import HistoryPage from "./pages/HistoryPage";
import Pin from "./pages/PinPage";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/users/:id/transactions" element={<HistoryPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
