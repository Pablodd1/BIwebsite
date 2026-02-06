import { addOne } from "lib/cart/cart.actions";
import AddToContainer from "My_UI/cart/addToContainer";
import GetFinalPrice from "My_UI/getFinalPrice";
import Image from "next/image";
import Link from "next/link";


export default function ProductItem({ item, isSlides = false }) {
    return (
        <li className={`${isSlides ? 'embla__slide' : ''} overflow-hidden grid grid-rows-[17rem_auto_4rem_auto] gap-y-2 rounded-xl shadow-md shadow-gray-400 hover:shadow-lg hover:translate-y-1.5 ease-in transition-all duration-300 m-5`}>
            <Link href={`/products/${item.id}`} className='   relative h-full w-full'>
                <Image
                    fill
                    aria-label={`Go To product with ID ${item.id}`}
                    src={item.image || '/raster/product.jpg'}
                    alt={item.name || 'Product image '}
                    className=" object-contain object-center "
                />
            </Link>
            <div className="text-lg font-bold w-11/12 mx-auto ">
                <GetFinalPrice
                    basePrice={item.basePrice}
                    discountPercent={item.discountPercent}
                    className=' text-black bg-primary shadow shadow-secondary/75 px-2 rounded-md tracking-wide font-mono'
                />
            </div>
            <Link href={`/products/${item.id}`} aria-label={`Go To product with ID ${item.id}`}>
                <p className="text-md text-gray-800 font-semibold my-1 w-11/12 mx-auto tracking-wide ">{item.name}</p>
            </Link>
            <AddToContainer
                item={{
                    id: item.id,
                    dimensions: item.dimensions,
                    price: item.basePrice
                }}
            />
        </li>
    )
}