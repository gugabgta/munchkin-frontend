import * as React from "react"
import * as ReactDOM from "react-dom/client"
import * as Pages from './routes/Exports'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import "./main.scss"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Pages.Menu />,
        errorElement: <Pages.ErrorPage />,
    },
    {
        path: "/game",
        element: <Pages.Game />,
        errorElement: <Pages.ErrorPage />,
    },
    {
        path: "/lobby",
        element: <Pages.Lobby />,
        errorElement: <Pages.ErrorPage />,
    },
    {
        path: "/debug",
        element: <Pages.Debug />,
        errorElement: <Pages.ErrorPage />,
    },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
