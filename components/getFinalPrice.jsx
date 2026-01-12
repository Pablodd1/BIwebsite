

export default function GetFinalPrice({ basePrice, discountPercent, unit = "$" }) {
    return (
        <div className="text-sm">
            {discountPercent && discountPercent > 0 ? (
                <>
                    <span className="line-through text-gray-400 mr-2">
                        {unit}{basePrice.toFixed(2)}
                    </span>
                    <span>
                        {unit}{((basePrice * (1 - discountPercent)).toFixed(2))}
                    </span>
                </>
            ) : (
                <span>{unit}{basePrice.toFixed(2)}</span>
            )}
        </div>

    )
}