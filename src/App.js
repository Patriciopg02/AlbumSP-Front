import './App.css';
import foto1 from './resources/1.jpeg'
import foto2 from './resources/2.jpeg'
import foto3 from './resources/3.jpeg'

function App() {

  return (
    <div className="App">
      <div className="hero">
        <h1>Mis Viajes</h1>
      </div>
      <div className="container">
        <div className="evento">
          <div className="foto">
            <img src="./img/1.jpg" alt=""/>
          </div>
          <h3 className="fecha">9 de Enero de 2021</h3>
        </div>
        <div className="evento">
          <div className="foto">
            <img src="./img/2.jpg" alt=""/>
          </div>
          <h3 className="fecha">3 de Febrero de 2021</h3>
        </div>
        <div className="evento">
          <div className="foto">
            <img src="./img/3.jpg" alt=""/>
          </div>
          <h3 className="fecha">7 de Junio de 2022</h3>
        </div>
        <div className="evento">
          <div className="foto">
            <img src="./img/4.jpg" alt=""/>
          </div>
          <h3 className="fecha">18 de Agosto de 2023</h3>
        </div>
        <div className="evento">
          <div className="foto">
            <img src="./img/5.jpg" alt=""/>
          </div>
          <h3 className="fecha">26 de Noviembre de 2024</h3>
        </div>
        <div className="evento">
          <div className="foto">
            <img src="./img/6.jpg" alt=""/>
          </div>
          <h3 className="fecha">7 de Diciembre de 2021</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
