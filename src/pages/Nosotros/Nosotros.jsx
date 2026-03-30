import { Footer } from "../../componentes/Footer/Footer";

export function Nosotros() {
  return (
    <>

      <section className="container my-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-12">
                <img
                  src="/img/nosotros.jpg"
                  alt="Sobre LumiSkin"
                  className="img-fluid rounded-4 shadow-sm"
                  style={{ objectFit: "cover", width: "100%", maxHeight: "245px" }}
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <p
              className="text-uppercase fw-bold mb-2"
              style={{ color: "#b06a8a", letterSpacing: "1px" }}
            >
              Sobre nosotros
            </p>

            <h1 className="fw-bold mb-4" style={{ color: "#4a2c3a" }}>
              Cuidamos tu piel, realzamos tu bienestar
            </h1>

            <p className="text-secondary fs-5">
              En <strong>LumiSkin</strong> creemos que el cuidado personal va
              mucho más allá de una rutina: es una forma de dedicarse tiempo,
              sentirse bien y potenciar la confianza en uno mismo.
            </p>

            <p className="text-secondary">
              Nuestra tienda nace con el propósito de acercar productos de
              cuidado facial, corporal, capilar y fragancias a personas que
              buscan calidad, bienestar y una experiencia de compra simple,
              moderna y confiable.
            </p>

            <p className="text-secondary">
              Seleccionamos cuidadosamente cada producto para ofrecer opciones
              que acompañen distintos estilos de vida, necesidades y tipos de
              piel, siempre priorizando una experiencia cómoda, cercana y segura
              para nuestros clientes.
            </p>
          </div>
        </div>
      </section>

      <section className="container my-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="p-4 h-100 rounded-4 shadow-sm bg-white border">
              <h3 className="fw-bold mb-3" style={{ color: "#4a2c3a" }}>
                Nuestra misión
              </h3>
              <p className="text-secondary mb-0">
                Ofrecer productos de cuidado personal de calidad a través de una
                plataforma accesible, moderna y confiable, brindando una
                experiencia de compra cómoda y cercana para cada cliente.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 h-100 rounded-4 shadow-sm bg-white border">
              <h3 className="fw-bold mb-3" style={{ color: "#4a2c3a" }}>
                Nuestra visión
              </h3>
              <p className="text-secondary mb-0">
                Convertirnos en una tienda online referente en cuidado personal,
                destacando por la calidad de nuestros productos, la confianza de
                nuestros clientes y la cercanía en cada experiencia.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 h-100 rounded-4 shadow-sm bg-white border">
              <h3 className="fw-bold mb-3" style={{ color: "#4a2c3a" }}>
                Nuestros valores
              </h3>
              <p className="text-secondary mb-0">
                Compromiso, calidad, cercanía, bienestar y confianza. Creemos en
                una atención responsable y en productos que aporten valor real a
                la rutina diaria de cada persona.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-5"
        style={{ background: "linear-gradient(135deg, #f8d7e3, #f5e8ee)" }}
      >
        <div className="container text-center">
          <h2 className="fw-bold mb-3" style={{ color: "#4a2c3a" }}>
            ¿Por qué elegir LumiSkin?
          </h2>
          <p className="text-secondary mx-auto mb-5" style={{ maxWidth: "800px" }}>
            Queremos que cada visita a nuestra tienda sea una experiencia simple,
            agradable y segura. Por eso trabajamos para ofrecerte una plataforma
            clara, productos seleccionados y un servicio pensado para ti.
          </p>

          <div className="row g-4">
            <div className="col-md-3 col-sm-6">
              <div className="bg-white rounded-4 shadow-sm p-4 h-100">
                <h5 className="fw-bold" style={{ color: "#b06a8a" }}>
                  Calidad
                </h5>
                <p className="text-secondary mb-0">
                  Productos elegidos cuidadosamente para tu cuidado diario.
                </p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="bg-white rounded-4 shadow-sm p-4 h-100">
                <h5 className="fw-bold" style={{ color: "#b06a8a" }}>
                  Confianza
                </h5>
                <p className="text-secondary mb-0">
                  Una experiencia de compra clara, segura y confiable.
                </p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="bg-white rounded-4 shadow-sm p-4 h-100">
                <h5 className="fw-bold" style={{ color: "#b06a8a" }}>
                  Variedad
                </h5>
                <p className="text-secondary mb-0">
                  Cuidado facial, corporal, capilar y fragancias en un solo lugar.
                </p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="bg-white rounded-4 shadow-sm p-4 h-100">
                <h5 className="fw-bold" style={{ color: "#b06a8a" }}>
                  Cercanía
                </h5>
                <p className="text-secondary mb-0">
                  Pensamos en cada cliente como parte importante de nuestra comunidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container my-5">
        <div className="text-center">
          <h2 className="fw-bold mb-3" style={{ color: "#4a2c3a" }}>
            LumiSkin, más que una tienda
          </h2>
          <p className="text-secondary mx-auto mb-4" style={{ maxWidth: "850px" }}>
            Somos un espacio pensado para quienes valoran el autocuidado y desean
            encontrar productos que acompañen su bienestar día a día. En LumiSkin
            buscamos combinar belleza, cuidado y confianza en una experiencia
            online simple, cercana y moderna.
          </p>

          <img
            src="/img/nosotros2.jpg"
            alt="LumiSkin cuidado personal"
            className="img-fluid rounded-4 shadow-sm"
            style={{ width: "100%", maxWidth: "900px", maxHeight: "420px", objectFit: "cover" }}
          />
        </div>
      </section>

      <Footer />
    </>
  );
}