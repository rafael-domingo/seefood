import React from 'react';
import { motion } from 'framer-motion';

function Form({ onChange, onSubmit }) {
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

export default Form;