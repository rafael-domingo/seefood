import React from 'react';
import { motion, useAnimation } from 'framer-motion';

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
    const [loading, setLoading] = React.useState(true);
    const controls = useAnimation();

    React.useEffect(() => {
        if(!loading) {
            controls.stop()
        }
    }, [loading])

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
        hidden: { opacity: 1 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            }
        } 
    }

    controls.start( i => ({ 
            opacity: 1,
            scale: [1,2,1],
            transition: {
                duration: 0.5,
                delay: i * 0.1,
                repeat: Infinity,
                repeatDelay: 4
            }
        })
    )

    const imageArray = [
        rice,
        egg,
        fries,
        chicken, 
        hamburger, 
        pizza,
        seafood,
        tacos,
        vegan,
        vegetarian,
        rice,
        egg,
        fries,
        chicken, 
        hamburger, 
        pizza,
        seafood,
        tacos,
        vegan,
        vegetarian
    ];
    
    return (
        <motion.div 
            style={containerStyle}
            variants={containerVariants}
            initial="hidden"
            animate="show"
        >
            {  
                    imageArray.map((item, i) => (
                        <motion.img 
                            src={item} 
                            custom={i} 
                            style={imgStyle} 
                            animate={controls}
                            onAnimationComplete={definition => {
                                console.log('Completed animating', definition)
                            }}
                        />    
                    )) 
            }
            {/* <button onClick={() => {
                console.log(`loading: ${loading}`)
                setLoading(!loading)}
                }/> */}
        </motion.div>
        
    )

    
}

export default Food;
