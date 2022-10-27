import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Administrador from "./components/views/Administrador";
import Inicio from "./components/views/Inicio";
import Error from "./components/views/Error";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import DetalleReceta from "./components/views/receta/DetalleReceta";
import CrearReceta from "./components/views/receta/CrearReceta";
import EditarReceta from "./components/views/receta/EditarReceta";
import Login from "./components/views/Login";
import Registro from "./components/views/Registro";
function App() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route exact path="/" element={<Inicio />} />
                <Route exact path="/administrar" element={<Administrador />} />
                <Route path="*" element={<Error />} />
                <Route exact path="/administrar/detalle/:id" element={<DetalleReceta />} />
                <Route exact path="/administrar/crear" element={<CrearReceta />} />
                <Route exact path="/administrar/editar/:id" element={<EditarReceta />} />
                <Route exact path="/usuario/login" element={<Login />} />
                <Route exact path="/usuario/registro" element={<Registro />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
