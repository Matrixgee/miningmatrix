import {createBrowserRouter} from "react-router-dom"
import HomeLayout from "../Layout/HomeLayout"

export const MainRoute = createBrowserRouter ([
    {
        path: "",
        element: <HomeLayout/>
    }
])