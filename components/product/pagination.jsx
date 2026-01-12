import { ChevronLeft, ChevronRight } from "lucide-react";
import Pagination from "@rc-component/pagination";


export default function MyPagination({ current, total, pageSize, onChange, className }) {
    return (
        <Pagination
            current={current}
            total={total}
            pageSize={pageSize}
            className={className}
            onChange={(page) => onChange(page)}
            itemRender={(page, type, element) => {
                if (type === "page") {
                    return (
                        <button
                            className={`px-4 flex py-2 rounded-lg border border-gray-500/75 text-sm transition
                                                     ${page === current
                                    ? "bg-primary text-white border-secondary"
                                    : "bg-white text-gray-700 hover:bg-gray-100"
                                }`}
                        >
                            {page}
                        </button>
                    );
                }

                if (type === "prev" || type === "next") {
                    return (
                        <button className="px-4 py-2 text-sm font-semibold rounded-lg border border-gray-500/75 bg-white text-gray-700 hover:bg-gray-100">
                            {type === "prev" ?
                                <div className="flex items-center">
                                    <ChevronLeft className=" max-h-4.5" />
                                    Prev
                                </div> :
                                <div className="flex items-center">
                                    Next
                                    <ChevronRight className=" max-h-4.5" />
                                </div>
                            }
                        </button>
                    );
                }

                return element;
            }}
        />
    )
}