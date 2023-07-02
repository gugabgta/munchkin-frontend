import * as React from "react"
import * as ReactDOM from "react-dom/client"
import * as Pages from './routes/Exports'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { io } from "socket.io-client";

// const socket = io('http://localhost:3000');
function App() {
    const [socket, setSocket] = React.useState(0)


    // socket.on("connect", () => {
        // console.log(`connected to ${socket}`)
        // const name = window.prompt('Enter your name')
        // socket.emit("join", name ?? "Anonymous", res => {
        //     received.innerHTML += `<p>${res.id}</p>`
        // })
    // });
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
            element: <Pages.Lobby connect={ setSocket } socket={ socket }/>,
            errorElement: <Pages.ErrorPage />,
        },
        {
            path: "/debug",
            element: <Pages.Debug />,
            errorElement: <Pages.ErrorPage />,
        },
    ])

    return (
        <RouterProvider router={router} />
    )
}



ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
