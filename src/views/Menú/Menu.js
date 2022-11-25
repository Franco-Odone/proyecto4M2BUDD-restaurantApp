import "./menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <h2>Menú</h2>
      <div className="contenedor-menu">
        <div className="platos-calientes">
          <h1>Platos</h1>
          <div>
            <h2>ESPAGUETI O FETUCCINI CARBONARA</h2>
            <span>$11.990</span>
            <p>Un clásico italiano. Tocino, reducción de crema y huevo.</p>
          </div>
          <div>
            <h2>GNOCCHI SCARPARO</h2>
            <span>$9.990</span>
            <p>
              Gnocchi de papa con salsa a base de tocino, cebollin, albahaca,
              tomate y crema.
            </p>
          </div>

          <div>
            <h2>AGNOLOTTI AL OLIVO</h2>
            <span>$13.990</span>
            <p>
              Relleno de ricota, espinaca y nueces. Salteados en mantequilla,
              aceitunas negras, tomate, ajo, cebollin y un toque de crema.
            </p>
          </div>
        </div>
        <div className="pizzas">
          <h1>Pizzas</h1>
          <div>
            <h2>Peperoni</h2>
            <span>$10.200</span>
            <p>
              Salsa de tomate, mozzarella, peperoni picante, merkén, orégano y
              aceite de oliva.
            </p>
          </div>
          <div>
            <h2>Cuatro Quesos</h2>
            <span>$9.900</span>
            <p>
              Salsa de tomate, mozzarella, queso azul, queso emmental, queso
              parmesano, albahaca y aceite de oliva.
            </p>
          </div>
          <div>
            <h2>Margarita</h2>
            <span>$8.000</span>
            <p>Salsa de tomate, mozzarella, albahaca y aceite de oliva.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Menu };
