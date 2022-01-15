import logo from './logo.svg';
import './App.css';
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

function App() {
  return (
      <Router>
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/main" element={<MainPage/>} />
      </Routes>
</Router>

  );
}

export default App;
