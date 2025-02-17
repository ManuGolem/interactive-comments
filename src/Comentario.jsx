import { useState } from "react";
import { BotonPuntuacion } from "./BotonPuntacion";
import { HeaderComment } from "./HeaderComment";
import { Comentar } from "./Comentar";
export function Comentario({
    img,
    name,
    date,
    text,
    tipo,
    responseTo,
    score,
    currentUser,
    id,
    responder,
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
    return tipo === "Comentario" ? (
        <div>
            <div className="flex bg-white mb-1 p-5 gap-5 rounded-[8px]" id={id}>
                <BotonPuntuacion score={score} />
                <div className="w-full">
                    <HeaderComment
                        img={img}
                        name={name}
                        currentUser={currentUser ? currentUser.username : null}
                        date={date}
                        id={id}
                        llamarFuncion={handleResponder}
                    />
                    <p className="text-grayish-blue text-start">{text}</p>
                </div>
            </div>
            {respondiendo && (
                <div className="w-[50%] mr-auto ml-auto">
                    <Comentar
                        funcion={enviar}
                        img={currentUser.image.webp}
                        name={currentUser.username}
                        send={false}
                    />
                </div>
            )}
        </div>
    ) : (
        <>
            <div
                className="w-full flex bg-white p-5 gap-5 rounded-[8px]"
                id={id}
            >
                <BotonPuntuacion score={score} />
                <div className="w-full">
                    <HeaderComment
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
