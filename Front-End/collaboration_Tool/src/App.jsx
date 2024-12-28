import "./App.css";
import Landingpage from "./components/Landingpage";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={Landingpage} />
        <Route path="/login" element={Login}></Route>
        <Route path="/register" element={Register}></Route>
      </Routes>
      <Landingpage />
      <Login></Login>
      <Register></Register>
    </Router>
  );
}

export default App;
