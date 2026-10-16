import { Routes, Route } from "react-router";

import AppLayout from "./components/AppLayout/AppLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Applications from "./pages/Applications/Applications";
import Analytics from "./pages/Analytics/Analytics";
import Settings from "./pages/Settings/Settings";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
