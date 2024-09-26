
import { Outlet } from "react-router-dom";
import Nav from "../components/Navbar";


export default function MainLayout() {
  return (
    <div className=" bg-slate-50">
      <Nav />
      <Outlet />
  
    </div>
  )
}