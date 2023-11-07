import React from 'react'
import Sidebar from "./components/sidebar";
import BlogDetail from "./pages/BlogDetail";
import Home from "./pages/Home"
import Navbar from "./components/navbar";
import ListProject from "./pages/ListProject";
import DetailProject from "./pages/DetailProject";
import Scientists from "./pages/Scientists"
import Joined from "./pages/Joined";
import Messages from "./pages/Messages";
import Connect from "./components/Connect";
import { Route, Routes, useLocation } from 'react-router-dom';
// import DashboardScientist from "./pages/DashboardScientist";
import './index.css'
import DetailScientist from "./pages/DetailScientist";

const App = () => {
  const location = useLocation();
  const isMessagesPage = location.pathname.includes('messages');

  return (
    <div className="flex">
      <div className="relative">
        <div className="sticky top-0">
          <Sidebar />
        </div>

      </div>
      <div className="grid grid-cols-1 relative w-full">
        <div className="col-span-1">
          <div className="sticky bg-primary-500 top-0 z-20">
            <Navbar />
          </div>
          <div className={`w-full ${isMessagesPage ? 'p-0' : 'p-10'} min-h-screen bg-[#1A1C1E] text-white`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/listproject" element={<ListProject />} />
              <Route path="/scientist" element={<Scientists />} />
              <Route path='/detailscientist' element={<DetailScientist />} />
              <Route path="/joined" element={<Joined />} />
              <Route path="/blogDetail" element={<BlogDetail />} />
              <Route path="/listproject/detailproject" element={<DetailProject />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/connect" element={<Connect />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
};

export default App;
