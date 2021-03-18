import './App.css';
import React from 'react';

import FileUpload from '../components/upload';
import Food from '../components/food';

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

  const AppStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  const UploadStyle = {
    width: '50%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const FoodStyle = {
    width: '50%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <div style={AppStyle}>
        <div style={UploadStyle}>
          <FileUpload />
        </div>
        <div style={FoodStyle}>
          <Food />
        </div>
        
    </div>
  );
}

export default App;
