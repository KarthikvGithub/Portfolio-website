// import logo from './logo.svg';
import './App.css';

const fname = "Karthik";
const lname = "Valdas";

const img1 = 'https://picsum.photos/200'
// const img2 = 'https://en.wikipedia.org/wiki/File:Cheeseburger.jpg'
// const img3 = 'https://en.wikipedia.org/wiki/File:Strawberry_milk_shake_(cropped).jpg'

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <h1 className="heading" contentEditable="true" spellCheck="false">Random Photo List of {fname} {lname}</h1>
      <img alt='Random Images' src={img1+"?grayscale"}/>
    </div>
  );
}

export default App;
