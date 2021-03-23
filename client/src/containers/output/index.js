import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Image from '../../components/image';
import Food from '../../components/food';

function Output({ variants, uploadedFile, showImage, setShowImage, setUploadedFile, labels }) {

    const FoodStyle = {
        width: '100%',
        height: '100%',
        display: 'flex',
        margin: '50px',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: '50px',
        backgroundColor: 'rgba(47,33,70,1)',
        boxShadow: '5px 10px',
        borderRadius: '50px'

    }

    return (
        <AnimatePresence exitBeforeEnter>
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
        </AnimatePresence>
          
    )
}

export default Output;