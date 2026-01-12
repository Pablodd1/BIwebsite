

export default function GetFinalPrice({ basePrice, discountPercent, unit = "$", className = "" }) {
    return (
        <div className="">
            {discountPercent && discountPercent > 0 ? (
                <>
                    <span className={"line-through text-gray-500 mr-2"}>
                        {unit}{basePrice.toFixed(2)}
                    </span>
                    <span className={className}>
                        {unit}{((basePrice * (1 - discountPercent)).toFixed(2))}
                    </span>
                </>
            ) : (
                <span className={className}>
                    {unit}{basePrice.toFixed(2)}
                </span>
            )}
        </div>

    )
}