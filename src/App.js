import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
const App = () => {
  return (
   <div className="flex">
        <div className="sidebar">
              <Sidebar/>
        </div>
        <div className="flex-grow">
              <div className="flex flex-col h-screen">
                    <Navbar/>
                    <div className="content flex-grow bg-black text-white">
                      {/* NỘI DUNG*/}
                    </div>
              </div>
        </div>
   </div>
  );
};

export default App;
