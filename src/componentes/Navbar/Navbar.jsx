import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCarrito } from "../Carrito/ContextCarrito";

export function Navbar() {
  const navigate = useNavigate();
  const {
    carrito,
    eliminarProducto,
    totalProductos,
    actualizarCantidad,
    errores,
  } = useCarrito();

  const [usuarioActivo, setUsuarioActivo] = useState(null);
  const [rol, setRol] = useState(null);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    const cargarSesion = () => {
      const guardado = localStorage.getItem("usuario");
      if (guardado) {
        try {
          const user = JSON.parse(guardado);
          const rolNormalizado =
            typeof user.rol === "string"
              ? user.rol.toLowerCase()
              : user.rol?.nombre?.toLowerCase() || "cliente";

          setUsuarioActivo(user);
          setRol(rolNormalizado);
        } catch {
          setUsuarioActivo(null);
          setRol(null);
        }
      } else {
        setUsuarioActivo(null);
        setRol(null);
      }
    };

    cargarSesion();
    window.addEventListener("storage", cargarSesion);

    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function (key, value) {
      originalSetItem.apply(this, arguments);
      if (key === "usuario") cargarSesion();
    };

    return () => {
      window.removeEventListener("storage", cargarSesion);
      localStorage.setItem = originalSetItem;
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    localStorage.removeItem("rolUsuario");
    localStorage.removeItem("nombreUsuario");
    setUsuarioActivo(null);
    setRol(null);
    navigate("/");
  };

  const handleBuscar = (e) => {
    e.preventDefault();

    const texto = busqueda.trim();

    if (!texto) {
      navigate("/productos");
      return;
    }

    navigate(`/productos?search=${encodeURIComponent(texto)}`);
    setBusqueda("");
  };

  return (
    <>
      <nav className="navbar navbar-expand-sm mi-navbar position-relative">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#Menu"
            aria-controls="Menu"
            aria-expanded="false"
            aria-label="Abrir menú"
          >
            <img src="/img/Menu.png" alt="Menu" />
          </button>

          <Link className="navbar-brand order-0 me-3" to="/">
              <img src="/img/LumiSkin.png" alt="Logo" width="120" />
            </Link>

            <form className="d-none d-lg-flex buscador-navbar ms-3 me-4" onSubmit={handleBuscar}>
              <input
                type="text"
                className="form-control me-2"
                placeholder="Buscar productos..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
              <button type="submit" className="btn btn-buscar-navbar">
                Buscar
              </button>
            </form>

          <div className="iconos-navbar d-flex align-items-center gap-3">
            <button
              type="button"
              className="btn btn-transparent p-0 position-relative"
              data-bs-toggle="modal"
              data-bs-target="#carritoModal"
            >
              <img src="/img/carrito1.png" alt="Carrito" />
              {totalProductos() > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalProductos()}
                </span>
              )}
            </button>

            <button
              type="button"
              className="btn btn-transparent p-0"
              data-bs-toggle="modal"
              data-bs-target="#usuarioModal"
            >
              <img src="/img/user.png" alt="Usuario" />
            </button>
          </div>

          <div className="collapse navbar-collapse" id="Menu">
            <div className="w-100">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 menu-principal-navbar">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/productos"
                    data-bs-toggle="dropdown"
                  >
                    Productos
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/productos">
                        Todos los productos
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Cuidado-Capilar">
                        Cuidado Capilar
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/cuidado-facial">
                        Cuidado Facial
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/cuidado-corporal">
                        Cuidado Corporal
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/fragancias">
                        Perfumes y fragancias
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Cuidado-personal">
                        Cuidado Personal
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/nosotros">
                    Nosotros
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/blogs">
                    Blogs
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/contacto">
                    Contacto
                  </Link>
                </li>

                {(rol === "admin" || rol === "administrador") && (
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      data-bs-toggle="dropdown"
                    >
                      Administración
                    </Link>

                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/inventario">
                          Inventario
                        </Link>
                      </li>

                      <li>
                        <Link className="dropdown-item" to="/usuario">
                          Usuarios
                        </Link>
                      </li>

                      <li>
                        <Link className="dropdown-item" to="/ordenes">
                          Órdenes
                        </Link>
                      </li>
                    </ul>
                  </li>
                )}
              </ul>

            </div>
          </div>
        </div>
      </nav>

      <div className="modal fade" id="carritoModal" tabIndex="-1">
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          style={{ maxWidth: "600px" }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">Carrito de Compras</h2>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">
              {carrito.length === 0 ? (
                <h3>No hay productos en el carrito.</h3>
              ) : (
                <ul className="list-group">
                  {carrito.map((item) => (
                    <li
                      key={item.id}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <div className="d-flex align-items-center gap-3">
                        {item.imagenUrl && (
                          <img
                            src={item.imagenUrl}
                            alt={item.nombre}
                            style={{
                              width: "100px",
                              objectFit: "cover",
                              borderRadius: "8px",
                            }}
                          />
                        )}

                        <div className="flex-grow-1">
                          <strong>{item.nombre}</strong>

                          <div
                            className="d-flex align-items-center gap-2 mt-2 position-relative"
                            style={{ minHeight: "28px" }}
                          >
                            <button
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() =>
                                actualizarCantidad(item.id, item.cantidad - 1)
                              }
                              disabled={item.cantidad <= 1}
                            >
                              -
                            </button>

                            <span>{item.cantidad}</span>

                            <button
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() =>
                                actualizarCantidad(item.id, item.cantidad + 1)
                              }
                            >
                              +
                            </button>

                            {errores[item.id] && (
                              <span
                                className="text-danger"
                                style={{
                                  position: "absolute",
                                  left: "120px",
                                  fontSize: "0.85rem",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {errores[item.id]}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => eliminarProducto(item.id)}
                      >
                        X
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="modal-footer">
              <button className="btn button2" data-bs-dismiss="modal">
                Cerrar
              </button>
              <button
                className="btn button1"
                disabled={carrito.length === 0}
                onClick={() => {
                  const modal = document.getElementById("carritoModal");
                  const instancia = window.bootstrap.Modal.getInstance(modal);
                  if (instancia) instancia.hide();
                  navigate("/pago");
                }}
              >
                Ir al pago
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="usuarioModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title titulo w-100 text-center">Usuario</h2>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body text-center">
              {!usuarioActivo ? (
                <>
                  <h3>Inicia sesión o regístrate.</h3>

                  <button
                    className="btn btn-sm w-50 d-block mx-auto mb-2 button1"
                    onClick={() => {
                      navigate("/Login");
                      window.bootstrap.Modal.getInstance(
                        document.getElementById("usuarioModal")
                      ).hide();
                    }}
                  >
                    Iniciar sesión
                  </button>

                  <button
                    className="btn btn-sm w-50 d-block mx-auto button2"
                    onClick={() => {
                      navigate("/registro");
                      window.bootstrap.Modal.getInstance(
                        document.getElementById("usuarioModal")
                      ).hide();
                    }}
                  >
                    Regístrate
                  </button>
                </>
              ) : (
                <>
                  <h3>👋 Bienvenido, {usuarioActivo.nombre}</h3>

                  <div className="d-flex justify-content-center gap-3 mt-3">
                    <button
                      className="btn btn-secondary"
                      onClick={() => {
                        navigate("/perfil");
                        window.bootstrap.Modal.getInstance(
                          document.getElementById("usuarioModal")
                        ).hide();
                      }}
                    >
                      Mi Perfil
                    </button>
                    <button
                      className="btn button1"
                      onClick={() => {
                        navigate("/productos");
                        window.bootstrap.Modal.getInstance(
                          document.getElementById("usuarioModal")
                        ).hide();
                      }}
                    >
                      Ir a comprar
                    </button>
                    <button className="btn button2" onClick={handleLogout}>
                      Cerrar sesión
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}