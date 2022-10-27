import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const navegacion = useNavigate();
    const onSubmitLogin = (dataLogin) => {
        console.log(dataLogin);
        console.log("prueba desde submit login");
        //una vez todo validado enviamos la peticion a la API

        //reseteo el formulario
        reset();
        //redirecciono al usuario a la pagina de Inicio
        navegacion("/");
    };
    return (
        <Container className="mainSection my-3">
            <Row className="justify-content-center">
                <Col sm={12} md={8} lg={5}>
                    <Form onSubmit={handleSubmit(onSubmitLogin)} noValidate className="border rounded p-3 shadow ">
                        <Form.Group className="mb-3" controlId="formLoginEmail">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Ingrese su email"
                                {...register("email", {
                                    required: "Ingrese su email",
                                    pattern: {
                                        value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                                        message: "Debe ingresar un email valido",
                                    },
                                })}
                            />
                            <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formLoginPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                {...register("password", {
                                    required: "Ingrese su contraseña",
                                    pattern: {
                                        value: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                                        message:
                                            "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.",
                                    },
                                })}
                            />
                            <Form.Text className="text-danger">{errors.password?.message}</Form.Text>
                        </Form.Group>
                        <Button variant="danger" type="submit">
                            Ingresar
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
