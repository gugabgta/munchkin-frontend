import * as React from "react"
import * as ReactDOM from "react-dom/client"
import Menu from "./routes/Menu"
import ErrorPage from "./ErrorPage"
import Game from "./routes/Game"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Menu />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/game",
        element: <Game />,
        errorElement: <ErrorPage />,
    },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
