import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routers";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;
