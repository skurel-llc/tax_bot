import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MavenLandingPage from './pages/Landing';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MavenLandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}