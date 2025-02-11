import { Comentario } from "./Comentario"
export function App(){
    const {img,nombre,fecha,texto}=0;
    return(
        <section className="bg-very-light-gray">
            <Comentario png={img} name={nombre} date={fecha} text={texto} />
            <Comentario/>
            <Comentario/>
            <Comentario/>
            <Comentario/>
        </section>
    )
}