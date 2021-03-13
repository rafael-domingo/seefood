import './App.css';

import React from 'react';

import {VisionAPI} from '../util/VisionAPI';

function App() {
  const [image, setImage] = React.useState();
  const upload = React.useRef(null);

  const handleUpload = event => {
    const file = event.target.files[0];
    if (file) {
      console.log('file')
      const reader = new FileReader();
      const {current} = upload;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
        console.log(reader);
        VisionAPI.search(reader);

      }
      reader.readAsDataURL(file);
    }
  }

  const buttonUpload = () => {
    console.log(image);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <input type="file" onChange={handleUpload}/>
        <button onClick={buttonUpload}>Upload!</button>
        <img ref={upload} />
    </div>
  );
}

export default App;
