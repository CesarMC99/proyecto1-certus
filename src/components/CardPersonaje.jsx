export const Card = ({nombre, edad, aldea, rango, afiliacion, jutsu_destacado, estado, imagen}) => {
    return (
        <article className = "card-personaje">
            <img src={`../public/img/${imagen}`} alt={nombre}/>
            <div>
                <h1>{nombre}</h1>
                <p>{edad}</p>
                <p>{aldea}</p>
                <p>{rango}</p>
                <p>{afiliacion}</p>
                <p>{jutsu_destacado}</p>
                <p className={`${estado === "Vivo" ? "live" : "dead"}`}>Estado: {estado}</p>
            </div>
        </article>
    )
}