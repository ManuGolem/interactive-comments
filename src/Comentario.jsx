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
}) {
    const [respondiendo, setRespondiendo] = useState(false);
    return tipo === "Comentario" ? (
        <div>
            {" "}
            <div
                className="flex w-[50%] bg-white mb-1 ml-auto mr-auto p-5 gap-5 rounded-[8px]"
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
                    />
                    <p className="text-grayish-blue text-start">{text}</p>
                </div>
            </div>
            <div className="w-[50%] mr-auto ml-auto">
                <Comentar
                    img={currentUser.image.webp}
                    name={currentUser.username}
                    send={false}
                />
            </div>
        </div>
    ) : (
        <div className="flex bg-white p-5 gap-5 rounded-[8px]" id={id}>
            <BotonPuntuacion score={score} />
            <div className="w-full">
                <HeaderComment
                    img={img}
                    name={name}
                    currentUser={currentUser ? currentUser.username : null}
                    date={date}
                    id={id}
                />
                <p className="text-grayish-blue text-start">
                    <strong className="text-moderate-blue font-bold">
                        {responseTo}
                    </strong>{" "}
                    {text}
                </p>
            </div>
        </div>
    );
}
