// react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Header from "./components/Header";
import Main from './components/Main'
import Subjects from "./components/Subjects";

// import Home from "./pages/Home";
// import Subjects from "./pages/Subjects";
// import Results from "./pages/Results";
// import Profile from "./pages/Profile";

import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <Header/>

      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/results" element={<Results />} />
        <Route path="/profile" element={<Profile />} /> */}
      </Routes>

      <Main/>

      <Subjects/>
    </BrowserRouter>
  );
}

export default App;