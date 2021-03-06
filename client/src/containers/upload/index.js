import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import FileUpload from '../../components/upload';

function Upload({ variants, setUploadedFile, message, setMessage, setShowImage, setLabels }) {
    
    const UploadStyle = {
        width: '100%',
        height: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }
    

    return (
      <AnimatePresence exitBeforeEnter>
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
      </AnimatePresence>
       
    )
}

export default Upload;
