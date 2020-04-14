import CustomButton from '../../comps/CustomButton';
import React, { useEffect } from 'react';
import Header from '../../comps/Header';
import './about.css';
import {FaSmileBeam} from 'react-icons/fa'



const About = () => {
    useEffect(() => {
        setTimeout(() => {
            document.querySelector("#about").style.left = 0;
        }, 50);
    }, []);

    return <div id="about">
        <Header text="About" fontSize="44" />
        <CustomButton text="Learn More" />
        <FaSmileBeam color="DAD" size="40px" />  About Page
</div>
}

export default About;