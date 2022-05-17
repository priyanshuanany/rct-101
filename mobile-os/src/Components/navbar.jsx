import React from 'react';
import '../Styles/navbar.css';

const Navbar = () => {
    const nav = [ "Services", "Projects", "About"];
  return (
    <div>
      <div className='navbar'>
          <div className='logo'>LOGOBAKERY</div>
          <ul className='links'>
              {nav.map((e)=>{
                  return (
                   <li className='li'>
                      <Header arr={e}/>
                  </li>
                  );
              })}
          </ul>
          <button className='button'>Contact</button>

      </div>
    </div>
  )
}
function Header(props){
    return <p>{props.arr}</p>
}

export default Navbar
