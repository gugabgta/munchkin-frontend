export interface Props {
    name?: string;
}

const Debug = ({name}: Props) => {
    return (
        <div>
            { name ?? 'Debug' }
        </div>
    )
}

export default Debug
