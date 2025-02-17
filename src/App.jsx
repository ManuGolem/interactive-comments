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
                                {comentario.replies.map((respuesta) =>
                                    devolverArbol(respuesta),
                                )}
                            </div>
                        </div>
                    </div>
                );
            }
        }
        let tipoComent = "Comentario";
        let responseTo;
        if (comentario.replyingTo) {
            tipoComent = "Respuesta";
            responseTo = "@".concat(comentario.replyingTo);
        }
        console.log(comentario);
        return (
            <Comentario
                key={comentario.id}
                img={comentario.user.image.webp}
                name={comentario.user.username}
                date={comentario.createdAt}
                text={comentario.content}
                tipo={tipoComent}
                responseTo={responseTo}
                score={comentario.score}
                currentUser={user ? user.username : null}
            />
        );
    }
    return (
        <section className="mt-12 flex flex-col gap-2">
            {comentarios.length > 0 ? (
                comentarios.map((comentario) => devolverArbol(comentario))
            ) : (
                <p>No hay comentarios Disponibles</p>
            )}
            {user ? (
                <div className="w-[50%] mr-auto ml-auto">
                    <Comentar
                        funcion={comentar}
                        img={user.image.webp}
                        name={user.username}
                    />
                </div>
            ) : (
                <p> No hay user aun</p>
            )}
        </section>
    );
}
