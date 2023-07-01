import './Lobby.scss'

export interface Props {
    name?: string;
}

const Lobby = ({name}: Props) => {
    return (
        <div className="Lobby">
            <h1>Lobby</h1>
            <div className="input-group">
                <div className="row">
                    <label className="player-name-label" htmlFor="player-name">Player Name:</label>
                    <input type="text" name="player-name" className="player-name" />
                </div>
                <div className="row">
                    <label htmlFor="server-url">Server:</label>
                    <input type="text" name="server-url" className="server-url" />
                    <button className="connect">Connect</button>
                </div>
            </div>
            <textarea className="players-lobby" readOnly>opa, suave meu bom?</textarea>
        </div>
    )
}

export default Lobby
