import './Menu.scss'

const Menu = () => {
    return (
        <div className="Menu">
            {/* <h1>Munchkin</h1> */}
            <div className="button-collumn">
                <a className="menu-button" href='/game'>Jogar</a>
                <a className="menu-button" href='/lobby'>Lobby</a>
                <a className="menu-button" href='/debug'>Debug</a>
            </div>
        </div>
    )
}

export default Menu
