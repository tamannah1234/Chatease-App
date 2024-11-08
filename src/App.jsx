import {Route,Routes,useLocation } from 'react-router-dom'
import './App.css'
import Login from "./components/Login.jsx"
import Home from "./components/Home.jsx"
import Chat from "./components/Chat.jsx"
import PageNotFound from "./components/PageNotFound.jsx"
import Routing from "./components/RoutingApp.jsx"
import ChatPanel from "./components/ChatPanel.jsx"
import { useState } from 'react';
import ProtectedRoute from './components/ProtectedRoute.jsx'


function App() {
  const location = useLocation();
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
       {location.pathname.startsWith('/Chat') && <ChatPanel />}
     <Routes>
      <Route path="/" element={<ProtectedRoute isLoggedIn={isLoggedIn}><Home setIsLoggedIn={setIsLoggedIn}></Home></ProtectedRoute>} ></Route>
      <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn}></Login>} ></Route>
      <Route path="/Chat/:uniqueId" element={<Chat></Chat>}></Route>
      <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      <Route path="/Route" element={<Routing></Routing>}></Route>
      
      </Routes>
     

{/* Render ChatPanel only on the Chat route */}

      
</div>
  )
}

export default App;
