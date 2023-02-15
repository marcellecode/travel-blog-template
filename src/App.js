import "./App.scss";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Passeios from "./components/Passeios/Passeios";
import paoDeAcucarImage from "./assets/img/agustin-diaz-gargiulo-7F65HDP0-E0-unsplash.jpg";
import cityTourImage from "./assets/img/samuel-wesley-silva-Lr2K2hAbAH0-unsplash.jpg";
import parqueLageImage from "./assets/img/ondrej-bocek-3q0YQQJMkjw-unsplash.jpg";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="banner-home">
        <Banner />
      </section>
      <section className="passeios" id="passeios">
        <h1>Passeios</h1>
        <div className="passeios-list">
          <Passeios
            image={paoDeAcucarImage}
            altText="Pão de açúcar"
            title="Pão de açúcar"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ligula orci, porttitor sed ipsum in, dictum ornare sem. Ut pretium consequat tortor, at congue urna semper a. "
            buttonLabel="agende já"
          />

          <Passeios
            image={cityTourImage}
            altText="City Tour"
            title="City Tour"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ligula orci, porttitor sed ipsum in, dictum ornare sem. Ut pretium consequat tortor, at congue urna semper a. "
            buttonLabel="agende já"
          />

          <Passeios
            image={parqueLageImage}
            altText="Parque Lage"
            title="Parque Lage"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ligula orci, porttitor sed ipsum in, dictum ornare sem. Ut pretium consequat tortor, at congue urna semper a. "
            buttonLabel="agende já"
          />
        </div>
      </section>
    </div>
  );
}

export default App;
