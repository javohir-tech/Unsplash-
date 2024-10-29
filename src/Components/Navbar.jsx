import { NavLink } from 'react-router-dom'

//custom react hooks
import { useGlobalContext } from '../Hooks/useGlobalContext';

function Navbar() {

  const {colors, bgColorChange} = useGlobalContext()
console.log(colors);

  return (
    <>
      <nav className='bg-slate-200' style={{backgroundColor: bgColorChange ? bgColorChange : ""}}>
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
