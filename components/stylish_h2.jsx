export default function Stylish_H2({ h2, className = " tracking-widest uppercase text-sm md:text-lg mb-12" }) {
    return (
        <h2 className={`w-full flex items-center justify-between gap-2 ${className}`}>
            {h2}
            <span className=" grow bg-black h-px md:h-0.5" ></span>
        </h2>
    )
}