import { useEffect } from "react";
import { Comentario } from "./Comentario";
import { useState } from "react";
export function App() {
    const [comentarios, setComentarios] = useState([]);
    console.log(comentarios.length);
    useEffect(() => {
        async function traerDatos() {
            const data = await fetch("data.json").then((response) =>
                response.json(),
            );
            setComentarios(data.comments);
        }
        traerDatos();
    }, []);
    return (
        <section className="bg-very-light-gray">
            {comentarios.length > 0 ? (
                comentarios.map((comentario) => (
                    <Comentario
                        key={comentario.id}
                        img={comentario.user.image.webp}
                        name={comentario.user.username}
                        date={comentario.createdAt}
                        text={comentario.content}
                    />
                ))
            ) : (
                <p>No hay comentarios Disponibles</p>
            )}
        </section>
    );
}
