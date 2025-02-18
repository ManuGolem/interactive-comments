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
    editarComentario,
}) {
    const [respondiendo, setRespondiendo] = useState(false);
    const [value, setValue] = useState("");
    const [tipoSend, setTipoSend] = useState(0);
    function handleResponder() {
        setRespondiendo(true);
    }
    function enviar(texto) {
        if (texto != "") {
            if (tipoSend == 0) {
                responder(texto, id);
            } else {
                editarComentario(texto, id);
            }
        }
        setRespondiendo(false);
    }
    function borrar() {
        borrarComentario(id);
    }
    function handleEditar() {
        handleResponder();
        setValue(text);
        setTipoSend(-1);
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
                        llamarEditar={handleEditar}
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
                        send={tipoSend}
                        value={value}
                    />
                </div>
            )}
        </>
    );
}
