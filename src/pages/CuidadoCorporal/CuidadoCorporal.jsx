import { Footer } from "../../componentes/Footer/Footer";
import { ModalProductos } from "../../componentes/MostrarProductos/MostrarProductos";

export function CuidadoCorporal() {
  return (
    <>
      <div className="container my-5">
        <h1>Conoce todos nuestros productos</h1>
        <h2 className="mb-4">
          Descubre nuestra selección de productos de cuidado corporal para tu
          rutina diaria.
        </h2>
        <ModalProductos categoriaNombre="Cuidado corporal" />
      </div>
      <Footer />
    </>
  );
}