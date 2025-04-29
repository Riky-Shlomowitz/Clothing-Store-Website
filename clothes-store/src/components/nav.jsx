import { Link } from "react-router-dom"
import {useSelector } from "react-redux"
export const Nav =()=>{
  const user =useSelector(s => s.dataUser.user) 
  const manager =useSelector(s => s.dataUser.manager)
  const currentUser =useSelector(d=>d.dataUser.curentUser)
    return<>
    <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">clothes</a>
      </div>
      <ul className="nav navbar-nav">
      
        <li><Link to={"home"}>Home</Link></li>
        <li><Link to={"login"}>log in</Link></li>
        <li><Link to={"join"}>join</Link></li>
      

        {manager&&<li><Link to={"listClothes"}>allClothes</Link></li>}
        {manager&&<li><Link to={"category"}>category</Link></li>}
        {manager&&<li style={{color:"white"}}><a>manager</a></li>}

        {user&&<li><Link to={"ezor"}>Private area</Link></li>} 
        {user&&<li><Link to={"cart"}>Shoppin cart</Link></li>} 
        {user&&<li style={{color:"white"}}><a>{currentUser.name}</a></li>}
        
      </ul>
      <form className="navbar-form navbar-left">
        <div className="form-group">
           <input type="text" className="form-control" placeholder="Search"></input> 
           
        </div>
      </form>
    </div>
  </nav>
  </>
}