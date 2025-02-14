export function BotonPuntuacion({ score }) {
    return (
        <div className="bg-light-gray flex flex-col justify-center rounded-[8px] px-2 gap-1.5">
            <button className="text-xl text-light-grayish-blue font-bold hover:cursor-pointer">
                +
            </button>
            <p className="text-center text-moderate-blue font-bold">{score}</p>
            <button className="text-xl text-light-grayish-blue font-bold hover:cursor-pointer">
                -
            </button>
        </div>
    );
}
