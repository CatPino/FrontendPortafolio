import { Footer } from "../../componentes/Footer/Footer";

export function Eventos() {
  return (
    <>
      <section className="container my-5">
        <div className="text-center mb-5">
          <p
            className="text-uppercase fw-bold mb-2"
            style={{ color: "#b06a8a", letterSpacing: "1px" }}
          >
            Blog LumiSkin
          </p>
          <h1 className="fw-bold mb-3" style={{ color: "#4a2c3a" }}>
            Consejos, tendencias y bienestar para tu rutina diaria
          </h1>
          <p
            className="text-secondary mx-auto"
            style={{ maxWidth: "850px" }}
          >
            En nuestro blog compartimos contenido pensado para ayudarte a conocer
            mejor tu piel, descubrir productos útiles para tu rutina y mantenerte
            al día con consejos de cuidado facial, corporal, capilar y bienestar.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-6">
            <div className="card border-0 shadow-sm h-100 rounded-4 overflow-hidden">
              <img
                src="/img/blog1.jpg"
                className="card-img-top"
                alt="Rutina de cuidado facial"
                style={{ height: "280px", objectFit: "cover" }}
              />
              <div className="card-body p-4">
                <p className="text-uppercase fw-semibold mb-2" style={{ color: "#b06a8a", fontSize: "0.9rem" }}>
                  Cuidado facial
                </p>
                <h3 className="card-title fw-bold" style={{ color: "#4a2c3a" }}>
                  Cómo construir una rutina facial simple y efectiva
                </h3>
                <p className="card-text text-secondary">
                  Descubre los pasos básicos para comenzar una rutina de cuidado
                  facial enfocada en limpieza, hidratación y protección diaria.
                </p>
                <button
                  type="button"
                  className="btn button1"
                  data-bs-toggle="modal"
                  data-bs-target="#modalBlog1"
                >
                  Leer más
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card border-0 shadow-sm h-100 rounded-4 overflow-hidden">
              <img
                src="/img/blog2.jpg"
                className="card-img-top"
                alt="Cuidado corporal"
                style={{ height: "280px", objectFit: "cover" }}
              />
              <div className="card-body p-4">
                <p className="text-uppercase fw-semibold mb-2" style={{ color: "#b06a8a", fontSize: "0.9rem" }}>
                  Bienestar y cuidado personal
                </p>
                <h3 className="card-title fw-bold" style={{ color: "#4a2c3a" }}>
                  La importancia de cuidar tu piel todos los días
                </h3>
                <p className="card-text text-secondary">
                  Incorporar pequeños hábitos diarios puede marcar una gran
                  diferencia en la salud y apariencia de tu piel.
                </p>
                <button
                  type="button"
                  className="btn button1"
                  data-bs-toggle="modal"
                  data-bs-target="#modalBlog2"
                >
                  Leer más
                </button>
              </div>
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
            Contenido pensado para ti
          </h2>
          <p
            className="text-secondary mx-auto"
            style={{ maxWidth: "850px" }}
          >
            Queremos acompañarte no solo con productos, sino también con
            información útil, práctica y cercana para que tu experiencia de
            autocuidado sea más completa.
          </p>
        </div>
      </section>

      <div
        className="modal fade"
        id="modalBlog1"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content rounded-4 border-0 shadow">
            <div className="modal-header">
              <h2 className="modal-title fw-bold" style={{ color: "#4a2c3a" }}>
                Cómo construir una rutina facial simple y efectiva
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body p-4">
              <img
                src="/img/blog1.jpg"
                className="img-fluid rounded-4 mb-4"
                alt="Rutina facial"
                style={{ width: "100%", maxHeight: "380px", objectFit: "cover" }}
              />

              <p className="text-secondary">
                Iniciar una rutina facial no tiene por qué ser complicado. Lo más
                importante es conocer las necesidades básicas de tu piel y mantener
                constancia en hábitos sencillos pero efectivos.
              </p>

              <p className="text-secondary">
                Una rutina básica puede comenzar con una buena limpieza para
                remover impurezas, seguida de hidratación para mantener la piel
                suave y equilibrada. Durante el día, también es clave complementar
                con protección solar para ayudar a prevenir el envejecimiento
                prematuro y el daño causado por factores externos.
              </p>

              <p className="text-secondary">
                En LumiSkin creemos que el cuidado facial debe sentirse cercano,
                práctico y adaptado a cada persona. Por eso te invitamos a elegir
                productos que se ajusten a tu tipo de piel y a construir una rutina
                que realmente puedas mantener en el tiempo.
              </p>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn button1"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="modalBlog2"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content rounded-4 border-0 shadow">
            <div className="modal-header">
              <h2 className="modal-title fw-bold" style={{ color: "#4a2c3a" }}>
                La importancia de cuidar tu piel todos los días
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body p-4">
              <img
                src="/img/blog2.jpg"
                className="img-fluid rounded-4 mb-4"
                alt="Cuidado diario de la piel"
                style={{ width: "100%", maxHeight: "380px", objectFit: "cover" }}
              />

              <p className="text-secondary">
                El cuidado de la piel forma parte del bienestar diario. No se trata
                solo de estética, sino también de dedicar unos minutos al
                autocuidado, la protección y la prevención.
              </p>

              <p className="text-secondary">
                Mantener la piel limpia e hidratada ayuda a conservar su equilibrio
                natural y a mejorar su apariencia con el tiempo. Además, incorporar
                productos adecuados a tu rutina puede ayudarte a sentir mayor
                comodidad, frescura y confianza en tu día a día.
              </p>

              <p className="text-secondary">
                En LumiSkin buscamos acercarte a ese bienestar a través de productos
                de cuidado personal seleccionados con dedicación, para que cada
                rutina sea una experiencia simple, agradable y efectiva.
              </p>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn button1"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}