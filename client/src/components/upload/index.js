import React, { useState } from 'react';
import axios from 'axios';

import Message from './message';
import Form from '../form';

function FileUpload({setUploadedFile, message, setMessage, setShowImage, setLabels}) {
    const [currentImage, setCurrentImage] = useState();

    // Side Effect - Submit data to API
    React.useEffect( async () => {

        if (currentImage) {
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
       
    }, [currentImage])

    // Set image state
    const onChange = e => {
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


    return(
        <div style={fragmentStyle}>
            {/* {message ? <Message msg={message}/> : null } */}
            <Form onChange={onChange}/>
        </div>

    )
}

export default FileUpload;