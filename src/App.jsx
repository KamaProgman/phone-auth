import { Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";
import HistoryPage from "./pages/HistoryPage";
import Pin from "./pages/Pin";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/authorization" element={<AuthPage />} />
        <Route path="/pin" element={<Pin />} />
        <Route path="/users/:id/transactions" element={<HistoryPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
