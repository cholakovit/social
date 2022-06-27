import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Edit from './blog/EditUser'
import List from './blog/List'
import Show from './blog/ShowPost'

import { MainBox, StyledStack } from './components/styles'

function App() {

  return (
    <Router>
      <MainBox>
        <Navbar />
        <StyledStack>
          <Sidebar />
          <Routes>
            <Route path='/'>
              <Route index element={<List />} />
              <Route path='/:postId' element={<Show />} />
              <Route path='/user/:userId' element={<Edit />} />

              {/* Catch all - replace with 404 component if you want */}
              <Route path='*' element={<Navigate to='/' replace />} />
            </Route>
          </Routes>
        </StyledStack>
        <Footer />
      </MainBox>
    </Router>
  )
}

export default App
