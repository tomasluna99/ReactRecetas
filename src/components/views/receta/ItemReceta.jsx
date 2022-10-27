import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { borrarRecetaAPI, consultarAPI } from "../../helpers/queries";
const ItemReceta = ({ receta, setRecetas }) => {
    const { id, nombreReceta, categoria, imagen, descripcion, ingredientes, preparacion } = { ...receta };

    const borrarReceta = () => {
        Swal.fire({
            title: "Estas seguro de eliminar la receta?",
            text: "No podrás revertir esta acción!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Eliminar",
        }).then((result) => {
            if (result.isConfirmed) {
                borrarRecetaAPI(id).then((respuesta) => {
                    if (respuesta.status === 200) {
                        Swal.fire("Receta Eliminada", "La receta se eliminó correctamente", "success");
                        //utilizamos un state para actualizar las recetas
                        consultarAPI().then((response) => {
                            setRecetas(response);
                        });
                    } else {
                        Swal.fire("Ocurrio un error", "Intente esta operación en unos minutos", "error");
                    }
                });
                Swal.fire("Receta Eliminada!", "La Receta fue borrada de la lista.", "success");
            }
        });
    };

    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{nombreReceta}</td>
                <td>{categoria}</td>
                <td>{imagen}</td>
                <td>{descripcion}</td>
                <td>{ingredientes}</td>
                <td>{preparacion}</td>
                <td className="text-center">
                    <Link className="btn btn-outline-light me-1" to={`/administrar/editar/${id}`}>
                        <i className="bi bi-arrow-clockwise text-warning"></i>
                    </Link>
                    <Button variant="outline-light" onClick={borrarReceta}>
                        <i className="bi bi-x-lg text-danger"></i>
                    </Button>
                </td>
            </tr>
        </>
    );
};

export default ItemReceta;
