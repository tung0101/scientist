import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import List from "./components/list";
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
                     <List/>
                    </div>
              </div>
        </div>
   </div>
  );
};

export default App;
