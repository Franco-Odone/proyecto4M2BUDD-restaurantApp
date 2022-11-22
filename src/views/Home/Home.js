import "./home.css";
import { CiPizza } from "react-icons/ci";
import { MdOutlineIcecream } from "react-icons/md";
import img1 from "../../img/close-up-of-pepperoni-pizza-slices-with-sausages-mushroom-olive-bell-pepper-and-cheese-medium-1345x800.jpg";

const Home = () => {
  return (
    <div className="home">
      <section className="jumbotron">
        <div className="titulo ">
          <h1>Por qué elegirnos</h1>
        </div>
        <p className="p1">
          La comida italiana se ha convertido en la cocina favorita de las
          personas de todo el mundo. Nos enorgullecemos de una variedad de
          nuestros platos auténticos y la más alta calidad de nuestra comida.{" "}
          <CiPizza />
        </p>
        <p className="p2">
          Nuestro personal está formado por profesionales experimentados que
          entienden cómo prepararse y servir deliciosas comidas y bebidas en un
          ambiente limpio y cómodo. <MdOutlineIcecream />
        </p>
        <img src={img1} alt="Imágen principal" title="Imágen principal" />
      </section>
    </div>
  );
};

export { Home };
