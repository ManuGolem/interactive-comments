export function HeaderComment({
    img,
    date,
    name,
    currentUser,
    llamarBorrar,
    llamarFuncion,
}) {
    function borrar() {
        llamarBorrar();
    }
    function responder() {
        llamarFuncion();
    }
    return (
        <header className="flex gap-4 items-center mb-5 justify-end">
            <img src={img} className="w-[32px]"></img>
            <h2 className="font-bold">{name}</h2>
            {currentUser != null ? (
                currentUser == name ? (
                    <p className="bg-moderate-blue text-white px-2 "> you</p>
                ) : null
            ) : null}
            <p className="text-grayish-blue text-start grow">{date}</p>
            {currentUser != null ? (
                currentUser == name ? (
                    <button
                        onClick={borrar}
                        className=" text-soft-red flex gap-1 items-center hover:cursor-pointer"
                    >
                        <img src="images/icon-delete.svg" />
                        Delete
                    </button>
                ) : null
            ) : null}
            <button
                onClick={responder}
                className="hover:cursor-pointer flex gap-1 items-center text-moderate-blue font-bold"
            >
                <img
                    className="w-[14px] h-[13px]"
                    src="images/icon-reply.svg"
                />
                Reply
            </button>
        </header>
    );
}
