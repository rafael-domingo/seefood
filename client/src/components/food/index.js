import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

import Item from '../item';

function Food({show}) {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        if(!loading) {
        }
    }, [loading])

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
                delayChildren: 1.5,
            }
        } 
    }

    const imageArray = [
        {
            image: rice,
            select: false
        },
        {
            image: egg,
            select: false
        },
        {
            image: fries,
            select: false,
        },
        {
            image: chicken,
            select: false
        },
        {
            image: hamburger,
            select: true
        },
        {
            image: pizza,
            select: false
        },
        {
            image: seafood,
            select: false
        },
        {
            image: tacos,
            select: false
        },
        {
            image: vegan, 
            select: false
        },
        {
            image: vegetarian, 
            select: false
        },
    ];
    
    const arrayLength = imageArray.length;

    return (
        <AnimatePresence exitBeforeEnter>
            { show && (
                <motion.div 
                style={containerStyle}
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                    {  
                        imageArray.map((item, i) => (
                            <Item item={item} index={i} key={`${item}${i}`} arrayLength={arrayLength}/>
                        )) 
                    }
                </motion.div>
            )
            }
        </AnimatePresence>

      
        
    )

    
}

export default Food;
