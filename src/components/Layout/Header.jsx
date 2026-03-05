import Navbar from "./Navbar"
import logo from "../../assets/images/logogilgalsin.png"

function Header() {
    return (
        <>
            <div className="slogan">
                <div className="container header-content">

                    <p>Experiencias que marcan nuevos comienzos</p>
                    <a href="">
                        <button className="booking">
                            Quiero reservar
                        </button>
                    </a>
                </div>
            </div>

            <header className="header">
                <div className="container header-content">
                    <img src={logo} alt="Gilgal Tours Logo" className="logo"/>
                    <Navbar/>
                </div>
            </header>
        </>
    )
}

export default Header