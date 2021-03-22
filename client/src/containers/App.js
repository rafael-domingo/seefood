import './App.css';
import React, { useState } from 'react';

import Upload from './upload';
import Output from './output';

import { AnimatePresence } from 'framer-motion';

function App() {
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [showImage, setShowImage] = useState(false);
  const [labels, setLabels] = useState();

  const AppStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  }

  const variants = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1
    }
  }

  return (
    <AnimatePresence>
    <div style={AppStyle}>
      <AnimatePresence exitBeforeEnter>
        {
          true && (
            <Upload 
              variants={variants}
              setUploadedFile={setUploadedFile}
              message={message}
              setMessage={setMessage}
              setShowImage={setShowImage}
              setLabels={setLabels}
            />
          )
        }
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        { showImage && (
          <Output 
            variants={variants}
            uploadedFile={uploadedFile}
            showImage={showImage}
            setShowImage={setShowImage}
            setUploadedFile={setUploadedFile}
            labels={labels}
          />
        )
        }
      </AnimatePresence>                
    </div>
    </AnimatePresence>
  
  );
}

export default App;
