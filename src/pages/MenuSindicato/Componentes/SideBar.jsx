// Sidebar.js
import React, { useState } from 'react';


//borrar el componen7e no se usa
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  //cambiar a componen7es de reac7
  return (
    <nav
      id="sidebar"
      className={`col-md-3 col-lg-2 d-md-block bg-light sidebar ${collapsed ? 'collapsed' : ''}`}
    >
      <div className="position-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              <i className="bi bi-house-door"></i> Inicio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="bi bi-person"></i> Perfil
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="bi bi-gear"></i> Configuración
            </a>
          </li>
        </ul>
      </div>
      <button
        className="d-md-none btn btn-secondary"
        onClick={toggleSidebar}
      >
        Toggle Sidebar
      </button>
    </nav>
  );
};

export default Sidebar;

