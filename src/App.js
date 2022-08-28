import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage.js';
import Tablas from './pages/Tablas';
import Users from "./pages/Users";
import NotFoundPages from "./pages/NotFoundPages";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>

    <Navbar />

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/tablas" element={<Tablas/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="*" element={<NotFoundPages/>} />
      </Routes>
    </BrowserRouter>
  );
}
//Falta empezar parte Componente Link
export default App;
