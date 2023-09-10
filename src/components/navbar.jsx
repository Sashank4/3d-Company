import '../components/navbar.css'
import { menuitems } from './menuitems'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='navbarItems'>
        <h1 className='logo'>TIPPY</h1>
        <ul className='navbarMenu'>

            {menuitems.map((items,index) => {
                return(
                    <li key = {index}>
                        <Link className={items.cName} to={items.url} >
                            <i  className={items.icon}> </i>{items.title}
                        </Link>
                    </li>
                )
            })}
            
            <button className='button'>Sign Up</button>
        </ul>
    </nav>
  )
}

export default Navbar