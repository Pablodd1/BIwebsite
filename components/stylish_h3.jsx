export default function Stylish_H3({ h3, className = " tracking-widest uppercase text-sm md:text-lg mb-4" }) {
    return (
        <h2 className={`w-full flex items-center justify-between gap-2 ${className}`}>
            {h3}
            <span className=" grow bg-current h-px md:h-0.5" ></span>
        </h2>
    )
}