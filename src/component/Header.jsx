import React, { useContext, useEffect, useState } from 'react';
//import sidebar context
import { SidebarContext } from '../context/SidebarContext';
//import cart context
import { CartContext } from '../context/CartContext';
//import icons
import {BsBag} from 'react-icons/bs';
// import Link
import { Link } from 'react-router-dom';
//import logo
import Hero from '../img/hero.png'

function Header() {
  //use context
  const {isOpen, setIsOpen} = useContext(SidebarContext);
  const {itemAmount} = useContext(CartContext);
  //header state
  const [isActive, setIsActive] = useState(false);
  //event listener
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>      
      <div className='container mx-auto flex items-center justify-between h-full'>
        {/* logo */}
      <Link to={'/'}>
        <div>
          <img className='w-[80px] rounded-lg' src={Hero} alt="logo" />
        </div>
      </Link>
      {/* cart */}
      <div onClick={()=> setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
        <BsBag className='text-2xl'/>
        <div className='absolute -right-3 -bottom-2 text-[12px] w-[18px] text-gray-700 rounded-full flex justify-center items-center'>{itemAmount}</div>
      </div>
      </div>
    </header>
  )
}

export default Header