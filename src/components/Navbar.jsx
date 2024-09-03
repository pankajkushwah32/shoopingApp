import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from './logo.png'

const Navbar = () => {
  const {cart}=useSelector((state)=>state);

  return (
    <div>
      <div className=" flex justify-between items-center h-20 max-w-6xl mx-auto">
      <NavLink to="/">
        <div className="ml-5">
          <img src={logo} className=" bg-cover w-[100pxs] h-[50px]"/>
        </div>
      </NavLink>

       <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
        <NavLink to="/">
          <p className="text-2xl">Home</p>
        </NavLink>

        <NavLink to="/cart   ">
          <div className="relative">
            <FaShoppingCart className="text-3xl"/>
            {cart.length>0 &&
            <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
              {cart.length}</span>
            }
          </div>
        </NavLink>
         
      </div>
      </div>
    </div>
  );
};

export default Navbar;
