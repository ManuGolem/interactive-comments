import { useState } from "react";

export function BotonPuntuacion({ score }) {
    const [likes, setLikes] = useState(score);
    const [iLike, setIlike] = useState(0);
    const clasesBotones =
        "text-xl text-light-grayish-blue font-bold hover:cursor-pointer hover:text-moderate-blue";
    let meGusta, noMegusta;
    if (iLike == 1) {
        meGusta = " text-moderate-blue scale-[1.2]";
    } else if (iLike == -1) {
        noMegusta = " text-soft-red scale-[1.2]";
    }
    function like() {
        if (iLike == 0) {
            setLikes(score + 1);
            setIlike(1);
        } else if (iLike == -1) {
            setLikes(score);
            setIlike(0);
        }
    }
    function dontLike() {
        if (iLike == 0) {
            setLikes(score - 1);
            setIlike(-1);
        } else if (iLike == 1) {
            setLikes(score);
            setIlike(0);
        }
    }
    return (
        <div className="bg-light-gray flex flex-col justify-center rounded-[8px] px-2 gap-1.5 row-start-2 ">
            <button onClick={like} className={clasesBotones.concat(meGusta)}>
                +
            </button>
            <p className="text-center text-moderate-blue font-bold">{likes}</p>
            <button
                onClick={dontLike}
                className={clasesBotones.concat(noMegusta)}
            >
                -
            </button>
        </div>
    );
}
