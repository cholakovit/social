// Styles
import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import { MainBox, StyledStack } from './assets/styles/main.styles';

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import Edit from './pages/EditUser';
import List from './pages/List';
import Show from './pages/ShowPost';

// Dependencies

function App() {
  return (
    <Router>
      <MainBox>
        <Navbar />
        <StyledStack>
          <Sidebar />
          <Routes>
            <Route path="/">
              <Route index element={<List />} />
              <Route path="/:postId" element={<Show />} />
              <Route path="/user/:userId" element={<Edit />} />

              {/* Catch all - replace with 404 component if you want */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </StyledStack>
        <Footer />
      </MainBox>
    </Router>
  );
}

export default App;
