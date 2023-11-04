import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import SignUp from "./components/signup";
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
                    <SignUp/>
                    </div>
              </div>
        </div>
   </div>
  );
};

export default App;
