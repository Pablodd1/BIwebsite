'use client'
import { addOne } from "lib/cart/cart.actions";
import { Loader } from "lucide-react";
import { Suspense, useState } from "react";
import ContainerModal from "./selectContainer";


export default function AddToContainer({ item, isProductPage = false,callback }) {
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => {
        setShowModal(prev => {
            const next = !prev;
            if (callback) callback(next);
            return next;
        });
    }
    return (
        <>
            <button
                onClick={toggleModal}
                // onClick={() => addOne(item.ID)}
                className={`
                ${isProductPage
                        ? 'w-fit py-2.5 h-fit px-5 mx-auto rounded-md'
                        : 'w-11/12 h-fit px-2 mx-auto rounded-xl'
                    }
             bg-black text-white  hover:bg-secondary transition-all duration-300 ease-in cursor-pointer my-2 py-2 text-center `} >
                Add To Container
            </button>
            {/* <Suspense fallback={<Loader />} > */}
                <ContainerModal {...{ showModal, toggleModal, item }} />
            {/* </Suspense> */}
        </>
    )
}