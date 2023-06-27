const socket = io("http://localhost:3000")

// socket.on("disconnect", () => {
//     console.log("disconnected")
// });

document.addEventListener("DOMContentLoaded", () => {
    const send = document.querySelector("#send")
    const cards = document.querySelector("#cards")
    const textarea = document.querySelector("#textarea")
    const received = document.querySelector("#received")

    send.addEventListener("click", () => {
        console.log('clicked')
        // socket.emit("start", {
        //     'campo': textarea.value,
        //     'valor': 'um outro valor',
        //     'inteiro': 12345
        // })
        socket.emit("join", name ?? "Anonymous", uuid => {
            received.innerHTML += `<p>${uuid}</p>`
        })
    })

    cards.addEventListener("click", () => {
        console.log(socket.id)
        socket.emit("cards", socket.id, cards => {
            received.innerHTML += `<p>${cards}</p>`
        })
    })


    socket.on("server_response", response => {
        console.log(response)
        received.innerHTML += `<p>${response}</p>`
    })

    socket.on("connect", () => {
        console.log(`connected to ${socket.id}`)
        const name = window.prompt('Enter your name')
        socket.emit("join", name ?? "Anonymous", res => {
            received.innerHTML += `<p>${res.id}</p>`
        })
    });
})
