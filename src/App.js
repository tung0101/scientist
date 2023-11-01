import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
// import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
   <div className="flex">
        <div className="relative">
            <div className="sticky top-0">
                  <Sidebar/>
            </div>
        </div>
        <div className="grid grid-cols-1 relative w-full">
            <div className="col-span-1">
                  <div className="sticky top-0">
                        <Navbar />
                  </div>
                  <div className="w-full p-10 min-h-screen bg-black text-white">
                        {/* NỘI DUNG*/}
                  </div>
            </div>
        </div>
   </div>
  );
};

export default App;
