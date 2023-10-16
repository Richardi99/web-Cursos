import { useState } from 'react'
import '../assets/Styles/Navbar.css'
import '../assets/Styles/NavbarResponsive.css'

export function Navbar() {

    const [menuOpen, setmenuOpen] = useState(false)

    //FUNCION PARA CAMBIAR EL ESTAOD DEL MENU
    const toogleMenu = () => {
        setmenuOpen(!menuOpen);
    }

    const getMenuOpen = () => {
        return menuOpen ? "open" : ""
    }
    return (
        <header className="nav">
            <div className='nav-container'>    
                <div className="nav-content-img" >
                    <img src="https://img.freepik.com/vector-premium/plantilla-diseno-logotipo-educacion-inteligente_145155-2117.jpg" alt="Logo" 
                    className="nav-img"/>
                </div>
                    <div className={`nav-links ${getMenuOpen()}`}>
                        <a href="#">Cursos</a>
                        <a href="#">Diplomas</a>
                        <a href="#">Certificados</a>
                        <a href="#">Guía Virtual</a>
                    
                        <div className="nav-search">
                            <input 
                            type="text"
                            id='search' 
                            placeholder="Buscar..."
                            /* onChange={handleSearchChange} */
                            />
                        </div>
                    
                    <div className="nav-button">
                        <button>Inscribirse</button>
                    </div>
                </div>
                
                <div className="nav-menu" >
                <img src="src/assets/img/ic-menu.png"  alt="Icon" 
                    className={`nav-img-icon `}
                    onClick={toogleMenu}/>
                </div>
            </div>
        </header>
    )
}