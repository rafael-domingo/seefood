import './App.css';
import React, { useState } from 'react';

import FileUpload from '../components/upload';
import Food from '../components/food';
import Image from '../components/image';

import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
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
  const UploadStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const FoodStyle = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end'
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
          !showImage && (
            <motion.div 
            style={UploadStyle}
            variants={variants}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
              <FileUpload 
                setUploadedFile={setUploadedFile}
                message={message}
                setMessage={setMessage}
                setShowImage={setShowImage}
                setLabels={setLabels}
              />
            </motion.div>
          )
        }
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        { showImage && (
          <motion.div 
          style={FoodStyle}
          variants={variants}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
            <Image 
              uploadedFile={uploadedFile} 
              show={showImage} 
              setShow={setShowImage} 
              setUploadedFile={setUploadedFile}
              labels={labels}
            />
            <Food 
              show={showImage}
              labels={labels}
            />
          </motion.div>
        )
        }
      </AnimatePresence>                
    </div>
    </AnimatePresence>
  
  );
}

export default App;
