import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { crearUsuarioAPI } from "../helpers/queries";

const Registro = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmitRegistro = (dataRegistro) => {
        //una vez todo validado enviamos la peticion a la API
        crearUsuarioAPI(dataRegistro).then((respuesta) => {
            if (respuesta.status === 201) {
                Swal.fire("Usuario creado", "El Usuario fue registrado correctamente", "success");
            } else {
                Swal.fire("Ocurrio un error", "Intente esta operación en unos minutos", "error");
            }
        });
        //reseteo el formulario
        reset();
    };
    return (
        <Container className="mainSection my-3">
            <section>
                <h1 className="display-3 text-center">Registro</h1>
                <hr />
            </section>
            <Form onSubmit={handleSubmit(onSubmitRegistro)} noValidate className="border rounded p-3 shadow">
                <Row>
                    <Col sm={12} md={6}>
                        <Form.Group className="mb-3" controlId="formRegisterName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese su nombre"
                                {...register("nombre", {
                                    required: "Ingrese su nombre",
                                    minLength: {
                                        value: 2,
                                        message: "La cantidad mínima de caracteres debe ser 2",
                                    },
                                    maxLength: {
                                        value: 50,
                                        message: "La cantidad máxima de caracteres debe ser 50",
                                    },
                                })}
                            />
                            <Form.Text className="text-danger">{errors.nombre?.message}</Form.Text>
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={6}>
                        <Form.Group className="mb-3" controlId="formRegisterLastName">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese su apellido"
                                {...register("apellido", {
                                    required: "Ingrese su apellido",
                                    minLength: {
                                        value: 2,
                                        message: "La cantidad mínima de caracteres debe ser 2",
                                    },
                                    maxLength: {
                                        value: 50,
                                        message: "La cantidad máxima de caracteres debe ser 50",
                                    },
                                })}
                            />
                            <Form.Text className="text-danger">{errors.apellido?.message}</Form.Text>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6}>
                        <Form.Group className="mb-3" controlId="formRegisterEmail">
                            <Form.Label>Email</Form.Label>
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
                    </Col>
                    <Col sm={12} md={6}>
                        <Form.Group className="mb-3" controlId="formRegisterPassword">
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
                    </Col>
                </Row>
                <div className="text-center mt-2">
                    <Button variant="danger" type="submit">
                        Registrarse
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default Registro;
