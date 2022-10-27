import { useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { editarRecetaAPI, obtenerRecetaAPI } from "../../helpers/queries";
const EditarReceta = () => {
    const { id } = useParams();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();
    const navegacion = useNavigate();
    useEffect(() => {
        obtenerRecetaAPI(id).then((respuesta) => {
            if (respuesta.status === 200) {
                //cargar datos en el formulario
                setValue("nombreReceta", respuesta.dato.nombreReceta);
                setValue("categoria", respuesta.dato.categoria);
                setValue("imagen", respuesta.dato.imagen);
                setValue("descripcion", respuesta.dato.descripcion);
                setValue("ingredientes", respuesta.dato.ingredientes);
                setValue("preparacion", respuesta.dato.preparacion);
            }
        });
    }, []);

    const onSubmitEditar = (dataRecetaEditado) => {
    //peticion a la api
        editarRecetaAPI(id, dataRecetaEditado).then((respuesta) => {
            if (respuesta.status === 200) {
                Swal.fire("Receta modificada", "La Receta fue modificada correctamente", "success");
                navegacion("/administrar");
            } else {
                Swal.fire("Ocurrió un error", "La Receta no pudo modificarse", "error");
            }
        });
    };
    return (
        <>
            <Container className="mainSection">
                <section className="container my-3">
                    <h3 className="display-4">Nueva Receta</h3>
                    <hr />
                </section>
                <section className="container my-3">
                    <Form onSubmit={handleSubmit(onSubmitEditar)} noValidate>
                        <Form.Group className="mb-3" controlId="formNombre">
                            <Form.Label>Nombre receta*</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Ej:cafe"
                                {...register("nombreReceta", {
                                    required: "El nombre de la receta es obligatorio",
                                    minLength: {
                                        value: 2,
                                        message: "La cantidad mínima de caracteres debe ser 2",
                                    },
                                    maxLength: {
                                        value: 100,
                                        message: "La cantidad máxima de caracteres debe ser 100",
                                    },
                                })}
                            />
                            <Form.Text className="text-danger">{errors.nombreReceta?.message}</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formCategoria">
                            <Form.Select
                                aria-label="Default select example"
                                {...register("categoria", {
                                    required: "Debe elegir una categoría",
                                })}
                            >
                                <option value="">Seleccione una opción...</option>
                                <option value="Bebida caliente">Comidas principales</option>
                                <option value="Bebida fria">Desayunos / meriendas</option>
                                <option value="Dulce">Ensaladas</option>
                                <option value="Salado">Snacks</option>
                            </Form.Select>
                            <Form.Text className="text-danger">{errors.categoria?.message}</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Imagen URL*</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Ej:'https://....'"
                                {...register("imagen", {
                                    required: "La url de la imagen es obligatoria",
                                    pattern: {
                                        value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                                        message: "Debe ingresar una url valida",
                                    },
                                })}
                            />
                            <Form.Text className="text-danger">{errors.imagen?.message}</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Form.ControlTextarea1">
                            <Form.Label>Descripcion</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                {...register("descripcion", {
                                    required: "La descripcion es obligatoria",
                                    minLength: {
                                        value: 15,
                                        message: "La cantidad mínima de caracteres debe ser 15",
                                    },
                                    maxLength: {
                                        value: 2000,
                                        message: "La cantidad máxima de caracteres debe ser 2000",
                                    },
                                })}
                            />
                            <Form.Text className="text-danger">{errors.descripcion?.message}</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Form.ControlTextarea1">
                            <Form.Label>Ingredientes</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={6}
                                {...register("ingredientes", {
                                    required: "Los ingredientes son obligatorios",
                                    minLength: {
                                        value: 15,
                                        message: "La cantidad mínima de caracteres debe ser 15",
                                    },
                                    maxLength: {
                                        value: 2000,
                                        message: "La cantidad máxima de caracteres debe ser 2000",
                                    },
                                })}
                            />
                            <Form.Text className="text-danger">{errors.ingredientes?.message}</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Form.ControlTextarea1">
                            <Form.Label>Preparacion</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={6}
                                {...register("preparacion", {
                                    required: "La preparacion es obligatoria",
                                    minLength: {
                                        value: 20,
                                        message: "La cantidad mínima de caracteres debe ser 20",
                                    },
                                    maxLength: {
                                        value: 2000,
                                        message: "La cantidad máxima de caracteres debe ser 2000",
                                    },
                                })}
                            />
                            <Form.Text className="text-danger">{errors.preparacion?.message}</Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Guardar
                        </Button>
                    </Form>
                </section>
            </Container>
        </>
    );
};

export default EditarReceta;
