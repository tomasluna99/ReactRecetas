import { Row } from "react-bootstrap";
import CardReceta from "./receta/CardReceta";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./inicio.css";
import { useEffect, useState } from "react";
import { consultarAPI } from "../helpers/queries";
const Inicio = () => {
    const [recetas, setRecetas] = useState([]);

    useEffect(() => {
        consultarAPI().then((respuestaListaRecetas) => {
            //le agregamos un const para obtener un return
            setRecetas(respuestaListaRecetas);
        });
    }, []);
    return (
        <main className="container mainSection">
            <h1 className="display-3 text-center">Bienvenidos</h1>
            <hr />
            <Row>
                {recetas.map((receta) => (
                    <CardReceta key={receta.id} receta={receta} />
                ))}
            </Row>
        </main>
    );
};

export default Inicio;
