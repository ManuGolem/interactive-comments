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
            createdAt: "Recentlyy",
            user: user,
            replies: [],
            score: 0,
        };
        setId(id + 1);
        setComentarios([...comentarios, nuevoComentario]);
    }
    function devolverArbol(comentario) {
        //Funcion recursiva para recorrer todas las respuestas
        if (comentario.replies) {
            if (comentario.replies.length > 0) {
                return (
                    <div
                        key={comentario.id}
                        className="flex flex-col justify-center"
                    >
                        <Comentario
                            key={comentario.id}
                            id={comentario.id}
                            img={comentario.user.image.webp}
                            name={comentario.user.username}
                            date={comentario.createdAt}
                            text={comentario.content}
                            score={comentario.score}
                            currentUser={user ? user : null}
                            responder={responder}
                            responseTo={
                                comentario.replyingTo &&
                                "@".concat(comentario.replyingTo)
                            }
                        />
                        <div className="respuesta">
                            <div className="respuesta-sep">
                                {comentario.replies.map((respuesta) =>
                                    devolverArbol(respuesta),
                                )}
                            </div>
                        </div>
                    </div>
                );
            }
        }

        let responseTo;
        if (comentario.replyingTo) {
            responseTo = "@".concat(comentario.replyingTo);
        }
        return (
            <Comentario
                key={comentario.id}
                id={comentario.id}
                img={comentario.user.image.webp}
                name={comentario.user.username}
                date={comentario.createdAt}
                text={comentario.content}
                responseTo={responseTo}
                responder={responder}
                score={comentario.score}
                currentUser={user ? user : null}
            />
        );
    }
    function responder(value, idViejo) {
        const copiaComentarios = JSON.parse(JSON.stringify(comentarios));
        buscarComentarioId(idViejo, copiaComentarios, value);
        setComentarios(copiaComentarios);
    }
    function buscarComentarioId(idViejo, arreglo, value) {
        if (Array.isArray(arreglo)) {
            for (const co of arreglo) {
                if (co.id == idViejo) {
                    const nuevoComentario = {
                        id: id,
                        content: value,
                        createdAt: "Recently",
                        user: user,
                        replies: [],
                        score: 0,
                        replyingTo: co.user.username,
                    };
                    setId(id + 1);
                    if (!co.replies) {
                        co.replies = [];
                    }
                    return co.replies.push(nuevoComentario);
                } else if (co.replies) {
                    if (co.replies.length > 0) {
                        buscarComentarioId(idViejo, co.replies, value);
                    }
                }
            }
        } else if (arreglo.id == idViejo) {
            const nuevoComentario = {
                id: id,
                content: value,
                createdAt: "Recently",
                user: user,
                replies: [],
                score: 0,
                replyingTo: arreglo.user.username,
            };
            setId(id + 1);
            arreglo.replies.push(nuevoComentario);
        }
    }
    return (
        <section className="mt-12 flex flex-col gap-2 w-[50%] mr-auto ml-auto">
            {comentarios.length > 0 ? (
                comentarios.map((comentario) => devolverArbol(comentario))
            ) : (
                <p>No hay comentarios Disponibles</p>
            )}
            {user ? (
                <div>
                    <Comentar
                        funcion={comentar}
                        img={user.image.webp}
                        name={user.username}
                        send={true}
                    />
                </div>
            ) : (
                <p> No hay user aun</p>
            )}
        </section>
    );
}
