import React, { useEffect } from "react";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
// import Sidebar from "./components/scientist/Sidebar2";
// import Navbar from "./components/scientist/Navbar2";
import BlogDetail from "./pages/BlogDetail";
import Home from "./pages/Home";
import ListProject from "./pages/ListProject";
import DetailProject from "./pages/DetailProject";
import Scientists from "./pages/Scientists";
import Joined from "./pages/Joined";
import Messages from "./pages/Messages";
import Connect from "./components/Connect";
import { Route, Routes, useLocation } from "react-router-dom";
import DetailScientist from "./pages/DetailScientist";
import DashboardScientist from "./pages/DashboardScientist";
import SignUp from "./pages/signup";
import SettingAccount from "./pages/SettingAccount";

import "./index.css";
import OverDonate from "./pages/OverDonate";
import Statistics from "./pages/Statistics";
import Califomia from "./pages/Califomia";

const App = () => {
  const location = useLocation();
  const isMessagesPage = location.pathname.includes("messages");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
          <div
            className={`w-full ${
              isMessagesPage ? "p-0" : "p-10"
            } min-h-screen bg-[#1A1C1E] text-white`}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/listproject" element={<ListProject />} />
              <Route path="/scientist" element={<Scientists />} />
              <Route path="/detailscientist" element={<DetailScientist />} />
              <Route
                path="/dashboardscientist"
                element={<DashboardScientist />}
              />
              <Route path="/joined" element={<Joined />} />
              <Route path="/blogDetail" element={<BlogDetail />} />
              <Route
                path="/listproject/detailproject"
                element={<DetailProject />}
              />
              <Route path="/messages" element={<Messages />} />
              <Route path="/connect" element={<Connect />} />
              <Route path="/connect/donate" element={<Connect />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/settingaccount" element={<SettingAccount />} />
              <Route path="/over-donate" element={<OverDonate />} />
              <Route path="/statistics" element={<Statistics />} />
              <Route path="/califomia" element={<Califomia />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
