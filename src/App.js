// import logo from './logo.svg';
// import cinepolisApp from './cinepolislogo-removebg-preview.png'
// import chedrauiApp from './chedraui-logo-removebg-preview.png'
import cocaCola from './coca-cola-campaing.jpeg'
// import estacionamientoApp from './estacionamiento.png'
import appleApp from './apple-logo-removebg-preview.png'
import americanEagleApp from './american-eagle-logo-removebg-preview.png'
import aplazoLogo from './aplazo1.png'
import disney from './Pottery-Barn-Kids-Successful-Banner-Ad.webp'
import zara from './zara-campaing.jpeg'
import adidasLogo from './adidas1.png'
import liverpoolLogo from './liverpool1.png'
import zaraLogo from './zara1.png'
import pullandbearLogo from './Pull-Bear1.png'
import underArmor from './Under-Armour1.png'
import levis from './Levis1.png'
import kipling from './kipling.png'
import gap from './gap.png'
import moyo from './moyo.png'
import julio from './julio.png'
import reservaTuMesa from './reserva-tu-mesa-alfred.png'
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
        <div className="app-alfred"></div>
        <div className="app-alfred"></div>
        <div className="app-alfred"></div>
        <div className="app-alfred"></div>
        <div className="app-alfred"></div>
        <div className="app-alfred"></div>
        </div>
        <div className="container-aplazo">         <button class="btn btn-primary aplazo-alfred" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"><img className="aplazo-logo" src={aplazoLogo} alt="" /></button>
        {/* <button class="btn btn-primary aplazo-alfred" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Estacionamiento</button> */}
        <button type="button" class="btn btn-primary aplazo-alfred" data-bs-toggle="modal" data-bs-target="#exampleModal">Launch demo modal</button>
</div>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<div class="offcanvas offcanvas-top dropdown-menu-aplazos" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  
  <div class="offcanvas-body">
  <div className="container-app container-app-off-canvas-body">
        <div className="app-alfred canvas-app-alfred"><img className="image-app-alfred canvas-imagem-app-alfred" src={adidasLogo} alt="uber"></img></div>
        <div className="app-alfred canvas-app-alfred"><img className="image-app-alfred canvas-imagem-app-alfred" src={liverpoolLogo} alt="uber"></img></div>
        <div className="app-alfred canvas-app-alfred"><img className="image-app-alfred canvas-imagem-app-alfred" src={zaraLogo} alt="uber"></img></div>
        <div className="app-alfred canvas-app-alfred"><img className="image-app-alfred canvas-imagem-app-alfred" src={pullandbearLogo} alt="uber"></img></div>
        <div className="app-alfred canvas-app-alfred"><img className="image-app-alfred canvas-imagem-app-alfred" src={underArmor} alt="uber"></img></div>
        <div className="app-alfred canvas-app-alfred"><img className="image-app-alfred canvas-imagem-app-alfred" src={levis} alt="uber"></img></div>
        <div className="app-alfred canvas-app-alfred"><img className="image-app-alfred canvas-imagem-app-alfred" src={kipling} alt="uber"></img></div>
        <div className="app-alfred canvas-app-alfred"><img className="image-app-alfred canvas-imagem-app-alfred" src={gap} alt="uber"></img></div>
        <div className="app-alfred canvas-app-alfred"><img className="image-app-alfred canvas-imagem-app-alfred" src={moyo} alt="uber"></img></div>
        <div className="app-alfred canvas-app-alfred"><img className="image-app-alfred canvas-imagem-app-alfred" src={julio} alt="uber"></img></div>
        <div className="app-alfred canvas-app-alfred"><img className="image-app-alfred canvas-imagem-app-alfred" src={appleApp} alt="uber"></img></div>
        <div className="app-alfred canvas-app-alfred"><img className="image-app-alfred canvas-imagem-app-alfred" src={americanEagleApp} alt="uber"></img></div>
        </div>  </div>

       
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
  
 <img src={reservaTuMesa} className="d-block w-100 slider-images" alt="..."></img>
  
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
