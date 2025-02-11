export function Comentario({png,name,date,text}){
    return(
        <div className="w-[50%] bg-white mb-1 ml-auto mr-auto">
            {/* <BotonPuntuacion/> */}
            <header>
                <img src={png}></img>
                <h2>{name}</h2>
                <h2>{date}</h2>
                <button>Reply</button>
                <p>{text}</p>
            </header>
        </div>
    )
}