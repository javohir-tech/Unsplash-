
import {createContext} from 'react'

export const GlobalContext  = createContext()

const colors = [
    {
        item:"#4C4B16"
    },
    {
        item:"#4CC9FE"
    },
    {
        item:"#C62E2E"
    }
]

export function GlobalContextProvider({children}){
    return <GlobalContext.Provider value={{colors}}>
        {children}
    </GlobalContext.Provider>
}