import { useState } from "react";
export function Comentar({ img, name, funcion, send, value }) {
    const [texto, setTexto] = useState(value);
    function guardarTexto(e) {
        setTexto(e.target.value);
    }
    function enviar() {
        funcion(texto);
        setTexto("");
    }
    return (
        <article className="flex bg-white p-5 gap-5 rounded-[8px] items-start">
            <header className="flex gap-4 items-center mb-5">
                <img src={img} className="w-[40px]"></img>
            </header>
            <textarea
                onChange={guardarTexto}
                className="bg-white resize-none rounded-2xl w-full border-2 border-light-gray px-5 py-2 h-[6rem] focus-visible:outline-none"
                placeholder="Add a comment..."
                value={texto}
            ></textarea>
            <button
                onClick={enviar}
                className="bg-moderate-blue px-5 py-2 text-white rounded-[8px] hover:bg-light-grayish-blue hover:cursor-pointer"
            >
                {send == 1 ? "SEND" : send == 0 ? "REPLY" : "EDIT"}
            </button>
        </article>
    );
}
