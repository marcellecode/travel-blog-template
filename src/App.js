import './App.scss';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
     <Header/>
     <section className="banner-home">
        <Banner/>
     </section>
    </div>
  );
}

export default App;
