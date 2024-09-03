import { toast } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import{add,remove}from"../redux/Slices/cartSlice";


const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("item remove from item");
  };
  return (
    <div 
    className="flex flex-col items-center justify-between hover:scale-110
     transition  duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline">
      <div>
        <p className=" text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {post.title}</p>
      </div>
      <div>
        <p 
        className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
      </div>
      <div className="h-50px">
        <img src={post.image}  className="h-full w-full"/>
      </div>
      <div className="flex justify-between gap-12">
      <div>
        <p className="text-green-600 font-semibold items-center w-full mt-5">
          ${post.price}
          </p>
      </div>
      {cart.some((p) =>p.id===post.id) ? (
        <button
        className=" text-gray-700 border-2 rounded-full font-sizebold text[12px] 
        p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition  
        duration-300 ease-in gap-3 "
        onClick={removeFromCart}>RemoveItem</button>
      ) : (
        <button 
        className=" text-gray-700 border-2 rounded-full font-sizebold text[12px] 
        p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition  
        duration-300 ease-in gap-3 "
        onClick={addToCart}>AddToCart</button>
      )}
      </div>
    </div>
  );
};

export default Product;
