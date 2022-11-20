import React, { useContext } from "react";
import { CartContext } from "../ContextApi/Context";

export const Cart = () => {
  const globelState = useContext(CartContext);
  const state = globelState.state;
  const dispatch = globelState.dispatch;
  return (
    <div>
      {state.map((item, index) => (
        <div className="flex">
          <div
            className="flex mx-11 my-3 box-conten border-2 border-indigo-200 rounded-md p-2"
            key={item.id}
          >
            <div className="mr-20">
              <img
                className="rounded-md object-fill h-40 w-40"
                src={item.image}
                alt=""
              />
            </div>

            <div className="mr-20 pt-5">
              <div className="text-lg font-medium text-gray-900">
                {item.title}
              </div>
              <div className="text-gray-500">{item.shipping}</div>
              <div className="flex">
                <div className="flex flex-1">
                  <button
                    onClick={() =>
                      dispatch({ type: "INCREASE", payload: item })
                    }
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-6 border border-blue-500 hover:border-transparent rounded"
                  >
                    +
                  </button>
                  <div className="text-center	text-2xl pt-1">
                    {item.quantity}
                  </div>
                  <button
                    onClick={() => {
                      if (item.quantity > 1) {
                        dispatch({ type: "DECREASE", payload: item });
                      } else {
                        dispatch({ type: "REMOVE", payload: item });
                      }
                    }}
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-6 border border-blue-500 hover:border-transparent rounded"
                  >
                    -
                  </button>
                </div>

                <div className="">
                  <button
                    onClick={() => dispatch({ type: "REMOVE", payload: item })}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-5 text-4xl font-medium text-gray-900">
              ₹{item.quantity * item.price}
            </div>
          </div>

          <div className="flex-1">demo</div>
        </div>
      ))}

      {state.length > 0 && <div></div>}
    </div>
  );
};
