import { Routes, Route, Navigate } from 'react-router-dom'
import Main from './pages/Main';
import Team from './pages/Team';
import Header from './components/Header';
function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} exact />
        <Route path='/team' element={<Team />} exact />
        <Route path='*' element={<Navigate to={'/'} />} exact />
      </Routes>
    </>

  );
}

export default App;
