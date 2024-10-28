import './App.css'
import HackathonPage from './Pages/HackathonPage';
// import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hackathon' element={<HackathonPage/>}/>
      </Routes>  
      </BrowserRouter>
    </div>
  )
}

export default App
