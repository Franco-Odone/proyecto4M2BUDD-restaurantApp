import "./menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <h2>Menú</h2>
      <div className="contenedor-menu">
        <div className="platos-calientes">
          <div>
            <h2>ESPAGUETI O FETUCCINI CARBONARA</h2>
            <span>$11.990</span>
            <p>Un clásico italiano. Tocino, reducción de crema y huevo.</p>
          </div>
          <div>
            <h2>GNOCCHI SCARPARO</h2>
            <span>$9.990</span>
            <p>
              Gnocchi de papa con salsa a base de tocino, cebollin, albanaca,
              tomate V crema.
            </p>
          </div>
        </div>
        <div>
          <h2>AGNOLOTTI AL OLIVO</h2>
          <span>$13.990</span>
          <p>
            Relleno de ricota, espinaca y nueces. Salteados en mantequilla,
            aceitunas negras, tomate, ajo, cebollin y un toque de crema.
          </p>
        </div>
        <div className="pizzas"></div>
      </div>
    </div>
  );
};

export { Menu };
