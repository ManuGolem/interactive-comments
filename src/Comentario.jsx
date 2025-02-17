import { useState } from "react";
import { BotonPuntuacion } from "./BotonPuntacion";
import { HeaderComment } from "./HeaderComment";
import { Comentar } from "./Comentar";
export function Comentario({
    img,
    name,
    date,
    text,
    responseTo,
    score,
    currentUser,
    id,
    responder,
    borrarComentario,
}) {
    const [respondiendo, setRespondiendo] = useState(false);
    function handleResponder() {
        setRespondiendo(true);
    }
    function enviar(texto) {
        if (texto != "") {
            responder(texto, id);
        }
        setRespondiendo(false);
    }
    function borrar() {
        borrarComentario(id);
    }
    return (
        <>
            <div
                className="w-full flex bg-white p-5 gap-5 rounded-[8px]"
                id={id}
            >
                <BotonPuntuacion score={score} />
                <div className="w-full">
                    <HeaderComment
                        llamarBorrar={borrar}
                        img={img}
                        name={name}
                        currentUser={currentUser ? currentUser.username : null}
                        date={date}
                        id={id}
                        llamarFuncion={handleResponder}
                    />
                    <p className="text-grayish-blue text-start">
                        <strong className="text-moderate-blue font-bold">
                            {responseTo}
                        </strong>{" "}
                        {text}
                    </p>
                </div>
            </div>
            {respondiendo && (
                <div className="w-full mr-auto ml-auto">
                    <Comentar
                        funcion={enviar}
                        img={currentUser.image.webp}
                        name={currentUser.username}
                        send={false}
                    />
                </div>
            )}
        </>
    );
}
