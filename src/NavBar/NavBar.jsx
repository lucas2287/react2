import cartwitget from '../CartWitget/cartwitget'
import './NavBar.css'

const Navbar = () => {
    return (
        <header>
            <h1>Tienda Mia</h1>
            <nav>
                <ul>
                    
                <li> Celulares</li>
                <li>Notebooks</li>
                <li>Tablets</li>
            </ul>
            </nav>
           
            <cartwitget/>
        </header>
    )
}

export default NavBar 