import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import {Home, About, Contact} from './Pages'


const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children:[
            {
                index: true,
                element: <Home/>
            },
            {
                path:"about",
                element: <About/>
            },
            {
                path:"contact",
                element: <Contact/>
            }
        ]
    }
])

export default router