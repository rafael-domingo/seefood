import React, { useState } from 'react';
import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import Form from '../form';
import ReactLoading from 'react-loading';

function FileUpload({setUploadedFile, message, setMessage, setShowImage, setLabels}) {
    const [currentImage, setCurrentImage] = useState();
    const [loading, setLoading] = useState(false);
    // Side Effect - Submit data to API
    React.useEffect( async () => {
        if (currentImage) {
            const formData = new FormData();
            formData.append('file', currentImage);
    

            try {
                console.log('onsubmit')
                const res = await axios.post('/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
    
                const { fileName, filePath, labels } = res.data;
                labels.map(item => console.log(item.description));
                setLabels(labels);
                setUploadedFile({ fileName, filePath });
                setMessage('File Uploaded');
                setShowImage(true);
                setLoading(false)
            } catch(err) {
                console.log('error')
                if(err.response.status === 500) {
                    setMessage('There was a problem with the server');
                } else {
                    setMessage(err.response.data.msg);
                }
                setLoading(false)
            }
        }
       
    }, [currentImage])

    // Set image state
    const onChange = e => {
        setLoading(true)

        try {
            console.log('on change');
            setCurrentImage(e.target.files[0]);
        }
        catch(err) {
            console.log(`onchange: ${err}`)
        }
        
    };

    const fragmentStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '100%'
    }

    const variants = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1
        }
    }

    if (!loading) {
        return(
            <AnimatePresence exitBeforeEnter>
            <motion.div 
                style={fragmentStyle}
                variants={variants}
                initial="hidden"
                animate="show"
                exit="hidden">
                {/* {message ? <Message msg={message}/> : null } */}
                <Form onChange={onChange}/>
            </motion.div>
            </AnimatePresence>
          
    
        )
    } else {
        return (
            <AnimatePresence exitBeforeEnter>
                <ReactLoading type={"spin"} color={"white"} height={'10%'} width={'10%'} />                
            </AnimatePresence>
            
        )
    }
    
}

export default FileUpload;