import "./App.css";
import Sidebar from "./assets/components/leftside/Sidebar";
import Feed from "./assets/components/middle/Feed";
import Widgets from "./assets/components/widgets/Widgets";
function App() {
  return (
    <>
      <div className="app">
        {/*  sidebar */}
        <Sidebar />

        {/* feed  */}
        <Feed />
        {/* widgets  */}
        <Widgets />
      </div>
    </>
  );
}

export default App;
