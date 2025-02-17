import { BotonPuntuacion } from "./BotonPuntacion";
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
                <header className="flex gap-4 items-center mb-5 justify-end">
                    <img src={img} className="w-[32px]"></img>
                    <h2 className="font-bold">{name}</h2>
                    {currentUser != null ? (
                        currentUser == name ? (
                            <p className="bg-moderate-blue text-white px-2 ">
                                {" "}
                                you
                            </p>
                        ) : null
                    ) : null}

                    <p className="text-grayish-blue grow text-start">{date}</p>

                    {currentUser != null ? (
                        currentUser == name ? (
                            <button className=" text-soft-red flex gap-1 items-center hover:cursor-pointer">
                                <img src="images/icon-delete.svg" />
                                Delete
                            </button>
                        ) : null
                    ) : null}

                    <button className="hover:cursor-pointer flex gap-1 items-center text-moderate-blue font-bold">
                        <img
                            className="w-[14px] h-[13px]"
                            src="images/icon-reply.svg"
                        />
                        Reply
                    </button>
                </header>
                <p className="text-grayish-blue text-start">{text}</p>
            </div>
        </div>
    ) : (
        <div className="flex bg-white p-5 gap-5 rounded-[8px]">
            <BotonPuntuacion score={score} />
            <div className="w-full">
                <header className="flex gap-4 items-center mb-5 justify-end">
                    <img src={img} className="w-[32px]"></img>
                    <h2 className="font-bold">{name}</h2>
                    {currentUser != null ? (
                        currentUser == name ? (
                            <p className="bg-moderate-blue text-white px-2 ">
                                {" "}
                                you
                            </p>
                        ) : null
                    ) : null}
                    <p className="text-grayish-blue text-start grow">{date}</p>
                    {currentUser != null ? (
                        currentUser == name ? (
                            <button className=" text-soft-red flex gap-1 items-center hover:cursor-pointer">
                                <img src="images/icon-delete.svg" />
                                Delete
                            </button>
                        ) : null
                    ) : null}

                    <button className="hover:cursor-pointer flex gap-1 items-center text-moderate-blue font-bold">
                        <img
                            className="w-[14px] h-[13px]"
                            src="images/icon-reply.svg"
                        />
                        Reply
                    </button>
                </header>
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
