import './Lobby.scss'

export interface Props {
    name?: string;
}

const Lobby = ({name}: Props) => {
    return (
        <div>
            { name ?? 'Lobby' }
        </div>
    )
}

export default Lobby
