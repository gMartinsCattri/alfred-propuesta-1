import logo from './logo.svg';
import uberApp from './uber-app-removebg-preview.png'
import cinepolisApp from './cinepolislogo-removebg-preview.png'
import chedrauiApp from './chedraui-logo-removebg-preview.png'
import cocaCola from './coca-cola-campaing.jpeg'
import estacionamientoApp from './estacionamiento.png'
import appleApp from './apple-logo-removebg-preview.png'
import americanEagleApp from './american-eagle-logo-removebg-preview.png'
import disney from './Pottery-Barn-Kids-Successful-Banner-Ad.webp'
import zara from './zara-campaing.jpeg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {


  window.addEventListener('load', function() {

    let indice = 1;
    muestraSlides(indice);
    
    setInterval(function tiempo(){
        muestraSlides(indice+=1)
    },2000);
    function muestraSlides(n){
        let i;
        const slides = document.getElementsByClassName('miSlider');
        let barras = document.getElementsByClassName('barra');
    
        if(n > slides.length){
            indice = 1;
        }
        if(n < 1){
            indice = slides.length;
        }
        for(i = 0; i < slides.length; i++){
            slides[i].style.display = 'none';
        }
        for(i = 0; i < barras.length; i++){
            barras[i].className = barras[i].className.replace(" active", "");
        }
        slides[indice-1].style.display = 'block';
        barras[indice-1].className += ' active';
    
    }

  });
  
  const iframeSource =
  '<iframe className="visita-virtual"  src="https://static.3dwayfinder.com/projects/680ebd4ea2ae574f7ade24362495555e/Default/"></iframe>';


  

  return (
    <div className="App">
      <header className="App-header">
        
        <div className="container-app">
        <div className="app-alfred"><img className="image-app-alfred" src={uberApp} alt="uber"></img></div>
        <div className="app-alfred"><img className="image-app-alfred" src={cinepolisApp} alt="uber"></img></div>
        <div className="app-alfred"><img className="image-app-alfred" src={chedrauiApp} alt="uber"></img></div>
        <div className="app-alfred"><img className="image-app-alfred" src={estacionamientoApp} alt="uber"></img></div>
        <div className="app-alfred"><img className="image-app-alfred" src={appleApp} alt="uber"></img></div>
        <div className="app-alfred"><img className="image-app-alfred" src={americanEagleApp} alt="uber"></img></div>
        </div>

        <div className="slider-alfred">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="false" data-bs-wrap="false" >
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item">
  
 <img src={logo} className="d-block w-100 slider-images" alt="..."></img>
  
          </div>
          <div className="carousel-item active">
             
             <div className="slide-contenedor">
                <div className="miSlider fade">
                    <img src={disney} alt=""></img>
                </div>
                <div className="miSlider fade">
                    <img src={cocaCola} alt=""></img>
                </div>
                <div className="miSlider fade">
                    <img src={zara} alt=""></img>
                </div>
               
                <div className="barras">
                    <span className="barra active" onClick="posicionSlide(1)"></span>
                    <span className="barra" onClick="posicionSlide(2)"></span>
                    <span className="barra" onClick="posicionSlide(3)"></span>
                </div>
            </div>
            


        </div>
          <div className="carousel-item">
          <div className="flex-slider-custom" dangerouslySetInnerHTML={{ __html: iframeSource }} ></div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
        </div>

      </header>
    </div>
  );
}

export default App;
