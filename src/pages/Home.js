import React from 'react'
import Containt from '../components/Layout/Containt'
import { Link } from 'react-router-dom'
import '../styles/home.css'
import {useTypewriter,Cursor} from 'react-simple-typewriter'


const Home = () => {
  const [text] = useTypewriter({
    words: [' Hungry!',' Foody!'],
    loop:{},
    typeSpeed: 100,
    deleteSpeed: 50,
  })
  return (
    <Containt>
       <div className = 'home'>
        <div className='nbox'>
            <div className='headerpart' >
            <h1> Feeling  
              <span style={{fontWeight: 'bold',color:'orange'}}>
                {text}
              </span>
              <span>
                <Cursor/>
              </span>
             </h1>
            <br/>
            <p> Why don't you try our best, delicious and healthy food</p>
             <Link to={'/menu'}>
                <button className='btn'> Order Now </button>
             </Link>
            </div>
        </div>
       </div>
    </Containt>
  )
}

export default Home