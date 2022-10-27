import { Col, Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const CardReceta = ({ receta }) => {
    return (
        <Col className="my-3">
            <Card>
                <Row>
                    <Col sm={12} md={4} lg={3}>
                        <Card.Img variant="top" src={receta.imagen} />
                    </Col>
                    <Col sm={12} md={8} lg={9}>
                        <Card.Body>
                            <Card.Title>{receta.nombreReceta}</Card.Title>
                            <Card.Text>{receta.descripcion}</Card.Text>
                            <hr />
                            <Link className="btn btn-dark" to={`/administrar/detalle/${receta.id}`}>
                                Ver mas
                            </Link>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Col>
    );
};

export default CardReceta;
