import "./App.scss";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Passeios from "./components/Passeios/Passeios";
import paoDeAcucarImage from "./assets/img/agustin-diaz-gargiulo-7F65HDP0-E0-unsplash.jpg";
import cityTourImage from "./assets/img/samuel-wesley-silva-Lr2K2hAbAH0-unsplash.jpg";
import parqueLageImage from "./assets/img/ondrej-bocek-3q0YQQJMkjw-unsplash.jpg";
import ownerBlog from "./assets/img/denys-nevozhai-z0nVqfrOqWA-unsplash.jpg";
function App() {
  return (
    <div className="App">
      <Header />
      <section className="banner-home">
        <Banner />
      </section>
      {/* <section className="passeios" id="passeios">
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

      <section className="sobrenos" id="sobrenos">
        <h1>Sobre nós</h1>
        <div className="sobrenos-content">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            ligula orci, porttitor sed ipsum in, dictum ornare sem. Ut pretium
            consequat tortor, at congue urna semper a. Fusce sit amet turpis et
            nisl hendrerit facilisis. Aliquam porttitor libero eu lectus
            aliquam, non placerat odio dignissim. Fusce tincidunt accumsan erat
            sit amet commodo. Aliquam dolor metus, dictum id sem et, scelerisque
            sodales nunc. Nam malesuada non urna non faucibus. Aliquam pharetra
            nulla vitae dolor pretium ultrices. Donec nisi ante, cursus ut lorem
            non, tincidunt venenatis quam. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Mauris
            blandit nisl lectus, id tincidunt tortor finibus ac. Etiam sit amet
            ultricies turpis. Aenean ornare mauris at molestie pharetra.
            Vestibulum erat risus, fermentum eu elementum eget, finibus in sem.
            Suspendisse vitae accumsan dolor.
          </span>
          <img src={ownerBlog} alt="" />
        </div>
      </section>

      <section className="contato" id="contato">
        <h1>Contato</h1>
        <div className="contato-content">
          <form action="">
            <label htmlFor="">Nome</label>
            <input type="text" placeholder="nome" />

            <label htmlFor="">E-mail</label>
            <input type="email" placeholder="e-mail" />

            <label htmlFor="">Telefone</label>
            <input type="phone" placeholder="telefone" />

            <label htmlFor="">Passeio de Interesse</label>
            <input type="text" placeholder="passeio" />

            <label htmlFor="">Mensagem</label>
            <textarea rows="5" cols="50"></textarea>

            <button>enviar</button>
          </form>
        </div>
      </section> */}
    </div>
  );
}

export default App;
