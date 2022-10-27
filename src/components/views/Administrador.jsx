import { Table, Container } from "react-bootstrap";
import ItemReceta from "./receta/ItemReceta";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { consultarAPI } from "../helpers/queries";
const Administrador = () => {
    const [recetas, setRecetas] = useState([]);

    useEffect(() => {
        consultarAPI().then((respuestaListaRecetas) => {
            setRecetas(respuestaListaRecetas);
        });
    }, []);
    return (
        <Container className="mainSection">
            <article className="d-flex justify-content-between align-items-center ">
                <h1 className="display-3 mt-3">Recetas</h1>
                <Link className="h-100 btn btn-primary" to="/administrar/crear">
                    Agregar
                </Link>
            </article>
            <hr />

            <Table responsive striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Cod</th>
                        <th>Receta</th>
                        <th>Categoria</th>
                        <th>URL de imagen</th>
                        <th>Descripcion</th>
                        <th>Ingredientes</th>
                        <th>Preparacion</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {recetas.map((receta) => (
                        <ItemReceta key={receta.id} receta={receta} setRecetas={setRecetas} />
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default Administrador;
