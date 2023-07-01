export interface Props {
    name?: string;
}

const Game = ({name}: Props) => {
    return (
        <div>
            { name ?? 'Gustavo' }
        </div>
    )
}

export default Game
