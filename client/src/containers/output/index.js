import React from 'react';
import { motion } from 'framer-motion';

import Image from '../../components/image';
import Food from '../../components/food';

function Output({ variants, uploadedFile, showImage, setShowImage, setUploadedFile, labels }) {

    const FoodStyle = {
        width: '100vw',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    }

    return (
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

export default Output;