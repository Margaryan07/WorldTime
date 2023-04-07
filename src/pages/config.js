import AuthLayouth from "../layouth/AuthLayouth"
import DefaultLayouth from "../layouth/DefaultLayouth"
import LogIn from "./LogIn"

const config = [

    {
       element: <LogIn />,
       path: "/login",
       Layouth: AuthLayouth
    }
]


export default config