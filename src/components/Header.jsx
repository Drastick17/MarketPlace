import {useState} from 'react'
import Logo from '../logo.png'

const Header = () => {
  const [open, setOpen] = useState(false)
  const [y, setY] = useState(0)
  //console.log(y)
  window.onscroll = function() {
    scroll = window.scrollY;
    setY(scroll)
    if(y > Number(window.innerHeight)-200){
      setOpen(true)
    }
    if(y <= 168) {
      setOpen(false)
    }
  }
  return (
    <header className={`w-screen h-auto px-[50px] top-0 left-0 z-10 bg-white ${open?'-translate-y-full':'translate-y-0'} fixed duration-300 overflow-x-hidden`}>
    <div className='w-full h-[5.5rem] flex justify-between items-center align-middle'>
      <div className=''>
        <label 
          className='text-gray-400 leading-3'
          htmlFor="search">Search...</label><br/>
        <input 
          id="search"
          className='w-[220px] border-x-0 border-t-0 outline-none border-b focus:border-b-2 border-light-red py-1' />
      </div>
      <div className='hidden h-full text-5xl text-light-red hover:text-red-700 lg:flex items-end justify-center p-1 text-center font-thin' style={{fontFamily:'didot-w02-italic,serif', fontStyle:'oblique'}}>
        <a href=''>Adalane.</a>
      </div>    
      <div className='flex flex-shrink-0 flex-row gap-8 text-gray-400 justify-end items-center'>
      <a href=''><i className="fa-solid fa-bag-shopping"></i></a>
      <a href=''>Login</a>

      </div>
    </div>
    <div className='hidden w-screen h-[5rem] p-3 lg:grid items-center justify-center '>
      <nav className='max-w-xl p-3 flex justify-center items-center gap-20 text-gray-400 '>
        <a className='hover:text-gray-500 ' href=''>Home</a>
        <a className='hover:text-gray-500 ' href=''>Shop All</a>
        <a className='hover:text-gray-500 ' href=''>Our Story</a>
        <a className='hover:text-gray-500 ' href=''>Contact</a>
      </nav>
    </div>
    <div>
    </div>
    </header>
  )
}

export default Header