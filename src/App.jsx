import { Routes, Route } from "react-router-dom";

import HistoryPage from "./pages/HistoryPage";
import Layout from "./layout/Layout";
import Temporary from "./components/Temp";
import TransferPage from "./pages/TransferPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/users/:id/transactions" element={<HistoryPage />} />
        <Route path="/" element={<Temporary />} />
        <Route path="/money-transfering" element={<TransferPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
