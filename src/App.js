import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage.js';
import Tablas from './pages/Tablas';
import Users from "./pages/Users";
import NotFoundPages from "./pages/NotFoundPages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/tablas" element={<Tablas/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="*" element={<NotFoundPages/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
