// custom react hooks 
import {useGlobalContext} from '../Hooks/useGlobalContext' 

export default function Home() {
  const { colors, dispatch } = useGlobalContext()

  const changeBgColor = (color) => {
    console.log(color)
    dispatch({type: "BG_COLOR_CHANGE", payload: color})
  }
  return (
    <div className='container mx-auto'>
      <div className='flex gap-3 justify-end mt-6'>
        {colors.map((color) => (
          <button onClick={() => changeBgColor(color)} key={color} className='w-6 h-6' style={{ backgroundColor: color }}></button>
        ))}
      </div>
    </div>
  )
}
