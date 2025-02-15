import { BotonPuntuacion } from "./BotonPuntacion";
export function Comentario({ img, name, date, text, tipo, responseTo }) {
    return tipo === "Comentario" ? (
        <div className="flex w-[50%] bg-white mb-1 ml-auto mr-auto p-5 gap-5 rounded-[8px] mt-8">
            <BotonPuntuacion score="12" />
            <div>
                <header className="flex gap-4 items-center mb-5">
                    <img src={img} className="w-[32px]"></img>
                    <h2 className="font-bold">{name}</h2>
                    <p className="text-grayish-blue">{date}</p>
                    <button className="ml-auto hover:cursor-pointer">
                        Reply
                    </button>
                </header>
                <p className="text-grayish-blue text-start">{text}</p>
            </div>
        </div>
    ) : (
        <div className="flex bg-white p-5 gap-5 rounded-[8px]">
            <BotonPuntuacion score="12" />
            <div>
                <header className="flex gap-4 items-center mb-5">
                    <img src={img} className="w-[32px]"></img>
                    <h2 className="font-bold">{name}</h2>
                    <p className="text-grayish-blue">{date}</p>
                    <button className="ml-auto hover:cursor-pointer">
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
