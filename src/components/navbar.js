import { Link, useLocation } from "react-router-dom"

import{ useState} from "react"
import Sidebar from "./Sidebar"
import{faHome ,faList,faCog} from "@fortawesome/free-solid-svg-icons"
export default function Navbar(){
  const[showSidebar,setShowsSidebar] = useState(false)
  const location = useLocation
  const links =[
    {
      name: "Home",
      path: "/",
      icon:faHome
    },
    {
      name:"Recipes",
      path:"/recipes",
      icon: faList
    },
    {
      name:"Settings",
      path:"/settings",
      icon:faCog
    }
  ]
  function closeSidebar() {
    setShowsSidebar(false)
    
  }
  
  
    return (
      <>
      <div className="navbar container">
      <Link to="/" className="logo">G<span>our</span>met Guru</Link>
        <div className="nav-links">
          {
            links.map(link => (
              <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>{link.name}</Link>
            ))
          }
           </div>
           <div onClick={() => setShowsSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
           </div>
        
      </div>
      { showSidebar && <Sidebar close={closeSidebar} links={links} /> }
      
      
      </>
     
      
    )
}