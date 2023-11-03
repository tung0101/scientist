import Sidebar from "./components/sidebar";
// import BlogDetail from "./pages/BlogDetail";
import Home from "./pages/Home"
import Navbar from "./components/navbar";
// import { Routes, Route } from 'react-router-dom'

const App = () => {
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
          <div className="w-full p-10 min-h-screen bg-black text-white">
            {/* NỘI DUNG*/}
            <Home />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
