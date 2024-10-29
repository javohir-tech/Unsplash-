import { useContext } from 'react'
import { GlobalContext } from '../Context/globalContext'

export function useGlobalContext() {
    const context = useContext(GlobalContext)

    if(!context){
        throw new Error (" useGlobalContext GlobalContextProvider ichida bolishi kerak ")
    }
    return context
}