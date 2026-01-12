import { addOne } from "lib/cart/cart.actions";
import GetFinalPrice from "My_UI/getFinalPrice";
import Image from "next/image";
import Link from "next/link";


export default function ProductItem({ item, isSlides = false }) {
    return (
        <li className={`${isSlides ? 'embla__slide' : ''} grid grid-rows-[17rem_auto_4rem_auto] gap-y-2 rounded-xl shadow-md shadow-gray-400 hover:shadow-lg hover:translate-y-1.5 ease-in transition-all duration-300 m-5`}>
            <Link href={`/products/${item.ID}`} className='relative'>
                <Image
                    fill
                    src={item.image.url || '/raster/product.jpg'}
                    alt={item.name || 'Product image '}
                    className=" object-contain p-2"
                />
            </Link>
            <div className="text-lg font-bold w-11/12 mx-auto ">
                <GetFinalPrice
                    basePrice={item.basePrice}
                    discountPercent={item.discountPercent}
                    className=' text-primary bg-secondary px-2 rounded tracking-wide font-mono'
                />
            </div>
            <Link href={`/products/${item.ID}`}>
                <p className="text-md text-gray-800 font-semibold my-1 w-11/12 mx-auto tracking-wide ">{item.name}</p>
            </Link>
            <button onClick={() => addOne(item.ID)} className=' bg-primary text-white w-11/12 h-fit mx-auto rounded-xl hover:bg-black transition-all duration-300 ease-in cursor-pointer my-2 py-2 text-center ' >
                Add To Cart
            </button>
        </li>
    )
}