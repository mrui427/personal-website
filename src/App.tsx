import { lazy, Suspense } from 'react'
import { techSkills } from './data/techSkills'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'

import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import SmartNailPage from './pages/SmartNailPage'
import AIPlatformPage from './pages/AIPlatformPage'

import LearningPage from './pages/LearningPage'
import LearningDetailPage from './pages/LearningDetailPage'

import NotesPage from './pages/NotesPage'
import NoteDetailPage from './pages/NoteDetailPage'

import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

const TechNotePage = lazy(() => import('./pages/TechNotePage'))

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/projects"
          element={<ProjectsPage />}
        />

        <Route path="/projects/smartnail" element={<SmartNailPage />} />
        <Route path="/projects/ai-platform" element={<AIPlatformPage />} />
        <Route path="/projects/ai-visibility-analytics" element={<AIPlatformPage />} />

        <Route
          path="/projects/:slug"
          element={<ProjectDetailPage />}
        />

        <Route
          path="/learning"
          element={<LearningPage />}
        />

        <Route
          path="/learning/:slug"
          element={<LearningDetailPage />}
        />

        <Route
          path="/notes"
          element={<NotesPage />}
        />

        {techSkills.map(skill => (
          <Route key={skill.slug} path={`/notes/${skill.slug}`} element={
            <Suspense fallback={<p role="status">…</p>}>
              <TechNotePage key={skill.slug} skill={skill} />
            </Suspense>
          } />
        ))}

        <Route
          path="/notes/:slug"
          element={<NoteDetailPage />}
        />

        <Route
          path="/about"
          element={<AboutPage />}
        />

        <Route
          path="/contact"
          element={<ContactPage />}
        />
      </Routes>

      <Footer />
    </>
  )
}

export default App
