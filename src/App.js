<<<<<<< Updated upstream
const App = () => {
  return (
    <h1
      className="
      text-4xl
      text-center
      text-blue-400
      font-bold
      mt-3
    "
    >
      asd
    </h1>
=======
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import TheScientist from "./pages/detailScientist/theScientist";
import Califomia from "./pages/detailScientist/califomia";
import Chart from "./pages/detailScientist/chart";
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
                      <TheScientist/>
                      <Califomia/>
                      <Chart/>
                    </div>
              </div>
        </div>
   </div>
>>>>>>> Stashed changes
  );
};

export default App;
