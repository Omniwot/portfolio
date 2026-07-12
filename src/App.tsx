import { useCallback, useState } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import MatrixLoader from "./components/MatrixLoader";
import { BootReadyContext } from "./context/BootReadyContext";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import EducationPage from "./pages/EducationPage";
import ContactPage from "./pages/ContactPage";
import styles from "./App.module.css";

export default function App() {
  const [ready, setReady] = useState(false);
  const onLoaderDone = useCallback(() => setReady(true), []);

  return (
    <>
      {!ready && <MatrixLoader onDone={onLoaderDone} />}
      <div
        className={`${styles.shell} ${ready ? styles.shellIn : ""}`}
        aria-hidden={!ready}
      >
        <HashRouter>
          <BootReadyContext.Provider value={ready}>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="work" element={<WorkPage />} />
                <Route path="projects" element={<ProjectsPage />} />
                <Route path="skills" element={<SkillsPage />} />
                <Route path="education" element={<EducationPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            </Routes>
          </BootReadyContext.Provider>
        </HashRouter>
      </div>
    </>
  );
}
