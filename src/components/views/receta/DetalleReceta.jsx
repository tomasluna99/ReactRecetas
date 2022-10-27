import { useEffect, useState } from "react";
import { Card, Container, Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { obtenerRecetaAPI } from "../../helpers/queries";
const DetalleReceta = () => {
    const { id } = useParams();
    const [receta, setReceta] = useState({});

    useEffect(() => {
        obtenerRecetaAPI(id).then((respuesta) => {
            if (respuesta.status === 200) {
                console.log(respuesta);
                setReceta(respuesta.dato);
            }
        });
    }, []);
    return (
        <>
            <Container className="mainSection my-3">
                <Card className="fotoDetalleReceta">
                    <Card.Img variant="top" src={receta.imagen} />
                    <Card.Body>
                        <Card.Title>{receta.nombreReceta}</Card.Title>
                        <Badge bg="success">{receta.categoria}</Badge>
                        <Card.Text>{receta.descripcion}</Card.Text>
                        <Card.Text>{receta.ingredientes}</Card.Text>
                        <Card.Text>{receta.preparacion}</Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default DetalleReceta;
