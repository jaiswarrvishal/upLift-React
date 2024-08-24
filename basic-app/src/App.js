
// import './App.css';
// import Hello from './components/Hello';
// import CC1 from './components/CC1';
// import One from './components/One';


// function App() {
//   return (
//     <div className="App">
//       {/* <Hello /> */}
//       <One />
//       <CC1/>
//       {/* <h1 style={{color:"red", background:"lightblue"}}> CSS in ReactJS</h1> */}
//     </div>
//   );
// }

// export default App;



import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import Lifecyle from "./components/Lifecyle";

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        {/* <Lifecyle /> */}
        <div className="bodybar">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/lifecyle" element={<Lifecyle />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
