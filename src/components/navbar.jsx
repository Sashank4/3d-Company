import '../components/navbar.css'
import { menuitems } from '../menuitems'
import {Link} from 'react-router-dom'
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink, MDBContainer} from 'mdb-react-ui-kit';
import Logo from '../Assets/logo.jpg'
const Navbar = () => {
    
  return (
    <nav className='navbarItems'>
        <img className='logoImg' alt='logoImg' src={Logo} />
        
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
            
            <MDBContainer className="serviceButton">
        <MDBDropdown>
          <MDBDropdownToggle>Services</MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem>
              <MDBDropdownLink href="#">3D design &raquo;</MDBDropdownLink>
              <ul className="dropdown-menu dropdown-submenu">
                <MDBDropdownItem className='ddsmItem'>
                  <MDBDropdownLink href="#">All 2D CAD Design</MDBDropdownLink>
                </MDBDropdownItem>
                <MDBDropdownItem className='ddsmItem'>
                  <MDBDropdownLink href="#">All 3D CAD Design</MDBDropdownLink>
                </MDBDropdownItem>
                <MDBDropdownItem className='ddsmItem'>
                  <MDBDropdownLink href="#">Product Design</MDBDropdownLink>
                </MDBDropdownItem>
                <MDBDropdownItem className='ddsmItem'>
                  <MDBDropdownLink href="#">Product Development</MDBDropdownLink>
                </MDBDropdownItem>
                <MDBDropdownItem className='ddsmItem'>
                  <MDBDropdownLink href="#">Rendering</MDBDropdownLink>
                </MDBDropdownItem>
              </ul>
            </MDBDropdownItem>

            <MDBDropdownItem>
              <MDBDropdownLink href="#">3D Printing &raquo;</MDBDropdownLink>
              <ul className="dropdown-submenu">
                <MDBDropdownItem className='ddsmItem'>
                  <MDBDropdownLink href="#">SLA</MDBDropdownLink>
                </MDBDropdownItem>
                <MDBDropdownItem className='ddsmItem'>
                  <MDBDropdownLink href="#">SLS</MDBDropdownLink>
                </MDBDropdownItem>
                <MDBDropdownItem className='ddsmItem'>
                  <MDBDropdownLink href="#">FDM</MDBDropdownLink>
                </MDBDropdownItem>
                <MDBDropdownItem className='ddsmItem'>
                  <MDBDropdownLink href="#">Host processing services</MDBDropdownLink>
                </MDBDropdownItem>
              </ul>
            </MDBDropdownItem>

            <MDBDropdownItem>
              <MDBDropdownLink href="#">CNC &raquo;</MDBDropdownLink>
              <ul className="dropdown-menu dropdown-submenu">
                <MDBDropdownItem className='ddsmItem'>
                  <MDBDropdownLink href="#">Durning</MDBDropdownLink>
                </MDBDropdownItem>
                <MDBDropdownItem className='ddsmItem'>
                  <MDBDropdownLink href="#">Milling</MDBDropdownLink>
                </MDBDropdownItem>
                <MDBDropdownItem className='ddsmItem'>
                  <MDBDropdownLink href="#">Engraving</MDBDropdownLink>
                </MDBDropdownItem>
                <MDBDropdownItem className='ddsmItem'>
                  <MDBDropdownLink href="#">Drilling</MDBDropdownLink>
                </MDBDropdownItem>
                <MDBDropdownItem className='ddsmItem'>
                  <MDBDropdownLink href="#">Tapping</MDBDropdownLink>
                </MDBDropdownItem>
              </ul>
            </MDBDropdownItem>

            <MDBDropdownItem>
              <MDBDropdownLink href="#">Manfacturing &raquo;</MDBDropdownLink>
              <ul className="dropdown-menu dropdown-submenu">
                <MDBDropdownItem className='ddsmItem'>
                  <MDBDropdownLink href="#">Injection moduling</MDBDropdownLink>
                </MDBDropdownItem>
                <MDBDropdownItem className='ddsmItem'>
                  <MDBDropdownLink href="#">Sheet metal Fabrication</MDBDropdownLink>
                </MDBDropdownItem>
              </ul>
            </MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
      </MDBContainer>
            
          
        
        </ul>
        
        
    </nav>
  )
}

export default Navbar