import { useEffect, useState } from "react";
import { Comentario } from "./Comentario";
import { Comentar } from "./Comentar";
export function App() {
    const [comentarios, setComentarios] = useState([]);
    const [user, setUser] = useState(null);
    const [id, setId] = useState(5);
    const [idBorrar, setIdBorrar] = useState(-1);
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
                            borrarComentario={abrirDialog}
                            id={comentario.id}
                            img={comentario.user.image.webp}
                            name={comentario.user.username}
                            date={comentario.createdAt}
                            text={comentario.content}
                            score={comentario.score}
                            currentUser={user ? user : null}
                            responder={responder}
                            editarComentario={editarComentario}
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
                borrarComentario={abrirDialog}
                img={comentario.user.image.webp}
                name={comentario.user.username}
                date={comentario.createdAt}
                text={comentario.content}
                responseTo={responseTo}
                responder={responder}
                editarComentario={editarComentario}
                score={comentario.score}
                currentUser={user ? user : null}
            />
        );
    }
    function responder(value, idViejo) {
        const copiaComentarios = JSON.parse(JSON.stringify(comentarios));
        editarComentarioId(idViejo, copiaComentarios, value);
        setComentarios(copiaComentarios);
    }
    function editarComentarioId(idViejo, arreglo, value) {
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
                    co.replies.push(nuevoComentario);
                } else if (co.replies) {
                    if (co.replies.length > 0) {
                        editarComentarioId(idViejo, co.replies, value);
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
    function borrar() {
        const copiaComentarios = JSON.parse(JSON.stringify(comentarios));
        borrarComentarioId(idBorrar, copiaComentarios);
        setComentarios(copiaComentarios);
    }
    function borrarComentarioId(idS, arreglo) {
        if (Array.isArray(arreglo)) {
            for (const co of arreglo) {
                if (co.id == idS) {
                    arreglo.splice(arreglo.indexOf(co), 1);
                    break;
                } else if (co.replies) {
                    if (co.replies.length > 0) {
                        borrarComentarioId(idS, co.replies);
                    }
                }
            }
        }
    }
    function abrirDialog(idABorrar) {
        document.querySelector("dialog").showModal();
        setIdBorrar(idABorrar);
    }
    function editarComentario(textoEditar, idEditar) {
        const copiaComentarios = JSON.parse(JSON.stringify(comentarios));
        editarId(idEditar, copiaComentarios, textoEditar);
        setComentarios(copiaComentarios);
    }
    function editarId(idE, arreglo, value) {
        if (Array.isArray(arreglo)) {
            for (const co of arreglo) {
                if (co.id == idE) {
                    co.content = value;
                } else if (co.replies) {
                    if (co.replies.length > 0) {
                        editarId(idE, co.replies, value);
                    }
                }
            }
        } else if (arreglo.id == idViejo) {
            arreglo.content = value;
        }
    }
    return (
        <section className="w-full text-[14px] mt-8 flex flex-col gap-2 md:w-[50%] md:text-[16px] mr-auto ml-auto">
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

            <dialog className="absolute top-0 left-0 right-0 bottom-0 p-5 m-auto w-[22%] rounded-[8px] backdrop:bg-[rgba(0,0,0,0.6)]">
                <h1 className="text-[20px] font-bold text-start mb-5">
                    Delete comment
                </h1>
                <p className="text-grayish-blue text-start text-[16px] mb-5">
                    Are you sure you want to delete this comment? This will
                    remove the comment and can't be undonde.
                </p>
                <div>
                    <form
                        method="dialog"
                        className="flex gap-5 justify-center mt-2"
                    >
                        <button className="bg-grayish-blue px-5 py-2 text-white font-bold rounded-[8px] hover:cursor-pointer hover:scale-[1.1]">
                            NO, CANCEL
                        </button>
                        <button
                            onClick={borrar}
                            className="bg-soft-red px-5 py-2 text-white font-bold rounded-[8px] hover:cursor-pointer hover:scale-[1.1]"
                        >
                            YES, DELETE
                        </button>
                    </form>
                </div>
            </dialog>
        </section>
    );
}
