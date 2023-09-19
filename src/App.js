import { Routes, Route } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetUps';
import FavouritesPage from './pages/Favourites';
import NewMeetupsPage from './pages/NewMeetups';
import Layout from './components/layouts/Layout'


function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} />
          <Route path="/new-meet-up" element={<NewMeetupsPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App;
