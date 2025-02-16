import { useEffect, useState } from "react";
import { Comentario } from "./Comentario";
import { Comentar } from "./Comentar";
export function App() {
    const [comentarios, setComentarios] = useState([]);
    const [user, setUser] = useState(null);
    const [id, setId] = useState(5);
    async function traerDatos() {
        const data = await fetch("data.json").then((response) =>
            response.json(),
        );
        setComentarios(data.comments);
        setUser(data.currentUser);
    }
    useEffect(() => {
        traerDatos();
    }, []);
    function comentar(value) {
        const nuevoComentario = {
            id: id,
            content: value,
            createdAt: "Recently",
            user: user,
            replies: [],
            score: 0,
        };
        setId(id + 1);
        setComentarios([...comentarios, nuevoComentario]);
    }
    return (
        <section className="mt-12 flex flex-col gap-2">
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
                                currentUser={user ? user.username : null}
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
                                            currentUser={
                                                user ? user.username : null
                                            }
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
                            currentUser={user ? user.username : null}
                        />
                    ),
                )
            ) : (
                <p>No hay comentarios Disponibles</p>
            )}
            {user ? (
                <Comentar
                    funcion={comentar}
                    img={user.image.webp}
                    name={user.username}
                />
            ) : (
                <p> No hay user aun</p>
            )}
        </section>
    );
}
