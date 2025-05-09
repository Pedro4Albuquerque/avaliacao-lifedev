import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Dashboard from './pages/Dashboard/Dashboard'
import CreatePost from './pages/CreatePost/CreatePost'
import PostDetails from './pages/PostDetails/PostDetails'
import './App.css'
import EditPost from './pages/EditPost/EditPost'

function App() {

  return (
    <>
  
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/post/new" element={<CreatePost/>}/>
              <Route path="/post/:id" element={<PostDetails/>}/>
              <Route path="/post/edit/:id" element={<EditPost/>}/>
              <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
          </div>
          <Footer />
     
    </>
  )
}

export default App
