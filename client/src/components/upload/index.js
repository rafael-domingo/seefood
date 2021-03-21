import React, { Fragment, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

import Image from '../image';
import Message from './message';


function FileUpload({setShowFood}) {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState('');
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [showImage, setShowImage] = useState(false);

    // Listen for fileupload
    React.useEffect(() => {
        try {
            onSubmit()
        }
        catch(err) {
            console.log(`useEffect: ${err}`)
        }
    }, [file])

    const onChange = e => {
        try {
            setFile(e.target.files[0]);
            setFilename(e.target.files[0].name);
            setShowImage(true);
        }
        catch(err) {
            console.log(`onchange: ${err}`)
        }
        
    };

    const onSubmit = async () => {
        // e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await axios.post('http://localhost:5000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: progressEvent => {
                    setUploadPercentage(parseInt(Math.round((progressEvent.loaded  * 100)/ progressEvent.total)))
                    // Clear percentage 
                    setTimeout(() => {
                        setUploadPercentage(0)
                    }, 10000)   
                } 
            });

            const { fileName, filePath, labels } = res.data;
            console.log(`labels: ${labels[0].description}`);
            setUploadedFile({ fileName, filePath });
            setMessage('File Uploaded');
            setShowFood(true);
        } catch(err) {
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
        <Fragment>
            {message ? <Message msg={message}/> : null }
            <form onSubmit={onSubmit} style={formStyle}>
                <div style={formStyle}>
                    <motion.label htmlFor="customFile" style={inputStyle} initial={{ scale: 0, opacity: 0 }}animate={{ scale: 1, opacity: 1, transition: { duration: 1 } }}whileHover={{ width: '50vw', height: '50vh', borderRadius: '20px' }}>
                        <input type="file" id="customFile" onChange={onChange} style={{display: 'none'}}/>
                            {/* {filename} */}
                            +
                    </motion.label>
                    {/* <input type="submit" value="Upload" /> */}

                </div>

            </form>

        </Fragment>
        <Image uploadedFile={uploadedFile} show={showImage} setShow={setShowImage} setShowFood={setShowFood}/>
        </div>

    )
}

export default FileUpload;