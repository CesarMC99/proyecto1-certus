import { Navbar } from "./components/Navbar";
import { personajes } from "./utils/personajeData";
import { Card} from "./components/CardPersonaje"

export const Principal = () => {
  return (
    <section>
      <Navbar />
      <article className="container">
        <h1>Mi primer aplicativo en react</h1>
        <div className="contenedor-personajes">
            {personajes.map((personaje) => (
                <Card key={personaje.nombre}{...personaje}/>
            ))}
        </div>
      </article>
    </section>
  );
}
