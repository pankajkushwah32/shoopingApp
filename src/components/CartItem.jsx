import { toast } from "react-hot-toast";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item remove from Cart");
  };
  return (
    <div >
      <div className="flex  gap-10 justify-evenly  items-center  mt-10">
        <div>
          <img src={item.image} className="w-[350px]" />
        </div>
        <div className="flex flex-col gap-2 px-3 ">
          <h1 className=" text-2xl  font-serif font-semibold  text-gray-900">{item.title}</h1>
          <h1 className=" flex flex-wrap w-[500px] text-lg font-medium text-gray-700 ">
            {item.description}
          </h1>
          <div className="flex  justify-start gap-12 items-center">
            <p className="text-gray-800  text-2xl font-extrabold font-serif ">
              price:
              <span className="text-xl text-gray-600 ml-2">${item.price}</span>
              
            </p>
            <div
              onClick={removeFromCart}
              className=" flex gap-2 justify-center items-center px-5 py-3 mt-3 border-solid border-2 text-xl border-indigo-600 rounded-md shadow-lg shadow-indigo-500/50 bg-indigo-500 text-white  hover:bg-violet-600 active:bg-violet-700 ocus:outline-none focus:ring focus:ring-violet-300 cursor-pointer "
            >
              <FcDeleteDatabase className=" text-2xl   " /> DeleteItem
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
