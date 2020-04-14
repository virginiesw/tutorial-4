import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import Input from '../../comps/Input';
import './faq.css';
import React, { useEffect } from 'react';
import {GoSmiley} from 'react-icons/go';

const Faq = () => {
    useEffect(()=>{
        setTimeout(()=>{
        document.querySelector("#faq").style.left = 0;
        }, 50);
    }, []);


return <div id="faq">
    <Header text="FAQ" fontSize="44" />
    <CustomButton text="ask a question" />
    <Input placeholder="questions?" />
    <GoSmiley size="50px" /> FAQ
</div>
}

export default Faq;