'use client'
import { Loader, PackagePlus } from "lucide-react";
import { Suspense, useState } from "react";
import NewContainerModal from "./newContainer";


export default function AddNewContainer({ item, isProductPage = false,callback }) {
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => {
        setShowModal(prev => {
            const next = !prev;
            return next;
        });
    }
    return (
        <>
            <button
                onClick={toggleModal}
                aria-label="Add new Container"
                className={`w-fit h-fit my-5 py-1.5 px-4 mx-auto rounded-md flex items-center gap-2 font-normal bg-secondary text-primary  hover:bg-secondary transition-all duration-300 ease-in cursor-pointer text-center `} >
                Add New
                <PackagePlus className="h-5 stroke-1" />
            </button>
            <Suspense fallback={<Loader />} >
                <NewContainerModal {...{ showModal, toggleModal, callback }} />
            </Suspense>
        </>
    )
}