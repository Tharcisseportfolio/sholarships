// Code for Navbar component
import { RiMenu3Line,RiCloseLine } from 'react-icons/ri';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { graduationIcon } from '../../fonts/FontAwesome';
import './Navbar.css'

// we are using BEM naming convention for class names
// which is Block Element Modifier

//menu component function
const Menu =() => {

  return(
    <>
    <p><Link to="/">Home</Link></p>
    <p><Link to="college">Colleges</Link></p>
    <p><Link to="opportunities">Opportunities</Link></p>
    </>

  )
}


// const nav bar component function
const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)
  return (

    <div className='navbar'>

      <div className='navbar-links'>

        <div className='navbar-links_logo'>
            <h1>{graduationIcon}edFree</h1>
        </div>

        <div className='navbar-links_container'>
          <Menu />
        </div>

        <div className='navbar-sign'>
          <p>Sign in</p>
          <button type='button'>Sign up</button>
        </div>

        <div className='navbar-menu'>
          {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={()=>setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={()=>setToggleMenu(true)} />
          }

          {toggleMenu && (
            <div className='navbar-menu_container scale-up-center'>
              <Menu />

              <div className='navbar-menu_container-links-sign'>
              <p>Sign in</p>
              <button type='button'>Sign up</button>

        </div>
            </div>
          )}
          
        </div>


      </div>      
    </div>
  )
}

export default Navbar