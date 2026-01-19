'use client'
import { addOne } from "lib/cart/cart.actions";


export default function AddToContainer({ itemID, isProductPage = false }) {
    return (
        <button
            onClick={() => addOne(itemID)}
            className={`
                ${isProductPage
                    ? 'w-fit py-2.5 h-fit px-5 mx-auto rounded-md'
                    : 'w-11/12 h-fit px-2 mx-auto rounded-xl'
                }
             bg-black text-white  hover:bg-secondary transition-all duration-300 ease-in cursor-pointer my-2 py-2 text-center `} >
            Add To Container
        </button>
    )
}