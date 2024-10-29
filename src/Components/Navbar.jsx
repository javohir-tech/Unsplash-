import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../Context/globalContext'

function Navbar() {

  const {colors} = useContext(GlobalContext)
console.log(colors);

  return (
    <>
      <nav className='bg-slate-200'>
        <div className='container mx-auto flex justify-between py-5'>
          <div>
           <NavLink className={"text-lg"} to={"/"}>LOGO</NavLink> 
          </div>
          <ul className='flex gap-10 px-3'>
            <li> <NavLink className={"text-lg"} to={"/"}>Home</NavLink> </li>
            <li> <NavLink className={"text-lg"} to={"/about"}>About</NavLink> </li>
            <li> <NavLink className={"text-lg"} to={"/contact"}>Contact</NavLink> </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
