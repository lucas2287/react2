import cartwitget from '../CartWitget/cartwitget'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <Link to="/">
           
            <h1>Tienda Mia</h1>
            </Link>
            <nav>
                <ul>
                    
                <li> 
                    <NavLink to="/categoria/2">
                    Celulares
                        </NavLink>
                        </li>
                <li>
                    <NavLink to="/categoria/3">
                    Tablets
                    </NavLink>
                </li>
            </ul>
            </nav>
           
            <cartwitget/>
        </header>
    )
}

export default NavBar 