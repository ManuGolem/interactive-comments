import { useEffect } from "react";
import { Comentario } from "./Comentario";
import { useState } from "react";
export function App() {
    const [comentarios, setComentarios] = useState([]);
    useEffect(() => {
        async function traerDatos() {
            const data = await fetch("data.json").then((response) =>
                response.json(),
            );
            setComentarios(data.comments);
            console.log(data.comments[1].replies);
        }
        traerDatos();
    }, []);
    return (
        <section>
            {comentarios.length > 0 ? (
                comentarios.map((comentario) =>
                    comentario.replies.length > 0 ? (
                        <div
                            key={comentario.id}
                            className="flex flex-col justify-center"
                        >
                            <Comentario
                                img={comentario.user.image.webp}
                                name={comentario.user.username}
                                date={comentario.createdAt}
                                text={comentario.content}
                                tipo="Comentario"
                            />
                            <div className="respuesta">
                                <div className="respuesta-sep">
                                    {comentario.replies.map((respuesta) => (
                                        <Comentario
                                            key={respuesta.id}
                                            img={respuesta.user.image.webp}
                                            name={respuesta.user.username}
                                            date={respuesta.createdAt}
                                            text={"@".concat(
                                                respuesta.replyingTo.concat(
                                                    respuesta.content,
                                                ),
                                            )}
                                            tipo="Respuesta"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Comentario
                            key={comentario.id}
                            img={comentario.user.image.webp}
                            name={comentario.user.username}
                            date={comentario.createdAt}
                            text={comentario.content}
                            tipo="Comentario"
                        />
                    ),
                )
            ) : (
                <p>No hay comentarios Disponibles</p>
            )}
        </section>
    );
}
