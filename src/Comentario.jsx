import { useState } from "react";
import { BotonPuntuacion } from "./BotonPuntacion";
import { HeaderComment } from "./HeaderComment";
import { Comentar } from "./Comentar";
import { Botones } from "./Botones";
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
                className="w-full bg-white p-5 gap-5 rounded-[8px] contComent"
                id={id}
            >
                <BotonPuntuacion score={score} />

                <HeaderComment
                    img={img}
                    name={name}
                    currentUser={currentUser ? currentUser.username : null}
                    date={date}
                    id={id}
                />
                <p className="text-grayish-blue text-start md:col-start-2 md:col-end-[-1] col-start-1 col-end-[-1] row-start-2">
                    <strong className="text-moderate-blue font-bold">
                        {responseTo}
                    </strong>{" "}
                    {text}
                </p>

                <Botones
                    llamarFuncion={handleResponder}
                    llamarEditar={handleEditar}
                    llamarBorrar={borrar}
                    name={name}
                    currentUser={currentUser ? currentUser.username : null}
                />
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
