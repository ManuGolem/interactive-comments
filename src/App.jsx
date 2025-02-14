import { Comentario } from "./Comentario";
export function App() {
    traerDatos();
    async function traerDatos() {
        const data = await fetch("data.json").then((response) =>
            response.json(),
        );
        const { comments, currentUser } = data;
        console.log(comments, currentUser);
        comments.forEach((e) => {
            console.log(e.id, e.content, e.createdAt, e.user);
        });
    }

    const { img, nombre, fecha, texto } = 0;
    return (
        <section className="bg-very-light-gray">
            <Comentario png={img} name={nombre} date={fecha} text={texto} />
            <Comentario png={img} name={nombre} date={fecha} text={texto} />
            <Comentario png={img} name={nombre} date={fecha} text={texto} />
            <Comentario png={img} name={nombre} date={fecha} text={texto} />
        </section>
    );
}
