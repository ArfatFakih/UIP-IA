import './App.css'
import HackathonPage from './Pages/HackathonPage';
import Home from './Pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';



function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/hackathon' element={<HackathonPage/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>  
      </BrowserRouter>
    </div>
  )
}

export default App
