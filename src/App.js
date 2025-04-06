import "./App.css";
import Crud from "./crud";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/crud" element={<Crud />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
