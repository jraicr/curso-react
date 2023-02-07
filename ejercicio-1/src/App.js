import './App.css';

import bowserPic from './images/bowser.png';
import marioPic from './images/mario.png';
import yoshiPic from './images/yoshi.png';

function App() {

  let characterName = { protagonist: 'Mario', antagonist: 'Bowser', helper: 'Yoshi' };

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
function characterCard(charImg, charName) {

  return (
    <div className="card">
      <img alt="Imagen del personaje {charnName}"  src={charImg}></img>
      <h2>{charName}</h2>
    </div>
  );
}

export default App;
