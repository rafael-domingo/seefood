import React, { Fragment, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import axios from 'axios';

import Message from './message';


function FileUpload() {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState('');
    const [uploadPercentage, setUploadPercentage] = useState(0);

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
                    <motion.label htmlFor="customFile" style={inputStyle} animate={{ rotate: 360, transition: { duration: 1 } }}whileHover={{ scale: 2, borderRadius: '20px' }}>
                        <input type="file" id="customFile" onChange={onChange} style={{display: 'none'}}/>
                            {/* {filename} */}
                            +
                    </motion.label>
                    {/* <input type="submit" value="Upload" /> */}

                </div>
                <UserImage uploadedFile={uploadedFile} />

            </form>

        </Fragment>
        </div>

    )
}

function UserImage({uploadedFile}) {

    const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [20, -20]);
  const rotateY = useTransform(x, [0, 400], [-20, 20]);

  const areaRef = React.useRef(null);

  function handleMouse(event) {
    // using a ref because event.target will switch
    // to the values of the child div when you hover over it
    var rect = areaRef.current.getBoundingClientRect();
    // calculating the x and y position within the element
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

    const imgStyle = {
        width: '300px',
        height: '300px',
        objectFit: 'cover',
        borderRadius: '50%',
        
    }

    const imgDivStyle = {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: '20px',
        rotateX: rotateX,
          rotateY: rotateY
        
    }

    const outerDivStyle = {
        width: '400px',
        height: '400px',
        display: "flex",
        placeItems: "center",
        placeContent: "center",
        borderRadius: '30px',
        // backgroundColor: "rgba(255, 255, 255, 0.05)",
        perspective: '1000'
    }
    return (
  <AnimatePresence>

    { uploadedFile && (
        <motion.div style={outerDivStyle} ref={areaRef} onMouseMove={handleMouse}>
            <motion.div style={imgDivStyle}>
            { uploadedFile.fileName }
            <img style={imgStyle} src={uploadedFile.filePath} alt=""/>
            </motion.div>
        </motion.div>)
     
    }     
</AnimatePresence>
    )
  
}

export default FileUpload;