import AuthLayouth from "../layouth/AuthLayouth"
import DefaultLayouth from "../layouth/DefaultLayouth"
import LogIn from "./LogIn"
import Home from "./Home"
import Register from "./Register"

const config = [

    {
       element: <LogIn />,
       path: "/login",
       Layouth: AuthLayouth
    },

    {
        element: <Home />,
        path: "/",
        Layouth: AuthLayouth
     },
     
     {
      element: <Register />,
      path: "/register",
      Layouth: AuthLayouth
   }
]


export default config