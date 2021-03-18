import React from 'react';
import { motion } from 'framer-motion';

import rice from '../../assets/asian.png';
import egg from '../../assets/breakfast.png';
import fries from '../../assets/fastfood.png';
import chicken from '../../assets/friedchicken.png';
import hamburger from '../../assets/hamburger.png';
import pizza from '../../assets/pizza.png';
import seafood from '../../assets/seafood.png';
import tacos from '../../assets/tacos.png';
import vegan from '../../assets/vegan.png';
import vegetarian from '../../assets/vegetarian.png';


function Food() {
    const imgStyle = {
        margin: '20px',
    }

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '100%'
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        } 
    }

    const imgVariants = {
        hidden: { opacity: 0 },
        show: { 
            opacity: 1,
            scale: [1,2,1],
        }
    }
    return (
        <motion.div 
            style={containerStyle}
            variants={containerVariants}
            initial="hidden"
            animate="show"
        >
            <motion.img src={rice} style={imgStyle} variants={imgVariants} drag={true} dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0}}/>
            <motion.img src={egg} style={imgStyle} variants={imgVariants}/>
            <motion.img src={fries} style={imgStyle} variants={imgVariants}/>
            <motion.img src={chicken} style={imgStyle} variants={imgVariants}/>
            <motion.img src={hamburger} style={imgStyle} variants={imgVariants}/>
            <motion.img src={pizza} style={imgStyle} variants={imgVariants}/>
            <motion.img src={seafood} style={imgStyle} variants={imgVariants}/>
            <motion.img src={tacos} style={imgStyle} variants={imgVariants}/>
            <motion.img src={vegan} style={imgStyle} variants={imgVariants}/>
            <motion.img src={vegetarian} style={imgStyle} variants={imgVariants}/>
        </motion.div>
    )
}

export default Food;
