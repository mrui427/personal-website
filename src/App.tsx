import { Link, Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import NotesPage from './pages/NotesPage'
import NoteDetailPage from './pages/NoteDetailPage'

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        {' | '}
        <Link to="/notes">Notes</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/notes"
          element={<NotesPage />}
        />

        <Route
          path="/notes/:slug"
          element={<NoteDetailPage />}
        />
      </Routes>
    </div>
  )
}

export default App