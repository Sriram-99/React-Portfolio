import React from 'react'
import css from './Hero.module.scss'
import {motion} from 'framer-motion'
import {staggerContainer,fadeIn, slideIn} from '../../utils/motion'
function Hero(){
   return <section className={`paddings ${css.wrapper}`}>
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once:false,amount:0.25}}
     className={`innerWidth ${css.container}`}>
        {/* upperelements */}
       <div className={`${css.upperElements}`}>

        <motion.span 
        // we given motion to container but to make it work we has to give its childrens how to do motion(variant)
        variants={fadeIn("right",'tween',0.2,1)}

        className= "primaryText">Hey There,<br/> I'm Sriram</motion.span>

        <motion.span 
        variants={fadeIn("left",'tween',0.4,1)} className='secondaryText'>FULL STACK DEVELOPER </motion.span>
       </div>
     
      {/* person image */}
        <motion.div 
        variants={fadeIn("up",'tween',0.3,1)}
        className={css.person}>
            <motion.img
             variants={slideIn("up",'tween',0.5,1.3)}
             src='./person.png' alt=""/>
        </motion.div>
        {/* email  */}
        <motion.a 
        variants={fadeIn("right",'tween',0.4,1)}
         className={css.email} href="mailto:divvisatyasriramsriram815522@gmail.com">divvisatyasriramsriram815522@gmail.com</motion.a>

        {/* lower elements */}
       <div className={css.lowerElements}>
        <motion.div 
        variants={fadeIn("right",'tween',0.2,1)}
         className={css.experience}>
            <div className= "primaryText">250+</div>
            <div className="secondaryText">
                <div>
                    DSA Problems
                </div>
                <div>
                   solved
                </div>
            </div>
        </motion.div>
        <motion.div
        variants={fadeIn("left",'tween',0.4,1)}
         className={css.certificate}>
           <img src='./certificate.png' alt=""/>
           <span>CERTIFIED PROFATIONAL</span>
           <span>FULL STACK DEVELOPER</span>
        </motion.div>
       </div>


    </motion.div>
   </section>
}
export default Hero