import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalamount] = useState(0);

  useEffect(() => {
    setTotalamount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div className=" ">
      {cart.length > 0 ? (
        <div className="flex justify-around items-start mt-5 px-4 ">
          <div className="">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} />;
            })}
          </div>
          <div className="flex  flex-col justify-center gap-2  mt-[10%] items-start">
            <div>
              <div className="text-[40px] text-center font-semibold text-black font-serif">Your Cart</div>
              <div className="text-[20px]  font-bold text-gray-900 font-serif">Summary</div>
              <p className="text-slate-700 font-serif font-bold text-xl">
              Total Items:
                <span className="text-slate-800 ml-2 text-xl">{cart.length}</span>
              </p>
            </div>
            <div>
              <p  className="text-xl  text-slate-700 font-serif font-bold">Total Amount:
                <span className="text-slate-800 ml-2 text-2xl">${totalAmount}</span></p>
              <Link to="/">
                <button className=" px-5 py-3 mt-3 border-solid border-2 text-lg border-indigo-600 rounded-md shadow-lg shadow-indigo-500/50 bg-indigo-500 text-white  hover:bg-violet-600 active:bg-violet-700 ocus:outline-none focus:ring focus:ring-violet-300 ">CheckOut Now</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center mt-20  flex-col">
          <h1 className="text-[50px] text-slate-950">cart Empty hai</h1>
          <Link to={"/"}>
            <button className=" px-5 py-3 mt-3 border-solid border-2 text-lg border-indigo-600 rounded-md shadow-lg shadow-indigo-500/50 bg-indigo-500 text-white  hover:bg-violet-600 active:bg-violet-700 ocus:outline-none focus:ring focus:ring-violet-300 ">shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
