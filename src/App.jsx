import { useEffect, useState } from "react";
import { Comentario } from "./Comentario";
import { Comentar } from "./Comentar";
export function App() {
    const [comentarios, setComentarios] = useState([]);
    const [user, setUser] = useState(null);
    async function traerDatos() {
        const data = await fetch("data.json").then((response) =>
            response.json(),
        );
        setComentarios(data.comments);
        setUser(data.currentUser);
        console.log(data);
    }
    useEffect(() => {
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
                                score={comentario.score}
                            />
                            <div className="respuesta">
                                <div className="respuesta-sep">
                                    {comentario.replies.map((respuesta) => (
                                        <Comentario
                                            key={respuesta.id}
                                            img={respuesta.user.image.webp}
                                            name={respuesta.user.username}
                                            date={respuesta.createdAt}
                                            responseTo={"@".concat(
                                                respuesta.replyingTo,
                                            )}
                                            text={respuesta.content}
                                            tipo="Respuesta"
                                            score={respuesta.score}
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
                            score={comentario.score}
                        />
                    ),
                )
            ) : (
                <p>No hay comentarios Disponibles</p>
            )}
            {user ? (
                <Comentar img={user.image.webp} name={user.username} />
            ) : (
                <p> No hay user aun</p>
            )}
        </section>
    );
}
