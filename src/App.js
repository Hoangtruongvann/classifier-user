import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import { Dashboard } from "./pages/dashboard";
import { Login } from "./pages/authentications";
import { Profile } from "./pages/profile";
import { ProjectsTable, Operator } from "./pages/projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="projects" element={<ProjectsTable />} />
          <Route path="projects/:id/operator" element={<Operator />} />
          <Route path="settings" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
