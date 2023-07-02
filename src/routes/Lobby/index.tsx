import { Dispatch } from 'react';
import './Lobby.scss'
import { io } from "socket.io-client";

export interface Props {
    connect: any,
    socket: any,
}

const Lobby = (props: Props) => {
    function connectToServer() {
        const server_input = (document.querySelector('#server-url')! as HTMLInputElement).value
        const player_name = (document.querySelector('#player-name')! as HTMLInputElement).value
        if (server_input === '') {
            return
        }
        try {
            props.connect(io(server_input))
            setTimeout(() => {}, 1000)
            props.socket.emit("join", props.socket.id, player_name)
            listen()
        } catch (error) {
            console.error(`connection failed ${error}`)
        }
    }

    function listen() {
        const textarea = document.querySelector('.players-lobby')! as HTMLTextAreaElement
        try {
            props.socket.on("connect", () => {
                console.log(`connected to ${props.socket.id}`)
            })
            props.socket.on("lobby_state", (player_list: Array<string>) => {
                console.log('received lobby_state')
                textarea.value = ''
                player_list.forEach(player => {
                    textarea.value += `${player}\n`
                })
            });
        } catch (error) {}
    }

    return (
        <div className="Lobby">
            <h1>Lobby</h1>
            <div className="input-group">
                <div className="row">
                    <label className="player-name-label" htmlFor="player-name">Player Name:</label>
                    <input type="text" name="player-name" id="player-name" className="player-name" defaultValue="Gustavo"/>
                </div>
                <div className="row">
                    <label htmlFor="server-url">Server:</label>
                    <input type="text" name="server-url" id="server-url" className="server-url" defaultValue="http://localhost:3000"/>
                    <button className="connect" onClick={ connectToServer }>Connect</button>
                </div>
            </div>
            <textarea className="players-lobby" defaultValue="opa, suave meu bom?" readOnly></textarea>
        </div>
    )
}

export default Lobby
