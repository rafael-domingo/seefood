import React, { Fragment, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

import Image from '../image';
import Message from './message';


function FileUpload({setUploadedFile, message, setMessage, setShowImage, setLabels}) {
    const [currentImage, setCurrentImage] = useState();
    const [currentFilename, setCurrentFilename] = useState();

    // Listen for fileupload
    React.useEffect(() => {
        try {
            console.log('use effect')
            onSubmit()
        }
        catch(err) {
            console.log(`useEffect: ${err}`)
        }
    }, [currentImage])

    const onChange = e => {
        // e.preventDefault();
        try {
            console.log('on change');
            setCurrentImage(e.target.files[0]);
            setCurrentFilename(e.target.files[0].name);
        }
        catch(err) {
            console.log(`onchange: ${err}`)
        }
        
    };

    const onSubmit = async () => {
        // e.preventDefault();
        const formData = new FormData();
        formData.append('file', currentImage);

        try {
            console.log('onsubmit')
            const res = await axios.post('http://localhost:5000/upload', formData, {
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

        } catch(err) {
            console.log('error')
            if(err.response.status === 500) {
                setMessage('There was a problem with the server');
            } else {
                setMessage(err.response.data.msg);
            }
        }
    }

    const inputStyle = {
        borderRadius: '50%',
        width: '200px',
        height: '200px',
        border: '1px solid white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: '3em',
    }

    const formStyle = {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    }

 

    const fragmentStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '100%'
    }


    return(
        <div style={fragmentStyle}>
            {message ? <Message msg={message}/> : null }
            <form 
                onSubmit={onSubmit} 
                style={formStyle}
            >
                <div style={formStyle}>
                    <motion.label 
                        htmlFor="customFile" 
                        style={inputStyle} 
                        initial={{ 
                            scale: 0, 
                            opacity: 0 
                        }}
                        animate={{ 
                            scale: 1, 
                            opacity: 1, 
                            transition: { 
                                duration: 1
                            } 
                        }}
                        whileHover={{ 
                            width: '50vw', 
                            height: '50vh', 
                            borderRadius: '20px' 
                        }}>
                        <input 
                            type="file" 
                            id="customFile" 
                            onChange={onChange} 
                            style={{display: 'none'}}
                        />
                            +
                    </motion.label>
                </div>
            </form>
        </div>

    )
}

export default FileUpload;