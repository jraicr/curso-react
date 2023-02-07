import './App.css';
import logo from './logo-rai.svg';

function App() {

  let author = { name: 'J. Rai', position: 'Full Stack Developer' };
  let authorContainer = <div className='author'>{author.name} <span className='position'>{author.position}</span></div>;

  return (

    <div className="App">

      <div className="flex-col header">
        <img src={logo}></img>
        <h1>Curso de <span className="react-label"><a href="react">React</a></span></h1>
        {authorContainer}
      </div>
      <br />
    </div>
  );
}

export default App;
