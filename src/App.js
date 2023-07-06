import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import { Dashboard } from "./pages/dashboard/index";
import { Login } from "./pages/authentications/index";
import { Profile } from "./pages/profile/index";
import { ProjectsTable } from "./pages/projects/index";
import { SamplesClassify, SamplesTable } from "./pages/samples";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="projects" element={<ProjectsTable />} />
          <Route path="projects/:id/samples" element={<SamplesTable />} />
          <Route
            path="projects/:prjId/samples/:id"
            element={<SamplesClassify />}
          />
          <Route path="settings" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
