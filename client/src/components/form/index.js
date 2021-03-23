import React from 'react';
import { motion } from 'framer-motion';

function Form({ onChange, onSubmit }) {
    const inputStyle = {
        borderRadius: '50%',
        width: '200px',
        height: '200px',
        border: '5px solid white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: '3em',
        backgroundColor: 'rgba(47,33,70,0.5)'
    }

    const formStyle = {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    }

    return (
        <div>
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
                        whileTap={{ 
                            backgroundColor: 'rgba(47,33,70,1)',
                            borderRadius: '20px',
                            width: '50vw',
                            height: '50vh'
                        }}
                        whileHover={{ 
                            backgroundColor: 'rgba(47,33,70,1)',
                            borderRadius: '20px',
                            width: '50vw',
                            height: '50vh'
                        }}>
                        <input 
                            type="file" 
                            id="customFile" 
                            onChange={onChange} 
                            style={{display: 'none'}}
                        />
                            <motion.p
                                // animate={{
                                //     color: 'rgba(255, 255, 255, 0)'
                                // }}
                                // whileHover={{
                                //     color: 'rgba(255, 255, 255, 1)'
                                // }}
                            >
                                Upload
                            </motion.p>
                    </motion.label>
                </div>
            </form>
        </div>
    )
}

export default Form;