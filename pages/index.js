import Link from 'next/link';
import Router from 'next/router';
import {FaSearchDollar} from 'react-icons/fa';
import {GiBurningTree} from 'react-icons/gi';
import {MdContacts} from 'react-icons/md';
import {FaQuestion} from 'react-icons/fa';
import {MdTouchApp} from 'react-icons/md';
import './index.css'

function ClickIndex(){

    document.querySelector("#mainapp").style.right = "-100%";
    setTimeout(function(){
        Router.push("/ChatPage");
    }, 1000)
}


const Index = () => <div id="mainapp">
    <div onClick={ClickIndex}>Index</div>
    <FaSearchDollar />
    <Link href="/ChatPage"><button><GiBurningTree size="20px" color="#ABC" />Chats!</button></Link>
    <Link href="/Contact"><button><MdContacts size="20px" color="blue" /> Contact page</button></Link>
    <Link href="/About"><button><MdTouchApp size="20px" color="pink" />About</button></Link>
    <Link href="/faq"><button><FaQuestion size="20px" color="red" />FAQ</button></Link>
</div>

export default Index;