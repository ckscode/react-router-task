import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [active,setActive] = useState(false);
    const [toggle,setToggle] = useState(true)
    const handleClick = (e) =>{
          setActive('');
          setActive(e);
          setToggle(true)
    }
    console.log(toggle)
    return (
        <>
       <nav className="navbar sticky-top navbar-expand-lg w-100 mx-auto shadow">
  <div className="container-fluid w-75 d-flex align-items-center">
    <Link className="brand text-dark" to="/">Guvi</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" onClick={()=>{setTimeout(()=>{setToggle(false)},500)}}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={toggle?"collapse navbar-collapse m-0 ":"collapse navbar-collapse m-0 show"} id="navbarText">
        <div className='navbar-nav mx-auto mt-3' >
        <Link onClick={()=>{handleClick('all'); }} className={active==='all'?'nav-link py-1 px-3 rounded-2 active':'nav-link py-1 px-3 rounded-2'} to="/all">All</Link>
        <Link onClick={()=>handleClick('fsd')} className={active==='fsd'?'nav-link py-1 px-3 rounded-2 active':'nav-link py-1 px-3 rounded-2'} to="/fsd" >Fullstack Development</Link>
        <Link onClick={()=>handleClick('data')} className={active==='data'?'nav-link py-1 px-3 rounded-2 active':'nav-link py-1 px-3 rounded-2'} to="/data">Data Science</Link>
        <Link onClick={()=>handleClick('cyber')} className={active==='cyber'?'nav-link py-1 px-3 rounded-2 active':'nav-link py-1 px-3 rounded-2'} to="/cyber">Cyber Security</Link>
        <Link onClick={()=>handleClick('career')} className={active==='career'?'nav-link py-1 px-3 rounded-2 active':'nav-link py-1 px-3 rounded-2'} to="/career">Career</Link>
        </div>
      
    </div>
  </div>
 
</nav>
</>
    );
};

export default Navbar;