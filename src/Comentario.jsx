import { BotonPuntuacion } from "./BotonPuntacion";
export function Comentario({ img, name, date, text, tipo }) {
    let clases;
    if (tipo == "Comentario") {
        clases =
            "flex w-[50%] bg-white mb-1 ml-auto mr-auto p-5 gap-5 rounded-[8px] mt-8";
    } else {
        clases = "flex bg-white p-5 gap-5 rounded-[8px]";
    }
    return (
        <div className={clases}>
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
    );
}
