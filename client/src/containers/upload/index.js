import React from 'react';
import { motion } from 'framer-motion';

import FileUpload from '../../components/upload';

function Upload({ variants, setUploadedFile, message, setMessage, setShowImage, setLabels }) {
    
    const UploadStyle = {
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    

    return (
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

export default Upload;
