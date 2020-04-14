import React, { useEffect } from 'react';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import './contact.css';
import {FaSmileWink} from 'react-icons/fa'

const Contact = () => {
    useEffect(()=>{
        setTimeout(()=>{
        document.querySelector("#contactpage").style.left = 0;
        }, 50);
    }, []);

return <div id="contactpage">
    <Header text="Contact me!" fontSize="24" />
    <CustomButton text="email" />
    <FaSmileWink color="DAB" size="40px" /> Contacts 
</div>
}

export default Contact;