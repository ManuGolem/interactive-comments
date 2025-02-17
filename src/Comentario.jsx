import { BotonPuntuacion } from "./BotonPuntacion";
import { HeaderComment } from "./HeaderComment";
export function Comentario({
    img,
    name,
    date,
    text,
    tipo,
    responseTo,
    score,
    currentUser,
}) {
    return tipo === "Comentario" ? (
        <div className="flex w-[50%] bg-white mb-1 ml-auto mr-auto p-5 gap-5 rounded-[8px]">
            <BotonPuntuacion score={score} />
            <div className="w-full">
                <HeaderComment
                    img={img}
                    name={name}
                    currentUser={currentUser}
                    date={date}
                />
                <p className="text-grayish-blue text-start">{text}</p>
            </div>
        </div>
    ) : (
        <div className="flex bg-white p-5 gap-5 rounded-[8px]">
            <BotonPuntuacion score={score} />
            <div className="w-full">
                <HeaderComment
                    img={img}
                    name={name}
                    currentUser={currentUser}
                    date={date}
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
