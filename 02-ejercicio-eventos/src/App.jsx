import './App.css';

import bowserPic from './assets/images/bowser.png';
import marioPic from './assets/images/mario.png';
import yoshiPic from './assets/images/yoshi.png';
import bowserSilhouette from './assets/images/bowser-silueta.png';
import marioSilhouette from './assets/images/mario-silueta.png';
import yoshiSilhouette from './assets/images/yoshi-silueta.png';

function App() {

  let characterName = { protagonist: 'mario', antagonist: 'bowser', helper: 'yoshi' };

  return (
    <div className="content-wrapper">
      <div className='characters-wrapper'>
        {characterCard(yoshiPic, characterName.helper)}
        {characterCard(bowserPic, characterName.antagonist)}
        {characterCard(marioPic, characterName.protagonist)}
      </div>
    </div>
  );
}

/**
 * Crea un elemento div que contiene la imagen de un personaje y su nombre
 * @param {string} characterImg La ruta de la imagen del personaje
 * @param {string} characterName El nombre del personaje
 */
function characterCard(characterImg, characterName) {

  let currentClicks = {
    imgClicks: 0,
    textClicks: 0
  }

  let characterSilhouettesImg = { mario: marioSilhouette, bowser: bowserSilhouette, yoshi: yoshiSilhouette };

  /**
   * Actualiza los clicks que se ha realizado al elemento <img> o <h2> de la tarjeta de personaje.
   * @param {String} element El nombre del nodo
   */
  const updateClicks = (element) => {

    if (element.nodeName == "IMG") {
      currentClicks.imgClicks += 1;

    } else if (element.nodeName == "H2") {
      currentClicks.textClicks += 1;
    }
  }

  /**
  * Cambiar el color de fondo de un nodo del DOM
  * @param {HTMLElement} element  El nodo cuyo color de fondo se quiere cambiar
  * @param {String} color  El color de fondo
  */
  const changeBgColor = (element, color) => {
    element.style.backgroundColor = color;
  }

  /**
    * Cambia la imagen tras un evento de click. Un click cambia a silueta. Dos clicks la hace invisible.
    * @param {Event} e  El evento click despachado
    */
  const switchImage = (e) => {
    currentClicks.imgClicks == 1 ? e.target.src = characterSilhouettesImg[characterName] : e.target.style.opacity = "0";
  };

  /**
   *  Gestiona la lógica de cambio de imágenes y actualiza los clicks realizados en ellas.
   *  @param {Event} e El evento click despachado
   */
  const imgClickHandler = (e) => {
    updateClicks(e.target);
    switchImage(e);

    if (currentClicks.imgClicks == 1) {
      changeBgColor(e.target.parentNode, "#fff");
    }
  }

  /**
    *  Cambia el texto tras un evento de click. Un click lo cambia a "Visto". Dos clicks se vacía la cadena de caracteres.
    *  @param {Event} e  El evento click despachado
    */
  const switchText = (e) => {
    currentClicks.textClicks == 1 ? e.target.innerText = "Visto" : e.target.innerText = "";
  }

   /**
   *  Gestiona la lógica de cambio de textos y actualiza los clicks realizados en estos.
   *  @param {Event} e El evento click despachado
   */
  const textClickHandler = (e) => {
    updateClicks(e.target);
    switchText(e);
  }

  return (
    <div id={characterName} className="card">
      <img alt="Imagen del personaje {charName}" onClick={imgClickHandler} src={characterImg}></img>
      <h2 onClick={textClickHandler}>{characterName.charAt(0).toUpperCase() + characterName.slice(1)}</h2>
    </div>
  );
}

export default App;
