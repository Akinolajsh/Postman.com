import {createBrowserRouter} from "react-router-dom"
import Layout from "../components/common/Layout"
import LandingPage from "../pages/LandingPage"

export const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <LandingPage/>
            }
        ]
    }
])