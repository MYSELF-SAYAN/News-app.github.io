import React, { useState } from 'react';
import "./Navbar.css"
import { Link ,useNavigate} from 'react-router-dom';
function Navbar() {
  const navigate=useNavigate();
  const [search,setSearch]=useState("")
 
  const handleSubmit=(e)=>{
    e.preventDefault();
    

    navigate("/searched/"+search)
  }
  
  return (
    <div className='Navbar'>
      <div className="NavLogo">
        <p>NEWS <span>hub</span></p>
      </div>
      <div className="NavLists">
        <ul className='NavListUl'>
          <Link className='link' to="/">
          <li className="NavListItems">TRENDING</li>
          </Link>
          <Link className='link' to="/sports">
          <li className="NavListItems">SPORTS</li>
          </Link>
          <Link className='link' to="/politics">
          <li className="NavListItems">POLITICS</li>
          </Link>
          <Link className='link' to="/entertainment">
          <li className="NavListItems">ENTERTAINMENT</li>
          </Link>
          </ul>
      </div>
      <form className="NavSearch" >
        <input type="text" placeholder="e.g. PUBG"className="NavSearchInput" 
        value={search}
        onChange={(k)=>setSearch(k.target.value)}/>
       <button onClick={handleSubmit} className="NavSearchButton">Search</button>
      </form>
    </div>
  );
}

export default Navbar;
