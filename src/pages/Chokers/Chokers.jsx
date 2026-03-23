import { Footer } from "../../componentes/Footer/Footer";
import { ModalProductos } from "../../componentes/MostrarProductos/MostrarProductos";

export function Chokers() {
  return (
    <>
      <div className="container my-5">
        <h1>Conoce todos nuestros productos</h1>
        <h2 className="mb-4">
          Descubre nuestra selección de perfumes y fragancias para complementar
          tu estilo y rutina diaria.
        </h2>
        <ModalProductos categoriaNombre="Perfumes y fragancias" />
      </div>
      <Footer />
    </>
  );
}