import React, { useContext } from 'react'
import { GlobalContext } from '../Context/globalContext'

export default function Home() {
  const {colors}  = useContext(GlobalContext)

  return (
    <div className='flex gap-3 justify-end mt-6'>
      {colors.map((color, index)=>(
        <button key={index} className='w-6 h-6' style={{backgroundColor: color.item}}></button>
      ))}
    </div>
  )
}
