import Sidebar from "./components/sidebar";
import BlogDetail from "./pages/BlogDetail";
import Home from "./pages/Home"
import Navbar from "./components/navbar";
import ListProject from "./pages/ListProject";
import DetailProject from "./pages/DetailProject";
import Scientists from "./pages/Scientists"
import Joined from "./pages/Joined";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import DashboardScientist from "./pages/DashboardScientist";
import './index.css'


const App = () => {
  return (
<<<<<<< HEAD
    <>
      <Sidebar />
      <BlogDetail />
    </>
  );
=======
    <Router>
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
            <div className="w-full p-10 min-h-screen bg-black text-white">
              {/* NỘI DUNG*/}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/listproject" element={<ListProject />} />
                <Route path="/scientist" element={<Scientists />} />
                <Route path="/joined" element={<Joined />} />
                <Route path="/blogDetail" element={<BlogDetail />} />
                <Route path="/listproject/detailproject" element={<DetailProject />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
>>>>>>> dev
};

export default App;
