import Cards from "./components/Cards";
import Header from "./components/Header";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";

const img = [{
  id: 1,
  src: "https://cdn.pixabay.com/photo/2015/10/26/09/08/cure-1006810_960_720.jpg",
  titulo: "Efecto Placebo/Nocebo",
  description: "Efectos que nuestro conciente no controla",
}, {
  id: 2,
  src: "https://cdn.pixabay.com/photo/2017/01/25/12/31/bitcoin-2007769_960_720.jpg",
  titulo: "Moneda Digital",
  description: "¿Cómo se puede obtener bitcoins?",
}, {
  id: 3,
  src: "https://cdn.pixabay.com/photo/2017/12/10/17/00/robot-3010309_960_720.jpg",
  titulo: "Transhumanismo",
  description: "El cruce entre la ciencia y el cuerpo humano",
}];

function App() {
  return (
    <div className="container">
    <Header titulo='Galería de Imágenes con React'/>
    <Cards img={img} />
    <Footer/>
    </div>
  );
}

export default App;
