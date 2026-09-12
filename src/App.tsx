import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'

import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailPage from './pages/ProjectDetailPage'

import LearningPage from './pages/LearningPage'
import LearningDetailPage from './pages/LearningDetailPage'

import NotesPage from './pages/NotesPage'
import NoteDetailPage from './pages/NoteDetailPage'

import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

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